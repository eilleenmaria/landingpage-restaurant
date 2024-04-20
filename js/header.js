let mainLocation =window.pageYOffSet || window.scrollY;

    window.addEventListener('scroll', function(){
        let currentLocation = window.pageYOffSet || this.window.scrollY;
        if(mainLocation >= currentLocation){
            document.getElementById('nav').style.setProperty("top", "0px"); 
            console.log("hola") ;              
        }else{
            document.getElementById('nav').style.setProperty("top", "-250px");  
            console.log("no");              
        }
            mainLocation = currentLocation;        
        })