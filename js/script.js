$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    autoplay: true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



const links =["index.html","about.html","blogs.html","contact.html","location.html"];

const nav = ["Home","About","blogs","contact","location"];
let navlengh = nav.length;
navtext = "<ul>";
for(let i=0; i<navlengh; i++){
    navtext += '<li><a href=" ' + links[i] +'">'+ nav[i]+ "</a></li>";
}

navtext += "</ul>";


document.getElementById("nav").innerHTML = navtext;
console.log(navtext);

function show(){
    document.getElementById("messagebox").style.display="block";
}
function hide(){
    document.getElementById("messagebox").style.display="none";
}