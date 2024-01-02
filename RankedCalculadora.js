// Função que calcula o saldo de Rankeadas e determina o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo as derrotas do total de vitórias
    let saldo = vitorias - derrotas;
    let nivel;

    // Verifica as condições para determinar o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna um objeto contendo o saldo de vitórias e o nível do jogador
    return { saldo, nivel };
}

// Obtém a quantidade de vitórias e derrotas do usuário através de prompt
const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

// Chama a função calcularRank e armazena o resultado nas variáveis saldo e nivel
const { saldo, nivel } = calcularRank(vitorias, derrotas);

// Exibe a mensagem com o saldo e o nível do jogador no console
console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${nivel}`);
