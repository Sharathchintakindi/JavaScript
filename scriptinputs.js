// function myPrint()
// {
//     var x = document.getElementById("Uname").value;
//     var y = document.getElementById("Upass").value;
//     if (y=="$Harath@007")
//     {
//         alert("Correc Password");
//     }
//     else{
//         alert("wrong password");
//     }

//     alert("Login successfully");

// }

function gender(){

    var x= document.getElementById("Male");
    var y= document.getElementById("Female");
    var z= document.getElementById("NA");

    if (x.checked==true)
    {
        alert("Selected the option " + x.value);
    }
    else if (y.checked==true)
    { 
        alert("Selected the option " + y.value);
    }
    else if(z.checked==true)
    {
        alert("Selected the option " + z.value);
        
    }

    else {
        alert("Invalid input");
    }
    
}