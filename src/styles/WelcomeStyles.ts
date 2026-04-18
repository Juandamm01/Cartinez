import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.35)' },
  safeArea: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 35, paddingBottom: 25 },
  header: { 
    alignItems: 'center', 
    marginTop: height * 0.05, 
  },
  logo: { 
    width: width * 0.65, 
    height: width * 0.65, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 15 
  },
  quoteGlass: { 
    flexDirection: 'row',
    paddingVertical: 15, 
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: -20, 
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
    fontSize: 20, 
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
    height: 58, 
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
