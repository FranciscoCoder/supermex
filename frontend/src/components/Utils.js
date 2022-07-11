import jwt_decode from "jwt-decode";
//URL back
let globalUrl = "http://127.0.0.1:8080";
export default globalUrl;

//Funcion para cambiar el color de fondo segun la posicion del footer al hacer scroll
export function changeStyleBody(styleValue, styleValue2) {

  document.body.classList.remove('fondoturquesa', 'fondorosa', 'fondoamarillo', 'fondoazuloscuro', 'fondomorado');
  document.body.classList.add(styleValue);

  window.addEventListener("scroll", () => {
    //Get window scroll Y and Footer position
    let windowScroll = window.pageYOffset;
    let footerPositionY = document.body.querySelector("footer").offsetTop - 200;
    if (windowScroll >= footerPositionY) {
      document.body.classList.remove('fondoturquesa', 'fondorosa', 'fondoamarillo', 'fondoazuloscuro', 'fondomorado');
      document.body.classList.add(styleValue2);
    } else {
      document.body.classList.remove('fondoturquesa', 'fondorosa', 'fondoamarillo', 'fondoazuloscuro', 'fondomorado');
      document.body.classList.add(styleValue);
    }
  });
}

//Funcion color de fondo para Dashboard
export function backgroundColorBody(styleValue) {
  let bodyWeb = document.body;
  bodyWeb.classList.add(styleValue);
}

//Calculo la altura del banner
export function heightBanner() {
  let banner = document.querySelector("#bannerInicio");
  if (banner !== null) {
    banner.setAttribute("style", "height:" + window.innerHeight + "px");
    if (window.innerHeight < 500) {
      banner.setAttribute("style", "height:500px");
    }
  }
}

//Funcion para hacer scroll 0 al renderizar
export function goTop() {
  window.scrollTo(0, 0);
}

//Funcion para generar Slug en Dashboard
export function generateSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  let from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;";
  let to =
    "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  return str;
}

//Funcion para verificar el Token
export function verifyToken() {

  let token = localStorage.getItem("token");
  if((token!==null)||(token!==undefined))
  {
    fetch(`${globalUrl}/api/verify_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 401 || data.result === "ko") {
          localStorage.removeItem("token");
          window.location.href="/admin/login";
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        window.location.href="/admin/login";
      });
  }
  else{
    window.location.href="/admin/login";
  }
}

export function takeRole(){
  const token = localStorage.getItem("token");
  let role ='';
  if((token!==null)||(token!==undefined)){
    const decoded = jwt_decode(token);
    role = decoded.roles[0];
  }
  return role;
}
