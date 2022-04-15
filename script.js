window.onload=function(){

    document.getElementById("submit").addEventListener('click', Walidacja)

}


function Sprawdzpuste(zm){

    if(zm==""){

        return true;
    }
    else{

       
        return false;
      
    }


}
function Sprawdzliczby(zm){

    for (var i=0; i<zm.length; i++){
        for(var j=0; j<10; j++)
        if(parseInt(zm[i])==j){

            return true;
        }
        else{
        }
        
        return false;
        
        

    } return false;

}

function Sprawdzdodatnie(zm){

    if(zm>1){
    
        return false;
    }      
    else{
        return true;
    }
       
}

function Sprawdzmalpa(zm){

    for(var i=0; i<zm.length; i++){
        if(zm[i]=="@"){
            return true;
        }

    }
  
    return false;
      
}


function Walidacja(evt){

    evt.preventDefault();
    var noerror=0;
    var nazwa=document.getElementById("nazwa");
    if (Sprawdzpuste(nazwa.value)){
        nazwa.style.backgroundColor="red";
        
    }
    else{
        noerror=noerror+1;
        nazwa.style.backgroundColor="green";

    }
       
    var imie=document.getElementById("imie");
    if (Sprawdzpuste(imie.value) || Sprawdzliczby(imie.value)){
        imie.style.backgroundColor="red";
       
    }
    else{
        noerror=noerror+1;
        imie.style.backgroundColor="green";

    }

    var nazwisko=document.getElementById("nazwisko");
    if (Sprawdzpuste(nazwisko.value) || Sprawdzliczby(nazwisko.value)){
        nazwisko.style.backgroundColor="red";
        
    }
    else{
        noerror=noerror+1;
        nazwisko.style.backgroundColor="green";

    }
    
    var nick=document.getElementById("nick");
    if (Sprawdzpuste(nick.value)){
        nick.style.backgroundColor="red";
        
    }
    else{
        noerror=noerror+1;
        nick.style.backgroundColor="green";

    }

    var wiek=document.getElementById("wiek");
    if(Sprawdzpuste(wiek.value) || Sprawdzdodatnie(wiek.value)){

        wiek.style.backgroundColor="red";
        
       

    }
    else{
        noerror=noerror+1;
        wiek.style.backgroundColor="green";
    }

    var waga=document.getElementById("waga");
    if(Sprawdzpuste(waga.value) || Sprawdzdodatnie(waga.value)){

        waga.style.backgroundColor="red";
        
       

    }
    else{
        noerror=noerror+1;
        waga.style.backgroundColor="green";
    }

    var wzrost=document.getElementById("wzrost");
    if(Sprawdzpuste(wzrost.value) || Sprawdzdodatnie(wzrost.value)){

        wzrost.style.backgroundColor="red";     

    }
    else{
        noerror=noerror+1;
        wzrost.style.backgroundColor="green";
    }

    var email=document.getElementById("email");
    if(Sprawdzpuste(email.value)){

        email.style.backgroundColor="red";
       

    }
    else{

        email.style.backgroundColor="green";
        
        if(Sprawdzmalpa(email.value)){

            email.style.backgroundColor="green";
            noerror=noerror+1;
        }

        else{

            email.style.backgroundColor="red";
            

        }

    }

  

    if(noerror==8){

        var wzrostbmi=(wzrost.value/100);
        var bmi=(waga.value/(wzrostbmi*wzrostbmi));
        var wynikbmi = bmi.toFixed(2);
        alert (wynikbmi)
    

        if (wynikbmi <18.5){
            var opis="Niedowaga";
        } 

        else if (18.5<= wynikbmi <=24.9){
            var opis="Prawidłowa waga";
        }

        else if (25<= wynikbmi <=29.9){
            var opis="Nadwaga";
        }

        else if (wynikbmi >30){
            var opis="Otyłość";
        } 
        






        document.write("Historia Twojej postaci" + "<br>")
        document.write("Cześć! Jestem "+ nick.value + ", a tak właściwie "+ imie.value +" "+ nazwisko.value+"." + "<br>")
        document.write("Mam "+ wiek.value + " lat." + "<br>")
        document.write("Mój wzrost to "+ wzrost.value + "cm i ważę " + waga.value +"kg." + "<br>")
        document.write("Więc moje BMI wynosi "+ wynikbmi + " i jest to " + opis + " ."+ "<br>")
        document.write("Niedługo odbędzie się premiera nowej rozgrywki " + nazwa.value +" ." + "<br>")
        document.write("Jeśli chcesz omówić ze mną zwycięską taktykę napisz na mój adres: " + email.value  + "<br>")
    
    }
    
    else{
        alert("Błąd. Wypełnij wszystkie pola poprawnie!")
    }
      

   
}


