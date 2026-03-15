import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

interface ListaTarefasProps {
    tarefas: Tarefa[];
    onToggleTarefa: (id: number) => void;
}

export default function ListaTarefas({ tarefas, onToggleTarefa }: ListaTarefasProps) {
    const [filtro, setFiltro] = useState<"todas" | "pendentes" | "concluidas">("todas");

return (
    <View>
    <Text>Filtro atual: {filtro}</Text>
    </View>
);
}