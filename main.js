console.log(localStorage.getItem("user"));
let user = JSON.parse(localStorage.getItem("user"))
console.log(user)
document.body.innerHTML = `
<h1>Welcome to the user page</h1>
<br>
<div class="card" " id="container" >

  <img src="${user.picture}" class="card-img-top" id="user_img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
    <p class="card-text"> age: ${user.age} </p>
    <p class="card-text"> phone: ${user.phone}</p>
    <p class="card-text"> email: ${user.email} </p>
    <a href="file:///C:/l1/practice%20on%20js/new%20js%20e6/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%20%D7%9C%D7%A4%D7%A1%D7%97/index.html"  class="btn btn-primary">go back to users</a>
  </div>
</div>`
