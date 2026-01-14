import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Bluetooth Premium Brand Colors
const COLORS = {
  primary: '#0082FC', // Bluetooth Blue
  primaryDark: '#005AC1',
  secondary: '#9C27B0', // Purple/Magenta
  secondaryLight: '#F3E5F5',
  accent: '#00D4FF',
  dark: '#0F172A', // Deep slate for text
  body: '#475569', // Slate for body text
  white: '#FFFFFF',
  background: '#F1F5F9', // Light grayish background
  glass: 'rgba(255, 255, 255, 0.9)',
};

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header - Modern Floating Style */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Ionicons name="cube-outline" size={20} color={COLORS.white} />
          </View>
          <Text style={styles.logoText}>App<Text style={{fontWeight: '400'}}>Recursos</Text></Text>
        </View>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="notifications-outline" size={24} color={COLORS.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Hero Section - Gradient Card Effect */}
        <View style={styles.heroCard}>
          <View style={styles.heroContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>UC14 - SISTEMAS MÓVEIS</Text>
            </View>
            <Text style={styles.heroTitle}>Explore os Recursos do Seu Dispositivo</Text>
            <Text style={styles.heroSubtitle}>
              Integração fluida entre hardware e nuvem com alta performance.
            </Text>
            <View style={styles.heroActions}>
              <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/recursos' as any)}>
                <Text style={styles.primaryBtnText}>Iniciar Atividade</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/docs')}>
                <Text style={styles.secondaryBtnText}>Docs</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Categories Grid Style */}
        <View style={styles.gridContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recurso Disponíveis</Text>
            <TouchableOpacity><Text style={styles.seeAll}>Ver todos</Text></TouchableOpacity>
          </View>

          {/* Feature Card: Câmera - Elevated Style */}
          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: '#E0F2FE' }]}>
              <Ionicons name="camera" size={28} color={COLORS.primary} />
            </View>
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>Câmera & Mídia</Text>
              <Text style={styles.featureDesc}>Fotos frontal/traseira em Base64</Text>
            </View>
            <View style={styles.arrowBox}>
              <Ionicons name="chevron-forward" size={20} color={COLORS.primary} />
            </View>
          </TouchableOpacity>

          {/* Feature Card: GPS - Elevated Style */}
          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: '#F5F3FF' }]}>
              <Ionicons name="location" size={28} color={COLORS.secondary} />
            </View>
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>Geolocalização</Text>
              <Text style={styles.featureDesc}>Coordenadas e Timestamp real</Text>
            </View>
            <View style={styles.arrowBox}>
              <Ionicons name="chevron-forward" size={20} color={COLORS.secondary} />
            </View>
          </TouchableOpacity>

          {/* Feature Card: Rede - Elevated Style */}
          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: '#F0FDF4' }]}>
              <Ionicons name="globe-outline" size={28} color="#16A34A" />
            </View>
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>Conectividade</Text>
              <Text style={styles.featureDesc}>Status Wi-Fi, 5G e IP Local</Text>
            </View>
            <View style={styles.arrowBox}>
              <Ionicons name="chevron-forward" size={20} color="#16A34A" />
            </View>
          </TouchableOpacity>
        </View>



        <View style={styles.footer}>
          <Text style={styles.footerText}>© Senac 2026 Todos os direitos reservados</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    backgroundColor: COLORS.primary,
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.dark,
    letterSpacing: -0.5,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  heroCard: {
    margin: 20,
    padding: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 32,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 15,
    overflow: 'hidden',
  },
  heroContent: {
    zIndex: 2,
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    alignSelf: 'flex-start',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    marginBottom: 12,
  },
  heroSubtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 30,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  primaryBtnText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  secondaryBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  gridContainer: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  seeAll: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  featureCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureInfo: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    color: COLORS.body,
  },
  arrowBox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
});
