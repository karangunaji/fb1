var dt = new Date()
var a = dt.getDate()
document.getElementById("date1").innerHTML = a;

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var b = monthNames[dt.getMonth()]
document.getElementById("date2").innerHTML = b;

var c = dt.getFullYear()
document.getElementById("date3").innerHTML = c;




// validation 


const Firstname = document.getElementById('FName');
const lastname = document.getElementById('Lname');
const Mnumber = document.getElementById('Mnumber');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errormsg = document.querySelectorAll('.error');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
})

const validation = () => {
    
    let FirstnameVal = Firstname.value.trim()
    let lastnameVal = lastname.value.trim();
    let MnumberVal = Mnumber.value.trim();
    let passwordVal = password.value.trim();
   

    // Firstname Name validatio 

    if(FirstnameVal === ""){
        setErrormsg(Firstname , "First Name can not be blank")
    }else if(FirstnameVal.length <= 2){
        setErrormsg(Firstname , "firtname min 3 char")
    }
    else{
        setSuccessmsg(Firstname );
    }


    // last name 

    if(lastnameVal === ""){
        setErrormsg(lastname , "Last Name can not be blank")
    }else if(lastnameVal.length <= 2){
        setErrormsg(lastname , "firtname min 3 char")
    }
    else{
        setSuccessmsg(lastname );
    }


    // mobile number 

    if(MnumberVal === ""){
        setErrormsg(Mnumber , " ** Fill a mobile number")
    }else if (MnumberVal.length != 10){
        setErrormsg(Mnumber , "Enter a 10 digit")
    }
    else{
        setSuccessmsg(Mnumber)
    }
    

    // password 

    if(passwordVal === ""){
        setErrormsg(password , "** FIll a password")
    }else if (passwordVal.length <5 || passwordVal.length>10){
        setErrormsg(password , "** Maintain password")
    }else(
        setSuccessmsg(password)
    )




    function setErrormsg(input , errormsg){
        const Pcontrol = input.parentElement;
        const span = Pcontrol.querySelector("span");
        span.innerText = errormsg ;
        Pcontrol.className = "pcontrol error"

    }
    function setSuccessmsg(input){
        const Pcontrol = input.parentElement;
        Pcontrol.className = " pcontrol success"

    }




}

