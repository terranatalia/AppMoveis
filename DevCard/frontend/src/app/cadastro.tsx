import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroCargo, setErroCargo] = useState('');
  const [erroAnos, setErroAnos] = useState('');
  const [erroTecnologia, setErroTecnologia] = useState('');
  const [erroCor, setErroCor] = useState('');

  function validar(): boolean {
    let valido = true;

    if (nome.trim().length < 3) {
      setErroNome('Nome deve ter pelo menos 3 caracteres');
      valido = false;
    } else {
      setErroNome('');
    }

    if (cargo.trim() === '') {
      setErroCargo('Cargo é obrigatório');
      valido = false;
    } else {
      setErroCargo('');
    }

    const anosNum = Number(anos);
    if (anos.trim() === '' || isNaN(anosNum) || anosNum <= 0) {
      setErroAnos('Informe um número maior que 0');
      valido = false;
    } else {
      setErroAnos('');
    }

    if (tecnologia.trim() === '') {
      setErroTecnologia('Tecnologia é obrigatória');
      valido = false;
    } else {
      setErroTecnologia('');
    }

    if (cor === '') {
      setErroCor('Selecione uma cor');
      valido = false;
    } else {
      setErroCor('');
    }

    return valido;
  }

  function gerarCartao() {
    if (validar()) {
      router.push({
        pathname: '/preview',
        params: { nome, cargo, empresa, anos, tecnologia, cor },
      });
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>
        <Text style={styles.subtitulo}>Preencha seus dados de dev</Text>

        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />
        {erroNome !== '' && <Text style={styles.erro}>{erroNome}</Text>}

        <Text style={styles.label}>Cargo</Text>
        <TextInput
          style={styles.input}
          value={cargo}
          onChangeText={setCargo}
          placeholder="Digite seu cargo"
        />
        {erroCargo !== '' && <Text style={styles.erro}>{erroCargo}</Text>}

        <Text style={styles.label}>Empresa (opcional)</Text>
        <TextInput
          style={styles.input}
          value={empresa}
          onChangeText={setEmpresa}
          placeholder="Digite o nome da empresa"
        />

        <Text style={styles.label}>Anos de experiência</Text>
        <TextInput
          style={styles.input}
          value={anos}
          onChangeText={setAnos}
          placeholder="Digite quantos anos de experiência você tem"
          keyboardType="numeric"
        />
        {erroAnos !== '' && <Text style={styles.erro}>{erroAnos}</Text>}

        <Text style={styles.label}>Tecnologia favorita</Text>
        <TextInput
          style={styles.input}
          value={tecnologia}
          onChangeText={setTecnologia}
          placeholder="React Native"
        />
        {erroTecnologia !== '' && (
          <Text style={styles.erro}>{erroTecnologia}</Text>
        )}

        <Text style={styles.label}>Cor do cartão</Text>
        <View style={styles.coresContainer}>
          <TouchableOpacity
            style={[
              styles.corBotao,
              cor === 'Azul' && styles.corSelecionada,
            ]}
            onPress={() => setCor('Azul')}
          >
            <View style={[styles.corCirculo, { backgroundColor: '#3B82F6' }]} />
            <Text style={styles.corTexto}>Azul</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.corBotao,
              cor === 'Verde' && styles.corSelecionada,
            ]}
            onPress={() => setCor('Verde')}
          >
            <View style={[styles.corCirculo, { backgroundColor: '#22C55E' }]} />
            <Text style={styles.corTexto}>Verde</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.corBotao,
              cor === 'Roxo' && styles.corSelecionada,
            ]}
            onPress={() => setCor('Roxo')}
          >
            <View style={[styles.corCirculo, { backgroundColor: '#8B5CF6' }]} />
            <Text style={styles.corTexto}>Roxo</Text>
          </TouchableOpacity>
        </View>
        {erroCor !== '' && <Text style={styles.erro}>{erroCor}</Text>}

        <TouchableOpacity style={styles.botao} onPress={gerarCartao}>
          <Text style={styles.botaoTexto}>Gerar Cartão</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E1B4B',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  erro: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
  coresContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  corBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
  },
  corSelecionada: {
    borderColor: '#7C3AED',
    backgroundColor: '#F5F3FF',
  },
  corCirculo: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  corTexto: {
    fontSize: 14,
    color: '#374151',
  },
  botao: {
    backgroundColor: '#7C3AED',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
