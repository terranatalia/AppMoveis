function formatarNome(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `${nome} ${sobrenome}`;
    }
    return nome;
}