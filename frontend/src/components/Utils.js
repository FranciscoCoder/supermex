export function changeStyleBody (styleValue, styleValue2) {
    let bodyWeb= document.body;
    bodyWeb.classList.add(styleValue);

    window.addEventListener('scroll',()=>{
        //Get window scroll Y and Footer position
        let windowScroll=window.pageYOffset;
        let footerPositionY=bodyWeb.querySelector('footer').offsetTop-200;
        if((windowScroll)>=footerPositionY){
            bodyWeb.classList.remove(styleValue);
            bodyWeb.classList.add(styleValue2);
        }
        else{
            bodyWeb.classList.remove(styleValue2);
            bodyWeb.classList.add(styleValue);
        }
    });
}

export function backgroundColorBody(styleValue)
{
    let bodyWeb= document.body;
    bodyWeb.classList.add(styleValue);
}