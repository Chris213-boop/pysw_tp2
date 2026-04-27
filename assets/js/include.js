let ruta = "";

/* Si estoy dentro de /pages */
if (window.location.pathname.includes("/pages/")) {
    ruta = "../";
}

/* HEADER */
fetch(ruta + "components/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

/* FOOTER */
fetch(ruta + "components/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});