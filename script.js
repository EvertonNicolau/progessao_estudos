const roteiroEngenheiro = [
    {
        mes: 1,
        titulo: "Mês 1: Despertar da Lógica",
        trimestre: "1º Trimestre (Alicerce)",
        topicos: ["Matemática: Álgebra Base", "Lógica de Programação Pura", "Binários e Hexadecimais", "Zorin OS: Comandos Essenciais"]
    },
    {
        mes: 2,
        titulo: "Mês 2: Ferramentas do Engenheiro",
        trimestre: "1º Trimestre (Alicerce)",
        topicos: ["Introdução ao C", "Pré-Cálculo: Funções", "Shell Script no Terminal", "Git & GitHub"]
    },
    {
        mes: 3,
        titulo: "Mês 3: Consolidação da Base",
        trimestre: "1º Trimestre (Alicerce)",
        topicos: ["Linguagem C: Ponteiros", "Exercícios de Álgebra", "Cálculo I: Limites", "Projeto Integrador"]
    },
    {
        mes: 4,
        titulo: "Mês 4: Software e Hardware",
        trimestre: "2º Trimestre",
        topicos: ["Física I: Mecânica", "C: Vetores e Arquivos", "Cálculo I: Derivadas", "Estrutura de Dados: Listas"]
    },
    {
        mes: 5,
        titulo: "Mês 5: O Coração do Sistema",
        trimestre: "2º Trimestre",
        topicos: ["Física I: Energia", "Arquitetura de CPUs", "Sistemas Operacionais", "Cálculo II: Integrais"]
    },
    {
        mes: 6,
        titulo: "Mês 6: O Arquiteto",
        trimestre: "2º Trimestre",
        topicos: ["Estrutura de Dados Avançada", "Protocolos de Redes", "Refatoração Countdown", "Inglês Técnico"]
    },
    {
        mes: 7,
        titulo: "Mês 7: Preparando o Voo",
        trimestre: "3º Trimestre",
        topicos: ["Redes: Modelo OSI", "Banco de Dados SQL", "Engenharia de Software", "Clean Code"]
    },
    {
        mes: 8,
        titulo: "Mês 8: Automação e IoT",
        trimestre: "3º Trimestre",
        topicos: ["Sistemas Embarcados", "Automação Shell", "Microeletrônica", "Revisão Univesp"]
    },
    {
        mes: 9,
        titulo: "Mês 9: Lançamento",
        trimestre: "3º Trimestre",
        topicos: ["Finalização do Site", "Previsão Semestre 1", "Auto-avaliação", "🚀 PRONTO!"]
    }
];

function atualizarProgresso() {
    const checkboxes = document.querySelectorAll('.check-materia');
    const total = checkboxes.length;
    const marcados = document.querySelectorAll('.check-materia:checked').length;
    const porcentagem = Math.round((marcados / total) * 100);

    const barra = document.getElementById('barra-progresso');
    barra.style.width = porcentagem + "%";
    barra.innerText = porcentagem + "%";

    // Salva o progresso para não perder ao fechar o navegador
    const checksAtivos = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem('progresso_engenheiro', JSON.stringify(checksAtivos));
}

function gerarGridEstudos() {
    const grid = document.getElementById('grid-meses');
    const salvo = JSON.parse(localStorage.getItem('progresso_engenheiro')) || [];
    let contador = 0;

    roteiroEngenheiro.forEach(item => {
        const card = document.createElement('article');
        card.className = 'mes-card';

        let lista = '<ul class="topicos-lista">';
        
        // ESTE LOOP É O QUE CRIA O QUADRADINHO PARA CADA MATÉRIA
        item.topicos.forEach(topico => {
            const isChecked = salvo[contador] ? 'checked' : '';
            lista += `
                <li>
                    <span>${topico}</span>
                    <input type="checkbox" class="check-materia" ${isChecked} onchange="atualizarProgresso()">
                </li>`;
            contador++;
        });
        
        lista += '</ul>';

        card.innerHTML = `<h2>${item.titulo}</h2><h3>${item.trimestre}</h3>${lista}`;
        grid.appendChild(card);
    });

    atualizarProgresso();
}

window.onload = gerarGridEstudos;