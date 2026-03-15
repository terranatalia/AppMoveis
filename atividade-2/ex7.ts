function contarOcorrencias<T>(array: T[], valor: T): number {
    return array.reduce((contador, item) => {
        return item === valor ? contador + 1 : contador;
    }, 0);
}