function Rdata(){
    let Rfname,Rlname,Remail,Rpass,Rcpass
    Rfname = document.getElementById("Rfname").value
    Rlname = document.getElementById("Rlname").value
    Remail = document.getElementById("Remail").value
    Rpass = document.getElementById("Rpass").value
    Rcpass = document.getElementById("Rcpass").value

    console.log("Rfname",Rfname)
    console.log("Rlname",Rlname)
    console.log("Remail",Remail)
    console.log("Rpass",Rpass)
    console.log("Rcpass",Rcpass)
}
  function Rformdisplay() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<b>FIRSTNAME: </b>" + document.Registerform.Rfname.value;
  message += "<br><b>LASTNAME: </b>" + document.Registerform.Rlname.value;
  message += "<br><b>EMAIL: </b>" + document.Registerform.Remail.value;
 message += "<br><b>PASSWORD: </b>" + document.Registerform.Rpass.value;
  message += "<br><b>CONFIRMPASSWORD: </b>" + document.Registerform.Rcpass.value;
  DispWin.document.write(message);
}