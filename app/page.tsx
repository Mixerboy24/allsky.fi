'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

const MapComponent = dynamic(() => import('./components/MapComponent'), { ssr: false });

const FinlandMap: FC = () => {
  return <MapComponent />;
};

export default FinlandMap;