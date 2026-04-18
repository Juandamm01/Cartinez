import React, { useMemo } from 'react';
import { MotiView } from 'moti';

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'zoom' | 'bounce';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  scale?: number;
}

export default function EntranceAnimation({ 
  children, 
  delay = 0, 
  duration = 800,
  type = 'slide',
  direction = 'up',
  distance = 50,
  scale = 0.8
}: Props) {
  
  const from = useMemo(() => {
    const transform: any[] = [];
    
    let initialScale = 1;
    if (type === 'zoom') initialScale = scale;
    if (type === 'bounce') initialScale = 0.3;
    transform.push({ scale: initialScale });

    let translateX = 0;
    let translateY = 0;

    if (type === 'slide' || type === 'bounce' || type === 'zoom') {
      switch (direction) {
        case 'up': translateY = distance; break;
        case 'down': translateY = -distance; break;
        case 'left': translateX = distance; break;
        case 'right': translateX = -distance; break;
      }
    }
    transform.push({ translateX });
    transform.push({ translateY });

    return {
      opacity: 0,
      transform,
    };
  }, [type, direction, distance, scale]);

  const animate = useMemo(() => ({
    opacity: 1,
    transform: [
      { scale: 1 },
      { translateX: 0 },
      { translateY: 0 },
    ],
  }), []);

  const transition: any = useMemo(() => {
    if (type === 'bounce') {
      return {
        type: 'spring',
        damping: 12,
        stiffness: 90,
        delay,
      };
    }
    return {
      type: 'timing',
      duration,
      delay,
    };
  }, [type, delay, duration]);

  return (
    <MotiView
      from={from}
      animate={animate}
      transition={transition}
    >
      {children}
    </MotiView>
  );
}
