import React from 'react';
import { MotiView, MotiText } from 'moti';

interface Props {
  children: React.ReactNode;
  delay?: number;
  type?: 'fade' | 'slide' | 'zoom';
}

export default function EntranceAnimation({ 
  children, 
  delay = 0, 
  type = 'slide'
}: Props) {
  const getInitialState = () => {
    switch (type) {
      case 'zoom': return { opacity: 0, scale: 0.5 };
      case 'fade': return { opacity: 0 };
      default: return { opacity: 0, translateY: 30 };
    }
  };

  const getAnimateState = () => {
    switch (type) {
      case 'zoom': return { opacity: 1, scale: 1 };
      case 'fade': return { opacity: 1 };
      default: return { opacity: 1, translateY: 0 };
    }
  };

  return (
    <MotiView
      from={getInitialState()}
      animate={getAnimateState()}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay,
      }}
    >
      {children}
    </MotiView>
  );
}
