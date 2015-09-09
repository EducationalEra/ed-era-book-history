var list = document.getElementsByClassName("fluidMedia");
for (var i = 0; i < list.length; i++) {
    // list[i] is a node with the desired class name
    list[i].addEventListener("click", console.log("123123"));
}

/*$(document).ready(function(){
    $( "div.popup" ).replaceWith( "<div class='" + "description" + "'><div class='" + "text" +"'>Ще більше відеоматеріалів в <a class='"+"knopka1"+"' href='" + "https://study.ed-era.com/courses/EdEra/hi102/Hi102/about" + "' target='" + "_blank" + "'>онлайн-курсі</a> від розробників цієї книги</div><div class='" + "btn-knopka" +"'><a class='"+"knopka"+"' href='" + "https://study.ed-era.com/courses/EdEra/hi102/Hi102/about" + "'   target='" + "_blank" + "'>Перейти на курс</a></div>" );
    });*/

