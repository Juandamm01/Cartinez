import React from 'react';
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
  
  const getInitial = () => {
    'worklet';
    let tx = 0;
    let ty = 0;
    let s = 1;

    if (type === 'zoom') s = scale;
    if (type === 'bounce') s = 0.3;

    if (type === 'slide' || type === 'bounce' || type === 'zoom') {
      if (direction === 'up') ty = distance;
      else if (direction === 'down') ty = -distance;
      else if (direction === 'left') tx = distance;
      else if (direction === 'right') tx = -distance;
    }

    return {
      opacity: 0,
      scale: s,
      translateX: tx,
      translateY: ty
    };
  };

  return (
    <MotiView
      from={getInitial()}
      animate={{
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        type: type === 'bounce' ? 'spring' : 'timing',
        duration: duration,
        delay: delay,
      }}
      style={{ width: '100%', alignItems: 'center' }}
    >
      {children}
    </MotiView>
  );
}
