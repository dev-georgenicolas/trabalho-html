    function logar(){
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;
    
        if(login === "wlawla" && senha === "157"){   
            
            window.location.href = "cards.html";
        } else {
            
            alert('Login desconhecido');
        }
    }

