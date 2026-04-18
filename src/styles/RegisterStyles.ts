import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  /* ── Hero Image ── */
  heroWrapper: {
    width: '100%',
    height: height * 0.38,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.38)',
    justifyContent: 'space-between', // subtítulo arriba, logo abajo
    paddingHorizontal: 24,
    paddingTop: 70,   // deja espacio al botón de atrás
    paddingBottom: 20,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.82)',
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  heroLogo: {
    width: width * 0.30,
    height: width * 0.30,
    alignSelf: 'flex-start',
    marginTop: 14,   // más abajo
    marginLeft: -6,  // un tris más a la izquierda
  },

  /* ── Scrollable Form Section ── */
  formSection: {
    flex: 1,
    backgroundColor: '#FAF7F2',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -24,
    paddingHorizontal: 22,
    paddingTop: 24,
  },

  /* ── Back button ── */
  backBtn: {
    position: 'absolute',
    top: 38,          // más arriba
    left: 14,
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.30)',
    borderRadius: 14, // más pequeño
    padding: 5,       // más pequeño
  },

  /* ── Form Fields ── */
  rowGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  halfGroup: {
    flex: 1,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 14,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    color: '#3D2B1F',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  inputWrapper: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(139,69,19,0.12)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  inputWrapperFocused: {
    borderColor: '#8B4513',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  inputIcon: {
    marginLeft: 8,
    opacity: 0.45,
  },

  /* ── Términos ── */
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 4,
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#8B4513',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#8B4513',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  termsLink: {
    color: '#8B4513',
    fontWeight: '700',
  },

  /* ── Submit Button ── */
  btnSubmit: {
    width: '100%',
    height: 55,
    backgroundColor: '#954D0D',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#954D0D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 16,
  },
  btnSubmitText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  /* ── Divider ── */
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  dividerText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#888',
    paddingHorizontal: 14,
  },

  /* ── Google Button ── */
  btnGoogle: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.08)',
    marginBottom: 22,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  btnGoogleText: {
    color: '#1A1A1A',
    fontSize: 15,
    fontWeight: '700',
  },

  /* ── Footer ── */
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 28, // evita que quede pegado al borde inferior
  },
  footerText: {
    fontSize: 13,
    color: '#888',
  },
  footerLink: {
    fontSize: 13,
    color: '#A0522D',
    fontWeight: '800',
    marginLeft: 5,
  },
});
