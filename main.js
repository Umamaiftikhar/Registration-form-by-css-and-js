

  function takevalue() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var pswd = document.getElementById("pswd").value;
  var cpswd = document.getElementById("cpswd").value;

  document.write("First Name:" + fname + "<br>");
  document.write("Last Name:" + lname + "<br>");
  document.write("Email :" + email + "<br>");
  document.write("Password:" + pswd + "<br>");
  document.write("Password:" + cpswd + "<br>");
}