var datos;
var urlApp = "https://si0sgs.github.io/EstateAgency/datos/propiedades.json";

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
    datos.propiedades.forEach(estate => {
        html += "<div class='col-md-4'>";
        html += "<div class='card-box-a card-shadow'>";
        html += "<div class='img-box-a'>";
        html += "<img src='" + estate.imagen + "' alt='' class='img-a img-fluid' />";
        html += "</div>";
        html += "<div class='card-overlay'>";
        html += "<div class='card-overlay-a-content'>";
        html += "<div class='card-header-a'>";
        html += "<h2 class='card-title-a'>";
        html += "<a href='#'>" + estate.clasificacion + "</a>";
        html += "</h2>";
        html += "<p class='link-a'>" + estate.descripcion + "</p>";
        html += "</div>";
        html += "<div class='card-body-a'>";
        html += "<div class='price-box d-flex'>";
        html += "<span class='price-a'>" + estate.tipo + " | $ " + estate.precio + "</span>";
        html += "</div>";
        html += "</div>";
        html += "<div class='card-footer-a'>";
        html += "<ul class='card-info d-flex justify-content-around'>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Area</h4>";
        html += "<span>" + estate.detalle.area + "m";
        html += "<sup>2</sup>";
        html += "</span>";
        html += "</li>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Rooms</h4>";
        html += "<span>" + estate.detalle.rooms + "</span>";
        html += "</li>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Floors</h4>";
        html += "<span>" + estate.detalle.floors + "</span>";
        html += "</li>";
        html += "<li>";
        html += "<h4 class='card-info-title'>Garages</h4>";
        html += "<span>" + estate.detalle.garages + "</span>";
        html += "</li></ul></div></div></div></div></div>";
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
    console.log(html);
}