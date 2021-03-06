
    
const FIRST_NAME = document.getElementById('input1');
const LAST_NAME = document.getElementById('input2');
const AGE = document.getElementById('input3');
const PHONE = document.getElementById('input4');
const EMAIL = document.getElementById('input5');
const EMAIL2 = document.getElementById('input6');
const BTN_1 = document.getElementById('btn1');
const BTN_2 = document.getElementById('btn2');
const BTN_3 = document.getElementById('btn3');


function EmailConfirmation() {
    if(EMAIL.value === EMAIL2.value ){
        return true;
    }
    return false + alert(`Your emails are not the same`);
}

EMAIL2.addEventListener(`change` , EmailConfirmation);


class User_information{
    constructor(_firs_name , _last_name , _age, _phone , _email , _picture , _id_for_new_user){
        this.firsName = _firs_name;
        this.lastName = _last_name;
        this.age = _age;
        this.phone = _phone;
        this.email = _email;
        this.picture = _picture;
        this._id = _id_for_new_user;

    }
};


const SERVER_API = `https://next.json-generator.com/api/json/get/NJ-UoW2Xq`;
let container = document.getElementById(`container`);
let tabla_container = document.getElementById(`tabla_container`);
let Big_table = document.getElementById(`Big_table`);
let newUser = document.getElementById(`newUser`);
let lod_img = document.getElementById(`lod_img`);
let form = document.getElementById(`form`);

function Serving_information() {
    return fetch(`${SERVER_API}`, {})
    .then((res)=>{return res.json()})
    
};

let count = 0;
let id_for_href = 100;
container.innerHTML = "";
let result_array = [];

async function results_list() {
    try {

        lod_img.src = `https://icons8.com/preloaders/preloaders/805/Glowing%20ring.gif`;
        result_array = await Serving_information();

        function CreateNewUser() {
        let addUser = new User_information(FIRST_NAME.value,LAST_NAME.value, AGE.value, PHONE.value, EMAIL.value, src='https://picsum.photos/200/300' , count);
            if(addUser.firsName.length > 0 && addUser.lastName.length > 0 &&addUser.age.length > 0 &&addUser.email.length > 0 &&addUser.phone.length > 0){

                container.innerHTML += ` 
                <div id="div_new_user">
                <h6> First Name: ${addUser.firsName} </h6>
                <h6> Last Name:${addUser.lastName} </h6>
                <a href="http://127.0.0.1:5503/users.html" id="${addUser._id}" onclick="userNewPage(event)" >
                <img src="${addUser.picture}" alt="img" class="photo" id="${addUser._id}" />
                </a>
                <p> <small class="text-muted"> age: ${addUser.age} </small></p> 
                <p> <small class="text-muted"> phone Number: ${addUser.phone} </small></p> 
                <p> <small class="text-muted"> email: ${addUser.email} </small></p>
                </div>
                ` 
                console.log(result_array);
                
            }
            else{
                alert(`Missing details`);
            }
            function ClearInput() {
                form.innerHTML += `<input type="button" onclick="ClearInput()" id="Reset_form" value="Reset form">`
            }
            ClearInput();
        }
        BTN_2.addEventListener(`click` ,CreateNewUser );

        result_array.forEach(searchResult => {
            addUser = searchResult;
            console.log(addUser); 
            container.innerHTML += `<div class='item_class'>
            <h6> First Name: ${addUser.name.first} </h6>
            <h6> Last Name:${addUser.name.last} </h6>
            <a href="http://127.0.0.1:5503/users.html" id="${id_for_href++}" onclick="userNewPage(event)" >
            <img src="${addUser.picture}" alt="img" class="photo" id="${addUser._id}" />
            </a>
            <p> <small class="text-muted"> phone: ${addUser.phone}</small></p> 
            <p> <small class="text-muted"> email: ${addUser.email}</small></p> 
            <p> <small class="text-muted"> age: ${addUser.age}</small> </p> 
            </div>
            ` 
        function tabla() {
        BTN_1.style.display = `none`
        BTN_2.style.display = `none`
        BTN_3.style.display = `none`  
        form.innerHTML = ""    
        tabla_container.style.display = `inline`
        container.style.display = `none`
        newUser.style.display = `none`
        Big_table.innerHTML +=`<tr class="tr">
      
        <td>
        ${searchResult.name.first}
        </td>
        <td>
        ${searchResult.name.last}
        </td>
        <td>
        ${searchResult.phone}
        </td>
        <td>
        ${searchResult.email}
        </td>
        <td>
        ${searchResult.age}
        </td>
        <td>
        <a href="http://127.0.0.1:5503/users.html"  onclick="userNewPage(event)" >
        <img src="${searchResult.picture}" alt="img" class="tabla_img" id="${addUser._id}" width="60px" height="60px" />
        </a>
        </td>
        </tr>
       
    `
        console.log(searchResult);

    }
    BTN_3.addEventListener(`click` , tabla);

    })

    }
    catch (reject) {
        console.log(reject);
    }
    finally{
        lod_img.style.display =`none`;
    }
}
results_list();


function userNewPage(event){
    let userId = event.target.id; 
    let userPage = result_array.find(user => {
        return user._id == userId;
    });
    localStorage.setItem("user", JSON.stringify(userPage));
    console.log(localStorage.getItem("user"));
};




