function authenticate(req) {
    $.post('/home/login',req,function(){
    console.log("logedin")
})    
}

function addcustomer(req,done){
    $.post('/home/signup',req,function(data){
        done(data)
    })
}



$(function () {
    let email = $('#email')
    let password = $('#passport')
    let loginbtn = $('#loginbtn')
    let signup = $('#signup')
    let signupf = $('#signupf')
    let loginf = $('#loginf')
    let createacc = $('#createacc')
    let Email = $('#Email')
    let newpassword = $('#newpassword')
    let firstname = $('#firstname')
    let lastname = $('#lastname')
    let state = $('#state')
    let country = $('#country')

    signup.click(function(){
        loginf.hide()
        signupf.show()
    })
    let signupform = {
        email:Email.val(),
        password:newpassword.val,
        firstname: firstname.val,
        lastname: lastname.val(),
        state:state.val(),
        country:country.val()
    }

    createacc.click(addcustomer(signupform,function(addedcustomer){
        window.alert("Hello"+ addedcustomer.firstname + "\n Welcom to our platform")
    }))
    
    loginbtn.click(authenticate({ email: email, password: password }))

})