import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '94%',
    backgroundColor: 'rgba(245, 245, 235, 0.94)', 
    borderRadius: 35,
    padding: 20, // Reducido de 25
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10, // Reducido de 20
    marginTop: -5,
  },
  logoImage: {
    width: width * 0.35, // Reducido de 0.45
    height: width * 0.35, // Reducido de 0.45
  },
  logoSubtitle: {
    fontSize: 9, // Reducido de 10
    color: '#5D4037',
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: -12,
    textAlign: 'center',
  },
  title: {
    fontSize: 22, // Reducido de 26
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 4, // Reducido de 8
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 13, // Reducido de 14
    color: '#666',
    marginBottom: 15, // Reducido de 25
    lineHeight: 18,
    alignSelf: 'flex-start',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 10, // Reducido de 15
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6, // Reducido de 8
  },
  label: {
    fontSize: 11, // Reducido de 12
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: 0.5,
  },
  forgotPassword: {
    fontSize: 11, // Reducido de 12
    fontWeight: '700',
    color: '#A0522D',
  },
  inputWrapper: {
    width: '100%',
    height: 50, // Reducido de 55
    backgroundColor: '#FFFFFF',
    borderRadius: 12, // Reducido de 15
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  inputIcon: {
    marginLeft: 10,
    opacity: 0.4,
  },
  btnSubmit: {
    width: '100%', 
    height: 55, 
    backgroundColor: '#954D0D', 
    borderRadius: 15, // Más cuadrado/moderno como los inputs
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#954D0D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  btnSubmitText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dividerText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#888',
    paddingHorizontal: 15,
  },
  btnGoogle: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  btnGoogleText: {
    color: '#1A1A1A',
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
  footerLink: {
    fontSize: 13,
    color: '#A0522D',
    fontWeight: '800',
    marginLeft: 5,
  },
});
