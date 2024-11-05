let form = document.createElement("form")
document.body.appendChild(form)

let input1 = document.createElement("input")
input1.setAttribute("type", "text")
input1.setAttribute("name", "username")
input1.setAttribute("placeholder", "Username")
form.appendChild(input1)


let br = document.createElement("br")
form.appendChild(br)

let input2 = document.createElement("input")
input2.setAttribute("type", "email")
input2.setAttribute("name", "email")
input2.setAttribute("placeholder", "E-mail")
form.appendChild(input2)


let br1 = document.createElement("br")
form.appendChild(br1)


let input3 = document.createElement("input")
input3.setAttribute("type", "password")
input3.setAttribute("name", "password")
input3.setAttribute("placeholder", "password")
form.appendChild(input3)


let br3 = document.createElement("br")
form.appendChild(br3)


let input4 = document.createElement("input")
input4.setAttribute("type", "number")
input4.setAttribute("name", "phone")
input4.setAttribute("placeholder", "Phonenumber")
form.appendChild(input4)


let br5 = document.createElement("br")
form.appendChild(br5)

let button1 = document.createElement("button")
button1.setAttribute("id", "but")
button1.innerText = "Sign in"
form.appendChild(button1)

window.confirm("enter username:- Shashi")
window.confirm("enter email:-  exam@123")
window.confirm("enter password:- 123pwd")
window.confirm("enter phoneno:- 9848929350")

localStorage.setItem("user", "Shashi")
localStorage.setItem("email", "exam@123")
localStorage.setItem("password", "123pwd")
localStorage.setItem("phone-number", "9848929350")
let s11 = localStorage.getItem("user")
let s22 = localStorage.getItem("email")
let s33 = localStorage.getItem("password")
let s44 = localStorage.getItem("phone-number")

console.log(s11)
console.log(s22)
console.log(s33)
console.log(s44)

button1.addEventListener("click", () => {
    let in1 = input1.value
    let in2 = input2.value
    let in3 = input3.value
    let in4 = input4.value

    if (in1 == s11 && in2 == s22 && in3 == s33 && in4 == s44) {
        console.log("sign-in sucessfull")

        let frm = document.getElementsByTagName("form")[0]
        frm.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log("submitted details")
            input1.value = ''
            input2.value = ''
            input3.value = ''
            input4.value = ''
        })
    }
    else {
        console.log("enter correct values")
        let fom = document.getElementsByTagName("form")[0]
        fom.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log(" not submitted details")
            input1.value = ''
            input2.value = ''
            input3.value = ''
            input4.value = ''
        })
    }
})