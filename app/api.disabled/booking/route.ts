import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route for Booking Form Submission
 * 
 * PLACEHOLDER: This is a basic implementation that returns success.
 * For production, you should integrate with:
 * - Email service (Resend, SendGrid, Nodemailer + SMTP)
 * - Database (to store bookings)
 * - Calendar API (Google Calendar, Booking.com)
 * - Payment gateway (Stripe, PayPal)
 * 
 * See README.md for integration examples
 */

// Rate limiting (basic - for production use a proper solution like Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute
    return true;
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Prea multe cereri. Vă rugăm încercați din nou mai târziu.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, guests, checkIn, checkOut, preferences, honeypot } = body;

    // Honeypot check (spam protection)
    if (honeypot) {
      console.log('Spam detected via honeypot');
      return NextResponse.json({ message: 'Cerere trimisă' }, { status: 200 });
    }

    // Validation
    if (!name || !email || !phone || !guests || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalid.' }, { status: 400 });
    }

    // Date validation
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      return NextResponse.json(
        { error: 'Data de check-in nu poate fi în trecut.' },
        { status: 400 }
      );
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { error: 'Data de check-out trebuie să fie după check-in.' },
        { status: 400 }
      );
    }

    // Calculate number of nights
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    // Log booking (in production, save to database)
    console.log('📅 New booking request:', {
      name,
      email,
      phone,
      guests,
      checkIn,
      checkOut,
      nights,
      preferences,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send confirmation email
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Cabana <reservations@yourdomain.com>',
    //   to: email,
    //   subject: 'Confirmare cerere rezervare',
    //   html: `...`
    // });

    // TODO: Send notification email to owner
    // await resend.emails.send({
    //   from: 'Website <noreply@yourdomain.com>',
    //   to: process.env.OWNER_EMAIL,
    //   subject: 'Cerere de rezervare nouă',
    //   html: `...`
    // });

    // TODO: Save to database
    // await db.bookings.create({
    //   data: { name, email, phone, guests, checkIn, checkOut, preferences }
    // });

    // Success response
    return NextResponse.json(
      {
        message: 'Cererea de rezervare a fost trimisă cu succes! Vă vom contacta în maximum 24 de ore.',
        bookingId: `TEMP-${Date.now()}`, // In production, use real booking ID from database
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare la procesarea cererii. Vă rugăm încercați din nou.' },
      { status: 500 }
    );
  }
}

// OPTIONS for CORS (if needed)
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
