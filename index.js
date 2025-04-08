const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
  };

const formElm = document.querySelector("form")
const emailElm = document.querySelector("#email")
const passwordElm = document.querySelector("#password")

formElm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (user.email === emailElm.value && user.password === passwordElm.value) {
        formElm.innerHTML = `<p>Přihlášný uživatel: ${user.name}</p>`
    } else {
        document.querySelector("#text").textContent = `Neplatné přihlašovací údaje`
        passwordElm.value = "" 
    }
})