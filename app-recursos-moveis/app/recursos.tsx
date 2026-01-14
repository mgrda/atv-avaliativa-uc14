import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  primary: '#0082FC',
  primaryDark: '#005AC1',
  secondary: '#9C27B0',
  dark: '#0F172A',
  body: '#475569',
  white: '#FFFFFF',
  background: '#F1F5F9',
  success: '#16A34A',
};

export default function RecursosScreen() {
  const router = useRouter();

  const handleAction = (recurso: string) => {
    Alert.alert(
      "Ação do Recurso",
      `Iniciando a funcionalidade de: ${recurso}. \n\n(Os pacotes nativos precisam estar instalados e as permissões aceitas para execução completa).`,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Painel de Recursos</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.introSection}>
          <Text style={styles.sectionLabel}>ATIVIDADE EM CURSO</Text>
          <Text style={styles.mainTitle}>Selecione o recurso para teste</Text>
        </View>

        {/* Câmera Button */}
        <TouchableOpacity 
          style={styles.actionCard} 
          onPress={() => handleAction('Câmera')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#E0F2FE' }]}>
            <Ionicons name="camera" size={32} color={COLORS.primary} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Usar Câmera</Text>
            <Text style={styles.cardDesc}>Capturar foto e converter para Base64</Text>
          </View>
          <Ionicons name="play-circle" size={32} color={COLORS.primary} />
        </TouchableOpacity>

        {/* Localização Button */}
        <TouchableOpacity 
          style={styles.actionCard} 
          onPress={() => handleAction('Localização')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#F5F3FF' }]}>
            <Ionicons name="location" size={32} color={COLORS.secondary} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Usar Localização</Text>
            <Text style={styles.cardDesc}>Obter GPS (Lat/Long) em tempo real</Text>
          </View>
          <Ionicons name="play-circle" size={32} color={COLORS.secondary} />
        </TouchableOpacity>

        {/* Internet Button */}
        <TouchableOpacity 
          style={styles.actionCard} 
          onPress={() => handleAction('Internet')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#F0FDF4' }]}>
            <Ionicons name="globe-outline" size={32} color={COLORS.success} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Usar Internet</Text>
            <Text style={styles.cardDesc}>Verificar banda e status da conexão</Text>
          </View>
          <Ionicons name="play-circle" size={32} color={COLORS.success} />
        </TouchableOpacity>

        <View style={styles.footerSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  scrollContent: {
    padding: 24,
  },
  introSection: {
    marginBottom: 32,
  },
  sectionLabel: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.dark,
    lineHeight: 32,
  },
  actionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 28,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: COLORS.body,
    lineHeight: 18,
  },
  footerSpacing: {
    height: 40,
  }
});
