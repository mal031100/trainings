
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

    $("#form").validate({
        rules: {
            username: {
                required: true,
                maxlength: 15
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            username: {
                required: "Bắt buộc nhập username",
                maxlength: "Hãy nhập tối đa 15 ký tự",
                minlength: "Tên quá ngắn"
            },
            password: {
                required: "Bắt buộc nhập password",
                minlength: "Hãy nhập ít nhất 5 ký tự"
            }
        }
    });

    $("#form2").validate({
        rules: {
            newUsername: {
                required: true,
                maxlength: 15,
                minlength: 3
            },
            newEmail: {
                required: true,
                email: true
            },
            newPassword: {
                required: true,
                minlength: 5
            }
            
        },
        messages: {
            newUsername: {
                required: "Không để trống",
                maxlength: "Quá dài rồi"
            },
            newEmail: {
                required: "không để trống"
            },
            newPassword: {
                required: "Không để trống",
                minlength: "Mật khẩu của bạn quá ngắn"
            }
           
        }
    });

    //Register-js
    $('#create-btn').click(function(){
        var newUsername = $('#userregis').val();
        var newEmail = $('#emailregis').val();
        var newPassword = $('#passregis').val();
        if (newUsername == '' || newEmail == ''||  newPassword == '' ) {
            alert("Nhập thông tin đầy đủ");
        } else {
            var newUser = {
                username: newUsername,
                email: newEmail,
                password: newPassword
            }
            objPeople.push(newUser);
            console.log(objPeople);
            alert("success register");
        }
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