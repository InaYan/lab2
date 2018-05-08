const lab06 = document.getElementsByClassName('flex-container justify')[0];

for(const i in countries){
    lab06.innerHTML = lab06.innerHTML + '<div class="item"><h2>' + countries[i].name + '</h2><h3>'
        + countries[i].continent + '</h3><div class="inner-box"><h2 class="title1"></h2><ul></ul></div>' +
        '<div class="inner-box"><h2 class="title2"></h2><div class="photoBar"></div></div><button></button></div>';

    document.getElementsByClassName('title1')[i].innerText = "Cities";
    document.getElementsByClassName('title2')[i].innerText = "Popular Photos";
    document.getElementsByTagName('button')[i].innerText = "Visit";

    for(const j in countries[i].cities){
        document.getElementsByTagName('ul')[i].innerHTML += '<li>' + countries[i].cities[j] + '</li>';
    }

    for(const k in countries[i].photos){
        document.getElementsByClassName('photoBar')[i].innerHTML += '<img class="photo" src="images/'
            + countries[i].photos[k] + '">';
    }
}