document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('.ini__input[type="text"]').value.trim();
    const password = document.querySelector('.ini__input[type="password"]').value.trim();
    if (email === "giant" && password === "123") {
        window.location.href = "home.html";
    } else {
        alert("Email atau password salah broooo!!");
    }
});
  