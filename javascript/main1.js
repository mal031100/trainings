// var objPeople = [
// 	{ // Object @ 0 index
// 		account: "nguyen dac hoang lam",
// 		password: "lam"
// 	},
// 	{ // Object @ 1 index
// 		account: "lam",
// 		password: "mal"
// 	},
// 	{ // Object @ 2 index
// 		account: "ndhl",
// 		password: "lam"
// 	}

// ]

// function getInfo() {
// 	var account = document.getElementById('acc').value
// 	var password = document.getElementById('pass').value

// 	for(var i = 0; i < objPeople.length; i++) {
// 		// check is user input matches account and password of a current index of the objPeople array
// 		if(account == objPeople[i].account && password == objPeople[i].password) {
// 			alert(  "WELCOME"+ " " + account )
// 			// stop the function if this is found to be true
// 			return
// 		} else if(account == '' && password == ''){
// 			alert('please enter account password')
			
// 			return
// 		}
// 	}
// 	alert("incorrect username or password")
// }

var id, password, inforname = new Array();
var account =  new Array();
id = ['lam','ndhl'];
password = ['aaa','aaa'];
inforname = ["hoang lam", "nguyen dac hoang lam"];

var i = 0;
var success = -1;
 
function getInfo(){
    for (i = 0; i< id.length; i++){
    if ((document.getElementById("acc").value == id[i]) && (document.getElementById("pass").value == password[i])) {
        document.getElementById("main").style.display = 'none';
        document.getElementById("information").style.display = 'block';
        document.getElementById("logout").style.display= 'block';
        // console.log(loginaccount);
        // console.log(information);
        alert("login"+ " - " + inforname[i]);
        success=i;
        prname = inforname[i];
        document.getElementById("inforname").innerHTML="welcome"+ " - " + prname;
        return
        } else if((document.getElementById("acc").value == '') || (document.getElementById("pass").value == '')) {
            alert('không được để chống')
            return
        } else {
            alert('tài khoản hoặc mật khẩu không chính xác')
            return
        }
    }
}
function logout() {
    document.getElementById("main").style.display = 'block';
    document.getElementById("inforname").style.display = 'none';
    document.getElementById("logout").style.display = 'none';
	document.getElementById("information").style.display = 'none';
    document.getElementById("ndhl").reset();
}