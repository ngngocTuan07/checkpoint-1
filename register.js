function authentication() {
    message = document.getElementById('login_message')
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    dob = document.getElementById('dob').value
    if (username == 'admin' && password == '123456') {
        window.location.href = 'show.html'
    }
    else { document.getElementById('login_message').innerHTML = 'login fail!' }
}

{
    user = {
        username: admin,
        password: 123456
    }
}
Dong_lanh = JSON.stringify(user)
localStorage.setItem('detail', Dong_lanh)
detial = localStorage.getItem(Dong_lanh)
if (detial != null) {
    window.location.href = 'show.html'
}
console.log(username = document.getElementById('username').value)
console.log(password = document.getElementById('password').value)
