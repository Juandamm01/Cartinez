import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';

interface Props {
  isVisible: boolean;
  onPress: () => void;
}

export default function AnimatedLock({ isVisible, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <MotiView
        from={{ scale: 0.8, rotate: '0deg' }}
        animate={{ 
          scale: 1, 
          rotate: isVisible ? '0deg' : '360deg' 
        }}
        transition={{ type: 'spring', damping: 10 }}
      >
        <Ionicons 
          name={isVisible ? "lock-open-outline" : "lock-closed-outline"} 
          size={22} 
          color="#8B4513" 
          style={{ opacity: 0.8 }}
        />
      </MotiView>
    </TouchableOpacity>
  );
}
