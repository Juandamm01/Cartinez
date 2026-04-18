import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useFocusEffect } from '@react-navigation/native';
import EntranceAnimation from '../animations/EntranceAnimation';
import AnimatedLock from '../animations/AnimatedLock';
import { styles } from '../styles/RegisterStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [showPassword, setShowPassword]   = useState(false);
  const [showConfirm, setShowConfirm]     = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [phone, setPhone]                 = useState('+57 ');
  const [animKey, setAnimKey]             = useState(0);

  // Re-dispara animaciones cada vez que la pantalla gana foco
  useFocusEffect(
    useCallback(() => {
      setAnimKey(prev => prev + 1);
    }, [])
  );

  const handlePhoneChange = (text: string) => {
    if (!text.startsWith('+57 ')) {
      setPhone('+57 ');
    } else {
      setPhone(text);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* ── Back Button – más pequeño y más arriba ── */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={18} color="#fff" />
        </TouchableOpacity>

        {/* ── Hero Image ── */}
        <MotiView
          key={`hero-${animKey}`}
          from={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 500 }}
          style={styles.heroWrapper}
        >
          <Image
            source={require('../assets/image/Cristo-rey.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            {/* Subtítulo arriba */}
            <MotiView
              key={`sub-${animKey}`}
              from={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 400, delay: 200 }}
            >
              <Text style={styles.heroSubtitle}>El corazón de los llanos te espera</Text>
            </MotiView>

            {/* Logo abajo a la izquierda */}
            <MotiView
              key={`logo-${animKey}`}
              from={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 14, delay: 100 }}
              style={{ alignSelf: 'flex-start' }}
            >
              <Image
                source={require('../assets/image/Cartinez-Logo.png')}
                style={styles.heroLogo}
                resizeMode="contain"
              />
            </MotiView>
          </View>
        </MotiView>

        {/* ── Formulario scrolleable ── */}
        <ScrollView
          style={styles.formSection}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 10 }}
        >

          {/* Nombre & Apellido */}
          <EntranceAnimation key={`name-${animKey}`} delay={150} duration={400} type="slide" direction="up" distance={18}>
            <View style={styles.rowGroup}>
              <View style={styles.halfGroup}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>NOMBRE</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Juan" placeholderTextColor="rgba(0,0,0,0.2)" autoCapitalize="words" />
                    <Ionicons name="person-outline" size={18} color="#8B4513" style={styles.inputIcon} />
                  </View>
                </View>
              </View>
              <View style={styles.halfGroup}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>APELLIDO</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Pérez" placeholderTextColor="rgba(0,0,0,0.2)" autoCapitalize="words" />
                    <Ionicons name="person-outline" size={18} color="#8B4513" style={styles.inputIcon} />
                  </View>
                </View>
              </View>
            </View>
          </EntranceAnimation>

          {/* Correo */}
          <EntranceAnimation key={`email-${animKey}`} delay={230} duration={400} type="slide" direction="up" distance={18}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="nombre@ejemplo.com"
                  placeholderTextColor="rgba(0,0,0,0.2)"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Ionicons name="mail-outline" size={18} color="#8B4513" style={styles.inputIcon} />
              </View>
            </View>
          </EntranceAnimation>

          {/* Teléfono */}
          <EntranceAnimation key={`phone-${animKey}`} delay={310} duration={400} type="slide" direction="up" distance={18}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>TELÉFONO</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={handlePhoneChange}
                  keyboardType="phone-pad"
                  maxLength={17}
                />
                <Ionicons name="call-outline" size={18} color="#8B4513" style={styles.inputIcon} />
              </View>
            </View>
          </EntranceAnimation>

          {/* Contraseña */}
          <EntranceAnimation key={`pass-${animKey}`} delay={390} duration={400} type="slide" direction="up" distance={18}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CONTRASEÑA</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="••••••••" placeholderTextColor="rgba(0,0,0,0.2)" secureTextEntry={!showPassword} />
                <AnimatedLock isVisible={showPassword} onPress={() => setShowPassword(!showPassword)} />
              </View>
            </View>
          </EntranceAnimation>

          {/* Confirmar Contraseña */}
          <EntranceAnimation key={`confirm-${animKey}`} delay={460} duration={400} type="slide" direction="up" distance={18}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CONFIRMAR CONTRASEÑA</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="••••••••" placeholderTextColor="rgba(0,0,0,0.2)" secureTextEntry={!showConfirm} />
                <AnimatedLock isVisible={showConfirm} onPress={() => setShowConfirm(!showConfirm)} />
              </View>
            </View>
          </EntranceAnimation>

          {/* Términos */}
          <EntranceAnimation key={`terms-${animKey}`} delay={520} duration={350} type="fade">
            <TouchableOpacity style={styles.termsRow} activeOpacity={0.8} onPress={() => setTermsAccepted(!termsAccepted)}>
              <MotiView
                animate={{ backgroundColor: termsAccepted ? '#8B4513' : 'transparent', scale: termsAccepted ? 1.1 : 1 }}
                transition={{ type: 'spring', damping: 12 }}
                style={styles.checkbox}
              >
                {termsAccepted && <Ionicons name="checkmark" size={13} color="#fff" />}
              </MotiView>
              <Text style={styles.termsText}>
                Acepto los <Text style={styles.termsLink}>Términos de Servicio</Text> y la <Text style={styles.termsLink}>Política de Privacidad</Text>
              </Text>
            </TouchableOpacity>
          </EntranceAnimation>

          {/* Botón Crear Cuenta */}
          <EntranceAnimation key={`btn-${animKey}`} delay={580} duration={400} type="bounce" distance={5}>
            <TouchableOpacity style={styles.btnSubmit} activeOpacity={0.8}>
              <Text style={styles.btnSubmitText}>Crear Cuenta</Text>
            </TouchableOpacity>
          </EntranceAnimation>

          {/* Divider */}
          <EntranceAnimation key={`div-${animKey}`} delay={640} duration={350} type="fade">
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>O CONTINÚA CON</Text>
              <View style={styles.dividerLine} />
            </View>
          </EntranceAnimation>

          {/* Google */}
          <EntranceAnimation key={`google-${animKey}`} delay={690} duration={400} type="slide" direction="up" distance={16}>
            <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.7}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }} style={styles.googleIcon} />
              <Text style={styles.btnGoogleText}>Google</Text>
            </TouchableOpacity>
          </EntranceAnimation>

          {/* Footer */}
          <EntranceAnimation key={`footer-${animKey}`} delay={730} duration={350} type="fade">
            <View style={styles.footer}>
              <Text style={styles.footerText}>¿Ya tienes cuenta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login', { triggerAnim: Date.now() })}>
                <Text style={styles.footerLink}>Inicia sesión</Text>
              </TouchableOpacity>
            </View>
          </EntranceAnimation>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
