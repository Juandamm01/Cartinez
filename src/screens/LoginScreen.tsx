import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import EntranceAnimation from '../animations/EntranceAnimation';
import AnimatedLock from '../animations/AnimatedLock';
import { styles } from '../styles/LoginStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
              <EntranceAnimation type="zoom" scale={0.95} duration={900}>
                <View style={styles.card}>
                  
                  {/* Logo Section */}
                  <EntranceAnimation delay={200} type="slide" direction="down" distance={30}>
                    <View style={styles.logoContainer}>
                      <Image 
                        source={require('../assets/image/Cartinez-Logo.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.logoSubtitle}>EL CORAZÓN DE LOS LLANOS</Text>
                    </View>
                  </EntranceAnimation>

                  {/* Welcome Text */}
                  <EntranceAnimation delay={400} type="slide" direction="left" distance={20}>
                    <View style={{ width: '100%' }}>
                      <Text style={styles.title}>Bienvenido de nuevo</Text>
                      <Text style={styles.subtitle}>
                        Ingresa tus credenciales para continuar.
                      </Text>
                    </View>
                  </EntranceAnimation>

                  {/* Email Input */}
                  <EntranceAnimation delay={550} type="slide" direction="up" distance={15}>
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

                  {/* Password Input */}
                  <EntranceAnimation delay={700} type="slide" direction="up" distance={15}>
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
                        <AnimatedLock 
                          isVisible={showPassword} 
                          onPress={() => setShowPassword(!showPassword)} 
                        />
                      </View>
                    </View>
                  </EntranceAnimation>

                  {/* Login Button */}
                  <EntranceAnimation delay={850} type="bounce" distance={5}>
                    <TouchableOpacity style={styles.btnSubmit} activeOpacity={0.8}>
                       <Text style={styles.btnSubmitText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                  </EntranceAnimation>

                  {/* Divider */}
                  <EntranceAnimation delay={1000} type="fade">
                    <View style={styles.dividerContainer}>
                      <View style={styles.dividerLine} />
                      <Text style={styles.dividerText}>O CONTINÚA CON</Text>
                      <View style={styles.dividerLine} />
                    </View>
                  </EntranceAnimation>

                  {/* Google Button */}
                  <EntranceAnimation delay={1150} type="slide" direction="up" distance={20}>
                    <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.7}>
                      <Image 
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                        style={styles.googleIcon}
                      />
                      <Text style={styles.btnGoogleText}>Google</Text>
                    </TouchableOpacity>
                  </EntranceAnimation>

                  {/* Footer */}
                  <EntranceAnimation delay={1250} type="fade">
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
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
