    let fname=document.getElementById("fname").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let addr=document.getElementById("addr").value;
    let male=document.getElementById("male").value;
    let female=document.getElementById("female").value;
    let dob=document.getElementById("dob").value;
    let pass=document.getElementById("pass").value;
    let conpass=document.getElementById("conpass").value;
function checkValidity(){
    if(fname.trim()==""){
       return false;
    }
}