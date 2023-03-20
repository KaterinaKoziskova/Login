function login() {
    
    const users = ["koziskova.katerina@cz.159753",
                   "paulinaspiderbear@cz.ahoj",
                   "pepeknamornik@sk.kocka123", 
 ]

    let userEmail, userPassword

    userEmail = document.getElementById("emailIn").value
    userPassword = document.getElementById("passIn").value

    let userLoggin = userEmail + "." + userPassword

    for(let i = 0; i < users.length; i++) {
      if(userLogin == users[i])  { 
        alert("Úspěšné přihlášení!")
        break
      } else {
        error ++
        alert("Špatně zadaný email nebo heslo.")
      }

    }


 }

 function login() {
    
    const users = ["koziskova.katerina@cz.159753",
                   "paulinaspiderbear@cz.ahoj",
                   "pepeknamornik@sk.kocka123", 
 ]

    let userEmail, userPassword

    userEmail = document.getElementById("emailIn").value
    userPassword = document.getElementById("passIn").value

    let userLoggin = userEmail + "." + userPassword

    for(let i = 0; i < users.length; i++) {
      if(userLogin == users[i])  { 
        alert("Úspěšné přihlášení!")
        break
      } else {
        error ++
        alert("Špatně zadaný email nebo heslo.")
      }

    }


 }