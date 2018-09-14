document.addEventListener ('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('navigation_menu');
    hamburger.addEventListener('click', function(event){
        if (menu.style.left !== '0px') {
            menu.style.left = '0px';
        }
        else {
            menu.style.left = '-40vw';
        }
    });
    document.body.addEventListener('click', function (event){
        if ( (event.target !== menu) && !(menu.contains(event.target)) &&  (event.target !==  hamburger ) && !(hamburger.contains(event.target)) ) { 
            if (menu.style.left === '0px') {
                menu.style.left = '-40vw';
            }
        }
    });
});