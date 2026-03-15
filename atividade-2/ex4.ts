interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string;
}

function formatarProduto(produto: Produto): string {
    const descricao = produto.descricao ? ` - ${produto.descricao}` : '';
    return `${produto.nome} (R$ ${produto.preco.toFixed(2)})${descricao}`;
}