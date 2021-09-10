
var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "12345678"
	}
]

$(document).ready(function() {
    $('#login-btn').click(function() {
        var username = $('#user').val();
        var password = $('#pass').val();
        var success = -1;
        $("#form").submit(function(event) {
            event.preventDefault();
        });
        for (i = 0; i < objPeople.length; i++) {
            if (username == objPeople[i].username && password == objPeople[i].password) {
                $('#main').css('display', 'none');
                $('#infor').css('display', 'block');
                $('#logout').css('display', 'block');
                $('#error-message').css('display', 'none');
                $('#inforname').html('welcome - ' + username);
                success = [i];
            } else if (username == '' || password == '') {
                
            } else {
                myText = $("#error-message").text("Tài khoản hoặc mật khẩu không đúng");
                $('#error-message').css('display', 'block');
                $('#success-message').css('display', 'none');
                // console.log("tài khoản hoặc mật khẩu không đúng")
            }
        }
});
    $('#create-btn').click(function() {
        var newUsername = $('#userregis').val();
        var newPassword = $('#passregis').val();
        var newEmail = $('#emailregis').val();
        $("#form2").submit(function(event) {
            event.preventDefault();
        });
        for (i = 0; i < objPeople.length; i++) {
            if (newUsername == '' || newPassword == '' || newEmail == '') {
                console.log("Không được để trống");
            // } else if (newUsername == objPeople[i].username) {
            //     myText = $("#error-message").text("Tài khoản đã tồn tại");
            //     $('#error-message').css('display', 'block');
            //     $('#success-message').css('display', 'none');
            //     return;
            
            } else if (newUsername.length < 5 ) {
                myText = $("#error-message").text("Tài khoản quá ngắn!");
                $('#error-message').css('display', 'block');
                $('#success-message').css('display', 'none');
            } else if(newUsername.length > 15 ){
                myText = $("#error-message").text("Tài khoản quá dài!");
                $('#error-message').css('display', 'block');
                $('#success-message').css('display', 'none');
            } else if(newPassword.length < 5){
                myText = $("#error-message").text("mật khẩu phải nhiều hơn 5 kí tự!");
                $('#error-message').css('display', 'block');
                $('#success-message').css('display', 'none');
            } else if (newEmail.indexOf("@") < 0 || newEmail.indexOf(".com") < 0) {
                myText = $("#error-message").text("Email không đúng định dạng!!!");
                $('#error-message').css('display', 'block');
                $('#success-message').css('display', 'none');
            } else {
                var newUser = {
                    username: newUsername,
                    email: newEmail,
                    password: newPassword
                }
                for(i = 0 ; i < objPeople.length; i++){
                    if (newUsername == objPeople[i].username) {
                        myText = $("#error-message").text("Tài khoản đã tồn tại");
                        $('#error-message').css('display', 'block');
                        $('#success-message').css('display', 'none');
                        return;
                    }
                }
                objPeople.push(newUser);
                console.log(objPeople);
                myText = $("#success-message").text("Đăng kí thành công");
                $('#error-message').css('display', 'none');
                $('#success-message').css('display', 'block');
                return;
            }

        }
    });
    $('#logout').click(function() {
        $('#main').css('display', 'block');
        $('#infor').css('display', 'none');
        $('#logout').css('display', 'none');
        $('#inforname').css('display', 'none');
        $('#error-message').css('display', 'none');
        // $('#form-inner').trigger(reset);
    });
    $("#form").validate({
        rules: {
            username: {
                required: true,
                maxlength: 15,
                minlength: 5
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
            username: {
                required: true,
                maxlength: 15,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            username: {
                required: "Không để trống",
                maxlength: "Quá dài rồi"
            },
            email: {
                required: "không để trống",
                email: "Email chưa đúng định dạng"
            },
            password: {
                required: "Không để trống",
                minlength: "Mật khẩu của bạn quá ngắn"
            }
        }
    });
});