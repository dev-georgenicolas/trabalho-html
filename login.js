    function logar(){
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;
    
        if(login === "wlawla" && senha === "157"){   
            // Redirect to "cards.html" if login and password match
            window.location.href = "cards.html";
        } else {
            // Show an alert if login is unknown
            alert('Login desconhecido');
        }
    }

