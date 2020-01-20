const btnLoginStudent = document.getElementById("studentLogin");
const btnRegisterStudent = document.getElementById("studentRegister");
const btnLoginEntreprise = document.getElementById("entrepriseLogin");
const btnRegisterEntreprise = document.getElementById("entrepriseRegister");
var students = JSON.parse(localStorage.getItem("studentsList")) || [];
var entreprises = JSON.parse(localStorage.getItem("entreprisesList")) || [];

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email.match(mailformat)) {
        return true;
    }
    return false
}
function passwordValidation(pass) {
   var passformat = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/;
    
    if (pass.match(passformat)) {
        return true;
    }
   return false
}

btnRegisterStudent.onclick = function(){
    let userName = document.getElementById("studentUsernameRegister").value;
    let email = document.getElementById("studentEmailRegister").value;
    let pass = document.getElementById("studentPasswordRegister").value;
    let userStudent = students.find(x => x.userName === userName);

    if (!userStudent) {

        if (userName && passwordValidation(pass) && ValidateEmail(email)) {

            students.push({ userName, email, pass });
            localStorage.setItem("studentsList", JSON.stringify(students));
        }
    }
    else alert("this user name is taken");
}

btnLoginStudent.onclick = function(){
    let loginUsername = document.getElementById("studentUsername").value;
    let loginPassword = document.getElementById("studentPassword").value;
    let verifLoginUsername = students.find(x=> x.userName === loginUsername);
    let verifLoginPassword = students.find(x=> x.pass === loginPassword);
    if (verifLoginUsername && verifLoginPassword) {
        localStorage.setItem("studentConnect", JSON.stringify({ userName: loginUsername }));
        window.location.href = 'Student.html';
    } else alert("User Name or Password wrong");
}

btnRegisterEntreprise.onclick = function(){
    let userName = document.getElementById("entrepriseUsernameRegister").value;
    let email = document.getElementById("entrepriseEmailRegister").value;
    let pass = document.getElementById("entreprisePasswordRegister").value;
    let userEntreprise = entreprises.find(x=> x.userName === userName);

    if(!userEntreprise) {
        if(userName && passwordValidation(pass) && ValidateEmail(email)){
            entreprises.push({userName, email, pass});
            localStorage.setItem("entreprisesList",JSON.stringify(entreprises));
        }
    } else alert("this user name is taken");
}

btnLoginEntreprise.onclick = function(){
    let loginUsername = document.getElementById("entrepriseUsername").value;
    let loginPassword = document.getElementById("entreprisePassword").value;
    let verifLoginUsername = entreprises.find(x=> x.userName === loginUsername);
    let verifLoginPassword = entreprises.find(x => x.pass === loginPassword);
    if(verifLoginUsername && verifLoginPassword){
        localStorage.setItem("entrepriseConnect",JSON.stringify({userConnect: loginUsername}));
        window.location.href = './pages/entreprise.html';
    } else alert("this user name is taken");
}