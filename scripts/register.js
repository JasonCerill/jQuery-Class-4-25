//create a user constructor and display on console.
class User {
    constructor(fname, lname, email, password, gender){
        this.firstname=fname;
        this.lname=lname;
        this.email=email;
        this.password=password;
        this.gender=gender;
    }
}

function register(){
    let inputfName = $("#txtFirstName").val();
    let inputlName = $("#txtLastName").val();
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtEmail").val();
    let inputGender=$("#txtGender").val();
    let input

    
    let newUser = new User(inputfName,inputlName, inputEmail, inputPassword, inputGender);
    console.log(newUser);
}

 function init(){
     console.log("init function");
 


    let user1= new User("Jason", "Cerilli", "jasoncer@gmail.com", "123456");
    let user2= new User("Michael", "Scott", "mikescott@dundermifflin.com", "67890");

console.log(user1,user2);
 
}

window.onload=init;