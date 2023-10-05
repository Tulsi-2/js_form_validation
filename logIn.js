function login(){
    
    const loginemail = document.querySelector('#email').value
    const pass = document.querySelector('#pass').value
    let parseEmail = JSON.parse(localStorage.getItem('arr'))
    console.log(parseEmail)
    if(email == '' || pass == ''){
        alert("Enter a required detail")
    }
    else{
    parseEmail.map((item)=>{
        if(loginemail== item.email && pass == item.password){
            window.location.assign("dashboard.html")
            let data = {
                email: loginemail 
            }
            let ary=[]
            ary.push(data)
            console.log(data)
            let m = localStorage.getItem("ary")
            if (m == null) {
                const jsonData = JSON.stringify(ary);
                localStorage.setItem("ary", jsonData);
              } else {
                let oldData = JSON.parse(localStorage.getItem("ary"));
                oldData.push(data);
                localStorage.setItem("ary", JSON.stringify(oldData));
                
                
              }

        }
        

    })}
}