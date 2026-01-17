const btn = document.querySelector(".btn")
const input = document.querySelector("#task-input")
const errorMessage = document.querySelector(".error-message")

btn.addEventListener("click", () => {
    if (!input.value) {
        errorMessage.innerText = "Task input cannot be empty"
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        window.location.href = "/index.html"
    }
  
})
