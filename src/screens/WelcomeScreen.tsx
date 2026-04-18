import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
  Animated
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { styles } from '../styles/WelcomeStyles';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const quoteOpacity = useRef(new Animated.Value(0)).current;
  const buttonsOpacity = useRef(new Animated.Value(0)).current;
  const buttonsTranslateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(logoScale, { toValue: 1, friction: 7, tension: 40, useNativeDriver: true }),
      Animated.timing(quoteOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(buttonsOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.spring(buttonsTranslateY, { toValue: 0, friction: 8, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground 
        source={require('../assets/image/Fondo_Principal_Cartinez.png')} 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
              
              {/* Top Section - More Compact */}
              <View style={styles.header}>
                <Animated.View style={{ transform: [{ scale: logoScale }] }}>
                  <Image 
                    source={require('../assets/image/Cartinez-Logo.png')} 
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </Animated.View>

                {/* Quote Section - Much higher now */}
                <Animated.View style={[styles.quoteGlass, { opacity: quoteOpacity }]}>
                  <View style={styles.orangeBar} />
                  <Text style={styles.quoteText}>
                    "El que es buen llanero, no abandona a su gente."
                  </Text>
                </Animated.View>
              </View>

              {/* Action Buttons Section - Simplified */}
              <View style={styles.footer}>
                <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8}>
                  <Text style={styles.btnTextWhite}>Registrarse</Text>
                  <Ionicons name="arrow-forward" size={20} color="white" style={styles.arrowIcon} />
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.btnOutline} 
                  activeOpacity={0.5}
                  onPress={() => {
                    console.log('Navegando a Login...');
                    navigation.navigate('Login');
                  }}
                >
                  <Text style={styles.btnTextWhite}>Iniciar sesión</Text>
                </TouchableOpacity>
                
                <View style={styles.dividerRow}>
                  <View style={styles.line} />
                  <Text style={styles.dividerChar}>o</Text>
                  <View style={styles.line} />
                </View>

                <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.9}>
                  <View style={styles.googleIconWrapper}>
                    <Image 
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }} 
                      style={styles.googleIcon}
                    />
                  </View>
                  <Text style={styles.btnTextBlack}>Continuar con Google</Text>
                </TouchableOpacity>

                <Text style={styles.footerLegal}>
                  Cartinez · Villavicencio Conectado
                </Text>
              </View>

            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}
