 function validation(){
    if(document.formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter username*";
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter  email*";
        return false;
  }
     else if(document.formfill.password.value==""){
       document.getElementById("result").innerHTML="Enter password";
        return false;
     }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="password must be 6 digits";
        return false;
     }

    
    else if(document.formfill.cpassword.value==""){
        document.getElementById("result").innerHTML="Enter the confirm  password";
        return false;
     }
     else if(document.formfill.cpassword.value !== document.formfill.password.value){
         document.getElementById("result").innerHTML="password does not matched";
        return false;
     }
     else if(document.formfill.password.value !== document.formfill.cpassword.value){
         popup.classlist.add('open-slide')
        return false;
     }
 }
 var popup=document.getElementById('popup');
 function closeslide(){
      popup.classlist.remove("open-slide")
 }
