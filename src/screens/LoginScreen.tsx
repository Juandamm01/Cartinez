import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import EntranceAnimation from '../animations/EntranceAnimation';
import AnimatedLock from '../animations/AnimatedLock';
import { styles } from '../styles/LoginStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation, route }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  // Anima solo cuando se llega mediante un botón (no con back)
  // El parámetro triggerAnim viene de RegisterScreen al pulsar "Inicia sesión"
  useFocusEffect(
    useCallback(() => {
      const params = route.params as any;
      if (params?.triggerAnim) {
        setAnimKey(prev => prev + 1);
        // Limpia el parámetro para no re-animar en la próxima visita sin botón
        navigation.setParams({ triggerAnim: undefined } as any);
      }
    }, [route.params])
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* ── Back Button (igual que RegisterScreen) ── */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 38,
          left: 14,
          zIndex: 99,
          backgroundColor: 'rgba(0,0,0,0.30)',
          borderRadius: 14,
          padding: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={18} color="#fff" />
      </TouchableOpacity>

      <ImageBackground
        source={require('../assets/image/Inicio_Sesion_Cartinez.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 15, alignItems: 'center' }}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            >
              <EntranceAnimation key={`card-${animKey}`} type="zoom" scale={0.95} duration={500}>
                <View style={styles.card}>

                  {/* Logo */}
                  <EntranceAnimation key={`logo-${animKey}`} delay={80} duration={300} type="slide" direction="down" distance={25}>
                    <View style={styles.logoContainer}>
                      <Image
                        source={require('../assets/image/Cartinez-Logo.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.logoSubtitle}>EL CORAZÓN DE LOS LLANOS</Text>
                    </View>
                  </EntranceAnimation>

                  {/* Título */}
                  <EntranceAnimation key={`title-${animKey}`} delay={160} duration={300} type="slide" direction="left" distance={20}>
                    <View style={{ width: '100%' }}>
                      <Text style={styles.title}>Bienvenido de nuevo</Text>
                      <Text style={styles.subtitle}>Ingresa tus credenciales para continuar.</Text>
                    </View>
                  </EntranceAnimation>

                  {/* Email */}
                  <EntranceAnimation key={`email-${animKey}`} delay={230} duration={300} type="slide" direction="up" distance={15}>
                    <View style={styles.inputGroup}>
                      <View style={styles.labelRow}>
                        <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
                      </View>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.input}
                          placeholder="nombre@ejemplo.com"
                          placeholderTextColor="rgba(0,0,0,0.2)"
                          keyboardType="email-address"
                          autoCapitalize="none"
                        />
                        <Ionicons name="mail-outline" size={20} color="#8B4513" style={styles.inputIcon} />
                      </View>
                    </View>
                  </EntranceAnimation>

                  {/* Contraseña */}
                  <EntranceAnimation key={`pass-${animKey}`} delay={300} duration={300} type="slide" direction="up" distance={15}>
                    <View style={styles.inputGroup}>
                      <View style={styles.labelRow}>
                        <Text style={styles.label}>CONTRASEÑA</Text>
                        <TouchableOpacity>
                          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.input}
                          placeholder="••••••••"
                          placeholderTextColor="rgba(0,0,0,0.2)"
                          secureTextEntry={!showPassword}
                        />
                        <AnimatedLock isVisible={showPassword} onPress={() => setShowPassword(!showPassword)} />
                      </View>
                    </View>
                  </EntranceAnimation>

                  {/* Botón Login */}
                  <EntranceAnimation key={`btn-${animKey}`} delay={360} duration={350} type="bounce" distance={5}>
                    <TouchableOpacity style={styles.btnSubmit} activeOpacity={0.8}>
                      <Text style={styles.btnSubmitText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                  </EntranceAnimation>

                  {/* Divider */}
                  <EntranceAnimation key={`div-${animKey}`} delay={420} duration={280} type="fade">
                    <View style={styles.dividerContainer}>
                      <View style={styles.dividerLine} />
                      <Text style={styles.dividerText}>O CONTINÚA CON</Text>
                      <View style={styles.dividerLine} />
                    </View>
                  </EntranceAnimation>

                  {/* Google */}
                  <EntranceAnimation key={`google-${animKey}`} delay={470} duration={300} type="slide" direction="up" distance={18}>
                    <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.7}>
                      <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                        style={styles.googleIcon}
                      />
                      <Text style={styles.btnGoogleText}>Google</Text>
                    </TouchableOpacity>
                  </EntranceAnimation>

                  {/* Footer */}
                  <EntranceAnimation key={`footer-${animKey}`} delay={510} duration={280} type="fade">
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.footerLink}>Regístrate ahora</Text>
                      </TouchableOpacity>
                    </View>
                  </EntranceAnimation>

                </View>
              </EntranceAnimation>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
