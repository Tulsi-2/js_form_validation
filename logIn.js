function login(){
    // window.location.assign("dashboard.html")
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value
    let parseEmail = JSON.parse(localStorage.getItem('arr'))
    console.log(parseEmail)
    parseEmail.map((item)=>{
        console.log(item.email)
        console.log(item.password)
        if(email== item.email && pass == item.password){
            window.location.assign("dashboard.html")
        }
        else{
            alert("wrong credentials")
        }

    })
}