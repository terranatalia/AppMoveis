import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

type PreviewParams = {
  nome: string;
  cargo: string;
  empresa: string;
  anos: string;
  tecnologia: string;
  cor: string;
};

export default function Preview() {
  const router = useRouter();
  const { nome, cargo, empresa, anos, tecnologia, cor } =
    useLocalSearchParams<PreviewParams>();

  function getCorFundo(): string {
    if (cor === 'Azul') {
      return '#3B82F6';
    } else if (cor === 'Verde') {
      return '#22C55E';
    } else {
      return '#8B5CF6';
    }
  }

  const primeiraLetra = nome ? nome.charAt(0).toUpperCase() : '?';

  const anosNum = Number(anos);
  let nivel = '';
  let corBadge = '';

  if (anosNum <= 2) {
    nivel = 'Júnior';
    corBadge = '#9CA3AF';
  } else if (anosNum <= 5) {
    nivel = 'Pleno';
    corBadge = '#3B82F6';
  } else {
    nivel = 'Sênior';
    corBadge = '#F59E0B';
  }

  return (
    <View style={styles.container}>

      <View style={[styles.cartao, { backgroundColor: getCorFundo() }]}>

        <View style={styles.avatarContainer}>
          <Text style={styles.avatarLetra}>{primeiraLetra}</Text>
        </View>
        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargoEmpresa}>
          {cargo}
          {empresa ? ` · ${empresa}` : ''}
        </Text>

        <Text style={styles.especialista}>
          Especialista em {tecnologia}
        </Text>

        <View style={[styles.badge, { backgroundColor: corBadge }]}>
          <Text style={styles.badgeTexto}>{nivel}</Text>
        </View>

      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botaoEditar}
          onPress={() => router.back()}
        >
          <Text style={styles.botaoEditarTexto}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => router.replace('/sucesso')}
        >
          <Text style={styles.botaoFinalizarTexto}>Finalizar</Text>
        </TouchableOpacity>
      </View>
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
  cartao: {
    width: '100%',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarLetra: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cargoEmpresa: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
    textAlign: 'center',
  },
  especialista: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  badgeTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  botoesContainer: {
    width: '100%',
    marginTop: 30,
    gap: 12,
  },
  botaoEditar: {
    borderWidth: 2,
    borderColor: '#7C3AED',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoEditarTexto: {
    color: '#7C3AED',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoFinalizar: {
    backgroundColor: '#7C3AED',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoFinalizarTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
