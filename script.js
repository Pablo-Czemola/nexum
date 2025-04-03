// Menu Burger (Responsivo)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});
// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtém os elementos do formulário e da área de resultado
    const form = document.getElementById("study-plan-form");
    const resultContainer = document.getElementById("study-plan-result");

    // Função para gerar o plano de estudos com base nas escolhas
    function gerarPlanoDeEstudos(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Obtém os valores das seleções
        const faculdade = document.getElementById("college").value;
        const cidade = document.getElementById("city").value;
        const curso = document.getElementById("course").value;

        // Geração de um plano de estudos básico com base nas escolhas
        let planoDeEstudos = `
            <h3>Plano de Estudos para o Curso de ${curso}</h3>
            <p><strong>Faculdade:</strong> ${faculdade}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Curso Selecionado:</strong> ${curso}</p>
            <h4>Plano de Estudos Sugerido:</h4>
        `;

        // Conteúdo de estudos baseado no curso escolhido (exemplo simples)
        let conteudoEstudos = '';
        switch (curso) {
            case 'curso1':
                conteudoEstudos = 'Estudo intensivo de Matemática, Física e Química.';
                break;
            case 'curso2':
                conteudoEstudos = 'Estudo focado em Linguagens de Programação, Algoritmos e Estruturas de Dados.';
                break;
            case 'curso3':
                conteudoEstudos = 'Estudo de Gestão, Marketing e Empreendedorismo.';
                break;
            default:
                conteudoEstudos = 'Conteúdo não disponível.';
        }

        // Adiciona o conteúdo de estudos ao plano
        planoDeEstudos += `
            <p>${conteudoEstudos}</p>
            <h4>Horário Sugerido de Estudo:</h4>
            <ul>
                <li>08:00 - 10:00: Estudo de Teoria</li>
                <li>10:30 - 12:00: Prática e Exercícios</li>
                <li>14:00 - 16:00: Revisão e Preparação para Provas</li>
                <li>16:30 - 18:00: Acompanhamento de Tutorias ou Estudos em Grupo</li>
            </ul>
        `;

        // Exibe o plano de estudos na página
        resultContainer.innerHTML = planoDeEstudos;
    }

    // Adiciona o ouvinte de evento para quando o formulário for enviado
    form.addEventListener("submit", gerarPlanoDeEstudos);
});
