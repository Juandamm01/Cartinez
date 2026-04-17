import React, { useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ImageBackground, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
  Dimensions,
  Animated
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
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

              {/* Action Buttons Section */}
              <Animated.View style={[
                styles.footer,
                { opacity: buttonsOpacity, transform: [{ translateY: buttonsTranslateY }] }
              ]}>
                <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8}>
                  <Text style={styles.btnTextWhite}>Registrarse</Text>
                  <Ionicons name="arrow-forward" size={20} color="white" style={styles.arrowIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOutline} activeOpacity={0.7}>
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
              </Animated.View>

            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.35)' },
  safeArea: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 35, paddingBottom: 25 },
  header: { 
    alignItems: 'center', 
    marginTop: height * 0.05, // Much less space on top
  },
  logo: { 
    width: width * 0.65, // Slightly smaller to gain vertical space
    height: width * 0.65, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 15 
  },
  quoteGlass: { 
    flexDirection: 'row',
    paddingVertical: 15, // Compact
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: -20, // Negative margin to pull it UP
    width: '100%'
  },
  orangeBar: { 
    width: 4, 
    height: '100%', 
    backgroundColor: '#E67E22', 
    marginRight: 15,
    borderRadius: 2
  },
  quoteText: { 
    flex: 1,
    fontSize: 20, // Slightly smaller
    fontWeight: '700', 
    color: '#FFFFFF', 
    fontStyle: 'italic', 
    lineHeight: 28 
  },
  footer: { 
    width: '100%',
    marginTop: 'auto'
  },
  btnPrimary: { 
    backgroundColor: '#8B4513', 
    height: 58, // Compact height
    borderRadius: 29, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12,
    elevation: 5
  },
  btnOutline: { 
    borderWidth: 1.5, 
    borderColor: 'rgba(255, 255, 255, 0.5)', 
    height: 58, 
    borderRadius: 29, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15, 
    backgroundColor: 'rgba(255, 255, 255, 0.1)' 
  },
  btnTextWhite: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  arrowIcon: { marginLeft: 10 },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10, opacity: 0.5 },
  line: { flex: 1, height: 1, backgroundColor: '#FFFFFF' },
  dividerChar: { color: '#FFFFFF', paddingHorizontal: 15, fontSize: 13, fontWeight: 'bold' },
  btnGoogle: { 
    backgroundColor: '#FFFFFF', 
    height: 58, 
    borderRadius: 29, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  googleIconWrapper: { width: 24, height: 24, marginRight: 12 },
  googleIcon: { width: '100%', height: '100%' },
  btnTextBlack: { color: '#1A1A1A', fontSize: 16, fontWeight: '700' },
  footerLegal: { color: 'rgba(255, 255, 255, 0.6)', fontSize: 11, textAlign: 'center', fontWeight: '600' },
});
