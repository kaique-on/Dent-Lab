const firebaseConfig = {

    apiKey: "AIzaSyDu1sbmDG1pdgZuaZ1feXCYFJwirDIIfUc",
    authDomain: "dent-lab-1.firebaseapp.com",
    projectId: "dent-lab-1",
    storageBucket: "dent-lab-1.appspot.com",
    messagingSenderId: "212592525712",
    appId: "1:212592525712:web:bb47ed4673c2686df5f315",
    measurementId: "G-DP0NDW7554"

  };
    // inicializa meu site com firebase
    firebase.initializeApp(firebaseConfig);
    //cria o objeto da autenticação para que possa usar seus métodos
    const auth = firebase.auth();
    //cria o objeto do DataBase Firestore para que possa usar seus métodos
    const db = firebase.firestore();