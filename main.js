console.log(localStorage.getItem("user"));
let user = JSON.parse(localStorage.getItem("user"))
console.log(user)
document.body.innerHTML = `
<h1>Welcome to the user page</h1>
<br>
<div class="card" " class="container-sm" id="div_users_page">

  <img src="${user.picture}" class="card-img-top" id="user_img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
    <p> <small class="text-muted"> phone: ${user.phone}</small></p> 
    <p> <small class="text-muted"> email: ${user.email}</small></p> 
    <p> <small class="text-muted"> age: ${user.age}</small> </p> 
    <a href="http://127.0.0.1:5503/index.html"  class="btn btn-primary">go back to users</a>
  </div>
</div>`

