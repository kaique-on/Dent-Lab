// função para registro

async function registerUser(email, password, event){ // async determina que a função é assincrona, que serve para lozalicar dados futuros
    
    event.preventDefault(); // evita eventos padrões

    try { // "try" é um if voltado para erros
        // faz o processo de autenticação passando o e-mail e senha
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // insere os dados no bando de dados, acessando e coletando users
        await db.collection("users").doc(user.uid).set( // esperar / acessar o metodo collection / no metodo ele vai na coleção usuarios / vai no documento / e por ultimo, registra
            {
                email: email,
                ui: user.uid
            }
        );

    }   catch (error) { //pega o erro
        console.log(error); // informa o erro
    }
}


// pegar os dados do formulário e inserir na função
document.getElementById("registerButton").addEventListener("click", async(event)=>{ // pega o id registerButton (getElementById) / adiciona um evento click (addEventListener), assincrono (async) e anonimo (=>)
    // pega os dados do form
    const email = document.getElementById("email").value; // cria uma constante email que pega o id "email" e armazena seu valor
    const password = document.getElementById("password").value; // cria uma constante email que pega o id "email" e armazena seu valor
    const confirmPassword = document.getElementById("confirmPassoword").value; // cria uma constante email que pega o id "email" e armazena seu valor

    if(password !== confirmPassword){ // valida se são iguais
        alert("As senhas inseridas não são iguais");
    }
    // insere os dados na função
    registerUser(email, password);
});