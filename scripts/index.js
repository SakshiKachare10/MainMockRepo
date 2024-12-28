let form = document.getElementById("form")

form.addEventListener("submit" , function(){
    event.preventDefault()
    let email = form.email.value;
    let password = form.password.value;
    console.log(email,password)

    if(email=="admin@empher.com" && password=="empher@123"){
      alert("Logged in as Admin.")
      window.location.href="admin.html";
    }else {
        alert("Something went wrong.Try Again Later.")
    }
    // window.location.href="admin.html"
    
    if(email=="user@empher.com" && password=="user@123"){
        alert("Logged in as Admin.")
        window.location.href="books.html";
      }else {
          alert("Something went wrong.Try Again Later.")
      }
})