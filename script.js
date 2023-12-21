let mname = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let myform = document.getElementById('myform');
let users = document.getElementById('users'); // assuming you have an element with the id 'users'

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const UserDetails = {
        name: mname.value,
        email: email.value,
        phoneNo: password.value,
    };
      
    axios.post('https://crudcrud.com/api/9e0587a925de4285a6e7b2059b846451/appointmentData', UserDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    const userDetailsString = JSON.stringify(UserDetails);
    localStorage.setItem(UserDetails.email, userDetailsString); // Use email as the key

    var button = document.createElement("button");
    button.textContent = "Delete";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.cursor = 'pointer';

    var edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.style.backgroundColor = "red";
    edit.style.color = "white";
    edit.style.cursor = 'pointer';

    const li = document.createElement("li");
    li.appendChild(
        document.createTextNode(
            `Name: ${UserDetails.name}, Email: ${UserDetails.email}, Phone NO: ${UserDetails.phoneNo}`
        )
    );
    li.appendChild(button);
    li.appendChild(edit);
    users.appendChild(li);

    button.addEventListener("click", function () {
        const emailtoRemove = UserDetails.email;
        localStorage.removeItem(emailtoRemove);
        button.parentNode.remove();
    });

    edit.addEventListener("click", function () {
        const emailToRemove = UserDetails.email;
        const nameToEdit = UserDetails.name;
        const phoneNUmberToEdit = UserDetails.phoneNo;
        localStorage.removeItem(emailToRemove);
        email.value = emailToRemove;
        password.value = phoneNUmberToEdit;
        mname.value = nameToEdit;

        edit.parentNode.remove();
    });

    // Clear the form fields
    mname.value = '';
    email.value = '';
    password.value = '';
}

// Add this function to retrieve data from local storage and update the UI
/*
function loadUserDataFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const storedEmail = localStorage.key(i);
        const storedUserDetailsString = localStorage.getItem(storedEmail);
        const storedUserDetails = JSON.parse(storedUserDetailsString);

        var button = document.createElement("button");
        button.textContent = "Delete";
        button.style.backgroundColor = "red";
        button.style.color = "white";
        button.style.cursor = 'pointer';

        var edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.style.backgroundColor = "red";
        edit.style.color = "white";
        edit.style.cursor = 'pointer';

        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(
                `Name: ${storedUserDetails.name}, Email: ${storedUserDetails.email}, Phone NO: ${storedUserDetails.phoneNo}`
            )
        );
        li.appendChild(button);
        li.appendChild(edit);
        users.appendChild(li);

        button.addEventListener("click", function () {
            localStorage.removeItem(storedUserDetails.email);
            button.parentNode.remove();
        });

        edit.addEventListener("click", function () {
            localStorage.removeItem(storedUserDetails.email);
            email.value = storedUserDetails.email;
            password.value = storedUserDetails.phoneNo;
            mname.value = storedUserDetails.name;

            edit.parentNode.remove();
        });
    }
}

// Call the function when the page loads
window.addEventListener('load', loadUserDataFromLocalStorage);
*/