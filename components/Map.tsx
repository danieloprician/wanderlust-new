'use client';

import { useEffect, useRef } from 'react';

interface MapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  markerTitle?: string;
  className?: string;
}

export default function Map({
  lat = 45.5,
  lng = 25.5,
  zoom = 13,
  markerTitle = '{{CABIN_NAME}}',
  className = '',
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !mapRef.current) return;

    const initMap = async () => {
      try {
        // Dynamically import Leaflet only on client
        const L = (await import('leaflet')).default;

        // Fix for default marker icon
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        // Cleanup existing map
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
        }

        // Initialize map
        if (!mapRef.current) return;
        const map = L.map(mapRef.current).setView([lat, lng], zoom);

        // Add OpenStreetMap tile layer (free, no API key needed)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<strong>${markerTitle}</strong>`).openPopup();

        mapInstanceRef.current = map;
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initMap();

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [lat, lng, zoom, markerTitle]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-lg z-0" />
      <noscript>
        <div className="absolute inset-0 flex items-center justify-center bg-surface rounded-lg">
          <p className="text-text-muted">Harta necesită JavaScript pentru a fi afișată.</p>
        </div>
      </noscript>
    </div>
  );
}
