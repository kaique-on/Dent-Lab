// função para fazer o login com base no email e senha
async function loginUser(email, password){
    // tentativa de login
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        const user = userCredential.user
        return "sucesso";
    } catch(error){
        console.error(error);
    }
}

document.getElementById("btnLogin").addEventListener("click", async(event)=>{
    event.preventDefault();

    // pega o email e senha do formulario com base no id
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // cria uma variavel para armazenar a resposta da função loginUser()
    const result = await loginUser(email, password);

    // verifica se o retorno da função é == a sucesso
    if (result == "sucesso"){
        // envio o usuário para a tela após logar
        window.location.href = "home.html";
    } else {
        alert("Erro ao fazer o login");
    }
})