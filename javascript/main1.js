var objPeople = [
	{ // Object @ 0 index
		account: "nguyen dac hoang lam",
		password: "lam"
	},
	{ // Object @ 1 index
		account: "lam",
		password: "mal"
	},
	{ // Object @ 2 index
		account: "ndhl",
		password: "lam"
	}

]

// function getInfo() {
// 	var account = document.getElementById('acc').value
// 	var password = document.getElementById('pass').value

// 	for(var i = 0; i < objPeople.length; i++) {
// 		// check is user input matches account and password of a current index of the objPeople array
// 		if(account == objPeople[i].account && password == objPeople[i].password) {
// 			alert(  "WELCOME"+ " " + account )
// 			// stop the function if this is found to be true
// 			return
// 		}
// 	}
// 	alert("incorrect username or password")
// }

function getInfo() {
	var account = document.getElementById('acc').value
	var password = document.getElementById('pass').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches account and password of a current index of the objPeople array
		if(account == objPeople[i].account && password == objPeople[i].password) {
			alert(  "WELCOME"+ " " + account )
			// stop the function if this is found to be true
			return
		} else if(account == '' && password == ''){
			alert('please enter account password')
			
			return
		}
	}
	alert("incorrect username or password")
}
