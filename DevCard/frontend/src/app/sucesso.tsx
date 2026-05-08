import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✓</Text>
      </View>

      <Text style={styles.mensagem}>Cartão criado com sucesso!</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.botaoTexto}>Criar outro cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  mensagem: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1B4B',
    textAlign: 'center',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#7C3AED',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
