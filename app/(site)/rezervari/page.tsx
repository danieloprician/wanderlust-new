'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  checkIn: string;
  checkOut: string;
  preferences: string;
  honeypot: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function RezervariFazaPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    checkIn: '',
    checkOut: '',
    preferences: '',
    honeypot: '', // Anti-spam
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitTime] = useState(Date.now()); // Time-trap anti-spam

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Numele trebuie să conțină cel puțin 3 caractere';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalid';
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Număr de telefon invalid';
    }

    // Check-in validation
    if (!formData.checkIn) {
      newErrors.checkIn = 'Data de check-in este obligatorie';
    } else {
      const checkInDate = new Date(formData.checkIn);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (checkInDate < today) {
        newErrors.checkIn = 'Data de check-in nu poate fi în trecut';
      }
    }

    // Check-out validation
    if (!formData.checkOut) {
      newErrors.checkOut = 'Data de check-out este obligatorie';
    } else if (formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Data de check-out trebuie să fie după check-in';
      }
    }

    // Guests validation
    const guestsNum = parseInt(formData.guests);
    if (guestsNum < 1 || guestsNum > 8) {
      newErrors.guests = 'Numărul de persoane trebuie să fie între 1 și 8';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check (spam protection)
    if (formData.honeypot) {
      console.log('Spam detected');
      return;
    }

    // Time-trap check (spam protection - minimum 3 seconds to fill form)
    const timeDiff = Date.now() - submitTime;
    if (timeDiff < 3000) {
      console.log('Form submitted too quickly');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: '2',
          checkIn: '',
          checkOut: '',
          preferences: '',
          honeypot: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Rezervă Cabana
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Completează formularul și îți vom confirma disponibilitatea în 24h
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-surface border-b border-border">
        <div className="container-custom py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent">
                  Acasă
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-text font-medium">Rezervări</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="section">
        <div className="container-custom max-w-4xl">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div
              className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg animate-slide-up"
              role="alert"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-1">
                    Cerere Trimisă cu Succes!
                  </h3>
                  <p className="text-green-700">
                    Mulțumim pentru cererea de rezervare! Vă vom contacta în maximum 24 de ore
                    pentru a confirma disponibilitatea și a finaliza rezervarea.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div
              className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg"
              role="alert"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-1">
                    Eroare la Trimitere
                  </h3>
                  <p className="text-red-700 mb-2">
                    A apărut o eroare la trimiterea formularului. Vă rugăm încercați din nou sau
                    contactați-ne direct.
                  </p>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className="text-red-800 underline hover:text-red-900"
                  >
                    Trimite email direct
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Formular de Rezervare
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ position: 'absolute', left: '-9999px' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="label">
                      Nume complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input ${errors.name ? 'input-error' : ''}`}
                      placeholder="Ex: Ion Popescu"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="form-error" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="label">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'input-error' : ''}`}
                        placeholder="exemplu@email.com"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="form-error" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="label">
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input ${errors.phone ? 'input-error' : ''}`}
                        placeholder="0712345678"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="form-error" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Check-in & Check-out */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="checkIn" className="label">
                        Check-in <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className={`input ${errors.checkIn ? 'input-error' : ''}`}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.checkIn}
                        aria-describedby={errors.checkIn ? 'checkIn-error' : undefined}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {errors.checkIn && (
                        <p id="checkIn-error" className="form-error" role="alert">
                          {errors.checkIn}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="checkOut" className="label">
                        Check-out <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className={`input ${errors.checkOut ? 'input-error' : ''}`}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.checkOut}
                        aria-describedby={errors.checkOut ? 'checkOut-error' : undefined}
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      />
                      {errors.checkOut && (
                        <p id="checkOut-error" className="form-error" role="alert">
                          {errors.checkOut}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="label">
                      Număr persoane <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`input ${errors.guests ? 'input-error' : ''}`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.guests}
                      aria-describedby={errors.guests ? 'guests-error' : undefined}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'persoană' : 'persoane'}
                        </option>
                      ))}
                    </select>
                    {errors.guests && (
                      <p id="guests-error" className="form-error" role="alert">
                        {errors.guests}
                      </p>
                    )}
                  </div>

                  {/* Preferences */}
                  <div>
                    <label htmlFor="preferences" className="label">
                      Preferințe / Cerințe speciale (opțional)
                    </label>
                    <textarea
                      id="preferences"
                      name="preferences"
                      value={formData.preferences}
                      onChange={handleChange}
                      rows={4}
                      className="input resize-none"
                      placeholder="Ex: aniversare, check-in târziu, nevoi speciale..."
                    />
                  </div>

                  {/* Terms */}
                  <div className="bg-background p-4 rounded-lg text-sm text-text-muted">
                    <p>
                      Prin trimiterea acestui formular, sunt de acord cu{' '}
                      <Link href="/termeni" className="text-primary hover:text-accent underline">
                        termenii și condițiile
                      </Link>{' '}
                      și{' '}
                      <Link
                        href="/politica-confidentialitate"
                        className="text-primary hover:text-accent underline"
                      >
                        politica de confidențialitate
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="spinner w-5 h-5 border-2" />
                        Se trimite...
                      </span>
                    ) : (
                      'Trimite cererea de rezervare'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="card p-6 bg-primary/5">
                <h3 className="text-lg font-semibold text-primary mb-4">Pași Următori</h3>
                <ol className="space-y-3 text-sm text-text-light">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Trimite formularul de rezervare</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Verificăm disponibilitatea (max 24h)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>Primești confirmarea și detaliile de plată</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>Plătești avansul de 30%</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      5
                    </span>
                    <span>Rezervarea este confirmată! 🎉</span>
                  </li>
                </ol>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Contact Direct
                </h3>
                <p className="text-sm text-text-light mb-4">
                  Preferi să vorbești cu noi direct? Nu ezita să ne contactezi!
                </p>
                <div className="space-y-3 text-sm">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className="flex items-center gap-3 text-text hover:text-accent transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {process.env.NEXT_PUBLIC_PHONE}
                  </a>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className="flex items-center gap-3 text-text hover:text-accent transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
              </div>

              <div className="card p-6 bg-accent/5">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  💡 Sfat Pro
                </h3>
                <p className="text-sm text-text-light">
                  Rezervă cu minim 30 de zile înainte pentru a beneficia de reducerea Early Bird
                  de 10%!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
