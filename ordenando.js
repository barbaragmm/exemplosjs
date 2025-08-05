const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

const shuffle = (vetor, quantidadeTrocas) => {
    const tamanho = vetor.length;
    for (let i = 0; i < quantidadeTrocas; i++) {
        const pos1 = Math.floor(Math.random() * tamanho);
        const pos2 = Math.floor(Math.random() * tamanho);
        if (pos1 !== pos2) {
            swap(vetor, pos1, pos2);
        }
    }
};

const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
};

const particionamento = (vetor, inicio, fim) => {
    const pivo = vetor[fim]; 
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivo) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pivoIndex = particionamento(vetor, inicio, fim);
        
        quick_sort(vetor, inicio, pivoIndex - 1);
        quick_sort(vetor, pivoIndex + 1, fim);
    }
};
