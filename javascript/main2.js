
var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "12345678"
	}
]

$(document).ready(function(){
    // Login- js
	$('#login-btn').click(function(){
        var username = $('#user').val();
        var password = $('#pass').val();
        var success = -1;
        for (i = 0; i< objPeople.length; i++){
            if(username == objPeople[i].username && password == objPeople[i].password) {
                $('#main').css('display','none');
                $('#infor').css('display','block');
                $('#logout').css('display','block');
                alert("Welcome " + username);
                success=[i];
                prname = username;
                $('#inforname').html('Welcome ' + prname);
            }
        } 
    });

    //Register-js
    $('#create-btn').click(function(){
        var newUsername = $('#userregis').val();
        var newEmail = $('#emailregis').val();
        var newPassword = $('#passregis').val();
        var newUser = {
            username: newUsername,
            password: newPassword,
            newEmail: newEmail
        }
        objPeople.push(newUser);
        console.log(objPeople);
        alert("success register");
    });
    // $("#main-login").validate({
    //     rules: {
    //     	"username": {
    //     		required: true,
    //     		maxlength: 15
    //     	},
    //     	"password": {
    //     		required: true,
    //     		minlength: 8
    //     	}
    //     },
    //     messages: {
    //         "username": {
    //     		required: "Bắt buộc nhập username",
    //     		maxlength: "Hãy nhập tối đa 15 ký tự"
    //     	},
    //     	"password": {
    //     		required: "Bắt buộc nhập password",
    //     		minlength: "Hãy nhập ít nhất 8 ký tự"
    //     	}
    //     }
    // });
    $('#logout').click(function(){
        $('#main').css('display','block');
        $('#infor').css('display','none');
        $('#logout').css('display','none');
        $('#inforname').css('display','none');
        // $('#formlogin').trigger(reset);
    });
});