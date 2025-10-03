// Quando a página terminar de carregar, só então vamos rodar esse código.
// Isso garante que os botões, caixas de texto e a lista já existem na tela.
document.addEventListener('DOMContentLoaded', () => {

    // Aqui eu estou "pegando" a caixinha onde você digita a tarefa.
    // Pense nisso como dar um apelido para poder usar mais fácil depois.
    const taskInput = document.getElementById('task-input');

    // Aqui eu estou "pegando" o botão de adicionar.
    const addTaskBtn = document.getElementById('add-task-btn');

    // Aqui eu estou "pegando" a lista onde as tarefas vão aparecer.
    const taskList = document.getElementById('task-list');


    // Quando a pessoa clicar no botão "Adicionar", execute a função addTask (que vamos criar logo abaixo).
    addTaskBtn.addEventListener('click', addTask);

    // Quando a pessoa estiver digitando na caixinha...
    taskInput.addEventListener('keypress', function(event) {
        // ... se ela apertar a tecla "Enter" (em vez de clicar no botão)...
        if (event.key === 'Enter') {
            // ... execute a função addTask também.
            addTask();
        }
    });


    // Agora a parte importante: a função que realmente coloca a tarefa na lista.
    function addTask() {
        // Pega o texto digitado na caixinha e tira espaços extras do começo e do fim.
        const taskText = taskInput.value.trim();

        // Se o texto for vazio (ou seja, não digitou nada)...
        if(taskText === ''){
            // Mostra um aviso na tela.
            alert('Por favor digite uma tarefa antes de adicionar.');
            // E para tudo aqui, não faz mais nada.
            return;
        }

        else {
            // Se a pessoa digitou algo, vamos criar um item da lista (<li>).
            const li = document.createElement('li');

            // Coloca dentro desse item o texto que a pessoa digitou.
            li.textContent = taskText;

            // Junta esse item (li) dentro da lista (ul) que está na página.
            taskList.appendChild(li);

            // Limpa a caixinha de texto para poder escrever outra coisa depois.
            taskInput.value = '';

            // Coloca o cursor de volta na caixinha automaticamente, 
            // assim a pessoa não precisa clicar nela de novo pra digitar.
            taskInput.focus();
        }
    }
});
