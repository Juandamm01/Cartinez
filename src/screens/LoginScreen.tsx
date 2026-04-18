import React from 'react';
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
import { styles } from '../styles/LoginStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
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
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.card}>
                
                {/* Logo Section */}
                <View style={styles.logoContainer}>
                  <Text style={styles.logoText}>Cartinez</Text>
                  <Text style={styles.logoSubtitle}>EL CORAZÓN DE LOS LLANOS</Text>
                </View>

                {/* Welcome Text */}
                <View style={{ width: '100%' }}>
                  <Text style={styles.title}>Bienvenido de nuevo</Text>
                  <Text style={styles.subtitle}>
                    Ingresa tus credenciales para continuar con la comunidad.
                  </Text>
                </View>

                {/* Email Input */}
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

                {/* Password Input */}
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
                      secureTextEntry
                    />
                    <Ionicons name="lock-closed-outline" size={20} color="#8B4513" style={styles.inputIcon} />
                  </View>
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.btnSubmit} activeOpacity={0.8}>
                   <Text style={styles.btnSubmitText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>O CONTINÚA CON</Text>
                  <View style={styles.dividerLine} />
                </View>

                {/* Google Button */}
                <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.7}>
                  <Image 
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                    style={styles.googleIcon}
                  />
                  <Text style={styles.btnGoogleText}>Google</Text>
                </TouchableOpacity>

                {/* Footer */}
                <View style={styles.footer}>
                  <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.footerLink}>Regístrate ahora</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
