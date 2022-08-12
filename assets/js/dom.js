//DOM = Document Object Model
window.onload = specialsDomIncial;



function specialsDom(){
    let specialDatos = document.getElementById("row-specials-datos");
    let specialImg = document.getElementById("row-specials-img");
    let tab = parseInt(this.name);
    let urlImage = "";
    let htmlDinamico = "";

    switch (tab) {
        case 1:
            urlImage = "assets/img/specials-1.png";
            htmlDinamico += "<h3>Architecto ut aperiam autem id</h3>";
            htmlDinamico += "<p class='fst-italic'>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka</p>";
            htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>";
            break;
        case 2:
            urlImage = "assets/img/specials-2.png";
            htmlDinamico += "<h3>Et blanditiis nemo veritatis excepturi</h3>";
            htmlDinamico += "<p class='fst-italic'>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia etreiciendis sunt sunt est</p>";
            htmlDinamico += "<p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>";
            break;
        
        case 3:
            urlImage ="assets/img/specials-3.png";
            htmlDinamico += "<h3>Impedit facilis occaecati odio neque aperiam sit</h3>";
            htmlDinamico += "<p class='fst-italic'>Eos voluptatibus quo. Odio similique illum id quidem nonenim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaeratperferendis aut</p>";
            htmlDinamico += "<p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>";
        break;
        
        case 4:
            urlImage ="assets/img/specials-4.png";
            htmlDinamico += "<h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>";
            htmlDinamico += "<p class='fst-italic'>Totam aperiam accusamus. Repellat consequuntur iurevoluptas iure porro quis delectus</p>";
            htmlDinamico += "<p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiamquia a laborum inventore</p>";
            break;
        case 5:
            urlImage ="assets/img/specials-5.png";
            htmlDinamico += "<h3>Impedit facilis occaecati odio neque aperiam sit</h3>";
            htmlDinamico += "<p class='fst-italic'>Eos voluptatibus quo. Odio similique illum id quidem nonenim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaeratperferendis aut</p>";
            htmlDinamico += "<p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>";
            break;
    } 
    specialDatos.innerHTML = "";
    specialDatos.innerHTML = htmlDinamico;
    specialImg.src = "";
    specialImg.src = urlImage;
}

function agregarEventos(){
    let listItems = document.getElementsByClassName("specialsPer-listItem");
    for (const item in listItems) {
        if(listItems[item].nodeName === "A"){
            listItems[item].onclick = specialsDom;
        }
    }
}

function specialsDomIncial(){
    callService();
    let specialDatos = document.getElementById("row-specials-datos");
    let specialImg = document.getElementById("row-specials-img");
    let urlImage = "";
    let htmlDinamico = "";
    cargaMemoriaLocal();
    urlImage = "assets/img/specials-1.png";
    htmlDinamico += "<h3>Architecto ut aperiam autem id</h3>";
    htmlDinamico += "<p class='fst-italic'>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka</p>";
    htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>";
    specialDatos.innerHTML = "";
    specialDatos.innerHTML = htmlDinamico;
    specialImg.src = "";
    specialImg.src = urlImage;
    agregarEventos();
}