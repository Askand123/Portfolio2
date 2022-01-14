let navbar = document.querySelector('.header .Navbar');

document.querySelector('#menu-btn').onclick = () =>{
				navbar.classList.toggle('active');
}
window.onscroll = () =>{
				navbar.classList.remove('active');
}
var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
        // you can put any JS code here
        alert('Thankyou for your precious time, Have a Good day - Askand')
    });
});s