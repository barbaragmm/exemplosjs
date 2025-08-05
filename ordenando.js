// a) Função swap: troca os valores de duas posições de um vetor.
const swap = (vetor, pos1, pos2) => {
    // Utiliza a desestruturação de array para uma troca eficiente e limpa.
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

// b) Função shuffle: embaralha os elementos de um vetor.
const shuffle = (vetor, quantidadeTrocas) => {
    const tamanho = vetor.length;
    for (let i = 0; i < quantidadeTrocas; i++) {
        // Gera dois índices aleatórios dentro do intervalo do vetor.
        const pos1 = Math.floor(Math.random() * tamanho);
        const pos2 = Math.floor(Math.random() * tamanho);
        // Usa a função swap para trocar os elementos nas posições aleatórias.
        if (pos1 !== pos2) {
            swap(vetor, pos1, pos2);
        }
    }
};

// c) Função bubble_sort: ordena um vetor com o algoritmo Bubble Sort.
const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        // A cada iteração, o maior elemento "flutua" para o final.
        for (let j = 0; j < n - i - 1; j++) {
            // Compara elementos adjacentes e troca se estiverem na ordem errada.
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// d) Função selection_sort: ordena um vetor com o algoritmo Selection Sort.
const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        // Encontra o índice do menor elemento no restante do vetor.
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        // Se o menor elemento não for o elemento atual, troca-os.
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
};

// f) Função particionamento (partition): função de apoio para o quick_sort.
// Nota: A implementação padrão escolhe o pivô e o posiciona corretamente.
const particionamento = (vetor, inicio, fim) => {
    // Escolhe o último elemento como pivô.
    const pivo = vetor[fim]; 
    let i = inicio - 1; // Índice do menor elemento

    for (let j = inicio; j < fim; j++) {
        // Se o elemento atual for menor que o pivô.
        if (vetor[j] < pivo) {
            i++;
            swap(vetor, i, j); // Troca o elemento atual com o elemento em i.
        }
    }
    // Coloca o pivô na sua posição correta.
    swap(vetor, i + 1, fim);
    return i + 1; // Retorna o índice onde o pivô foi colocado.
};


// e) Função quick_sort: ordena um vetor com o algoritmo Quick Sort (recursivo).
const quick_sort = (vetor, inicio, fim) => {
    // Condição de parada: o subarray tem mais de um elemento.
    if (inicio < fim) {
        // Encontra o índice do pivô (elemento já na posição correta).
        const pivoIndex = particionamento(vetor, inicio, fim);
        
        // Ordena recursivamente os elementos antes e depois do pivô.
        quick_sort(vetor, inicio, pivoIndex - 1);
        quick_sort(vetor, pivoIndex + 1, fim);
    }
};