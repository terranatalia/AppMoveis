import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.iconContainer}>
          <Text style={styles.icon}>💳</Text>
        </View>

        <Text style={styles.titulo}>DevCard</Text>

        <Text style={styles.subtitulo}>
          Seu cartão de visita digital{'\n'}de dev mobile
        </Text>
      </View>

      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.botaoTexto}>Criar meu cartão</Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>Aplicações Móveis · IA 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 50,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1E1B4B',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomArea: {
    width: '100%',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#7C3AED',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
