var datos;
var urlApp = "https://lsolera02.github.io/recursos-proyecto/carros.json";

function callService () {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess (data) {
    datos = data;
    procesarDatos();
}

function onError (jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL " + urlApp);
}

function procesarDatos() {
    let menuContainer = document.getElementById("menu-container-id");
    let html = "";
    datos.carros.forEach(carro => {
        html += "<div class='col-md-4'>";
        html += "<div class='card-box-a card-shadow'>";
        html += "<div class='img-box-a'>";
        html += "<img src='" + carro.imagen + "' alt='carro' height='250px' width='100%' />";
        html += "</div>";
        html += "<div class='card-overlay'>";
        html += "<div class='card-overlay-a-content'>";
        html += "<div class='card-header-a'>";
        html += "<h2 class='card-title-a'>";
        html += carro.modelo;
        html += "</h2>";
        html += "</div>";
        html += "<div class='card-body-a'>";
        html += "<div class='price-box d-flex'>";
        html += "<span class='price-a'>" + carro.clasificacion + " | " + carro.marca + "</span>";
        html += "</div>";
        html += "</div>";
        html += "<div class='card-footer-a'>";
        html += "<ul class='card-info d-flex justify-content-around'>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Puertas</h4>";
        html += "<span>" + carro.detalle.puertas;
        html += "</span>";
        html += "</li>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Cambios</h4>";
        html += "<span>" + carro.detalle.cambios;
        html += "</span>";
        html += "</li>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Pasajeros</h4>";
        html += "<span>" + carro.detalle.pasajeros + "</span>";
        html += "</li></ul></div></div></div></div></div>";
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
    console.log(html);
}