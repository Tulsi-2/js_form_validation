const btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    const username = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const pass = document.querySelector('#pass').value

if(username ==''||email==''||pass=='' ){

    alert('Please fill all the required details')
}
else{
    let data = {
        user_name: username,
        email: email,
        password:pass,
    }
    console.log(data)
    let arr=[]
    arr.push(data)
    console.log(arr)
    let m = localStorage.getItem("arr");
    if (m == null) {
      const jsonData = JSON.stringify(arr);
      localStorage.setItem("arr", jsonData);
    } else {
      let oldData = JSON.parse(localStorage.getItem("arr"));
      oldData.push(data);
      localStorage.setItem("arr", JSON.stringify(oldData));
      alert(`Hello ${username}, You registered successfully`)
      window.location.assign("login.html")
      
    }
    
    
}
})
let parseArr = JSON.parse(localStorage.getItem("arr"))
console.log(parseArr)

// const submit = ()=>{
//   window.location.assign("login.html")
// }