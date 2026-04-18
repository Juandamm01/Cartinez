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
    width: '100%',
    backgroundColor: 'rgba(245, 245, 235, 0.92)', // Crema suave como el mockup
    borderRadius: 40,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logoText: {
    fontSize: 42,
    fontWeight: '900',
    color: '#8B4513', // Marrón oscuro
    fontStyle: 'italic',
    letterSpacing: -1,
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#5D4037',
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: -5,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
    lineHeight: 20,
    alignSelf: 'flex-start',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: 0.5,
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: '700',
    color: '#A0522D',
  },
  inputWrapper: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
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
    height: 60,
    backgroundColor: '#954D0D', // Marrón tirando a naranja quemado
    borderRadius: 20,
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
    fontSize: 18,
    fontWeight: '800',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dividerText: {
    fontSize: 11,
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
    borderColor: 'rgba(0,0,0,0.05)',
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
