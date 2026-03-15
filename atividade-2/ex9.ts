type ApiResponse<T> = {
    sucesso: boolean;
    dados: T | null;
    erro: string | null;
};

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

function buscarUsuarios(): ApiResponse<Usuario[]> {

    const resposta: ApiResponse<Usuario[]> = {
        sucesso: true,
        dados: [
            { id: 1, nome: "Ana", email: "ana@email.com" },
            { id: 2, nome: "Maria", email: "maria@email.com" }
        ],
        erro: null
    };
    return resposta;
}