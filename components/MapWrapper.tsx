'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

interface MapWrapperProps {
  lat: number;
  lng: number;
  zoom: number;
  markerTitle: string;
}

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-lg bg-surface flex items-center justify-center">
      <div className="animate-pulse text-text-muted">Loading map...</div>
    </div>
  ),
});

export default function MapWrapper({ lat, lng, zoom, markerTitle }: MapWrapperProps) {
  return <Map lat={lat} lng={lng} zoom={zoom} markerTitle={markerTitle} />;
}
