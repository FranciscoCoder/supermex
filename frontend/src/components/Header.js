import React from "react";
import "../App.css";
import "./Header.css";
import menu1 from "../assets/images/menu1.png";
import menu2 from "../assets/images/menu2.png";
import menu3 from "../assets/images/menu3.png";
import videomenu from "../assets/video/menu_back.mp4";

export default function Header(props) {
  //Funcion para generar un numero aleatorio
  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

    // document.querySelector('.btmenu').addEventListener('click', ()=>{
    //   console.log('ao2');
    // });

  const opera_menu = () =>{
    let menu= document.querySelector('.btmenu');
    if(menu.getAttribute("data-menu")==='closed'){
      menu.setAttribute("data-menu", "open");
      document.querySelector('#lineamenu1').classList.remove('lineamenu1');
      document.querySelector('#lineamenu1').classList.add('rotadch');
      document.querySelector('#lineamenu2').classList.add('ocultar');
      document.querySelector('#lineamenu3').classList.remove('lineamenu3');
      document.querySelector('#lineamenu3').classList.add('rotaizq');
      document.querySelector('#menucompleto').classList.add('mostrarmenu');
      document.querySelector('#videomenu').play();
      document.querySelector('html').classList.add('noscroll');
      document.querySelector('body').classList.add('noscroll');
    }
    else{
      menu.setAttribute("data-menu", "closed");
      document.querySelector('#lineamenu1').classList.remove('rotadch');
      document.querySelector('#lineamenu1').classList.add('lineamenu1');
      document.querySelector('#lineamenu2').classList.remove('ocultar');
      document.querySelector('#lineamenu3').classList.remove('rotaizq');
      document.querySelector('#lineamenu3').classList.add('lineamenu3');
      document.querySelector('#menucompleto').classList.remove('mostrarmenu');
      document.querySelector('#videomenu').pause();
      document.querySelector('#videomenu').currentTime = 0;
      document.querySelector('html').classList.remove('noscroll');
      document.querySelector('body').classList.remove('noscroll');
    }
  };

  let logoaleatorio = generateRandomNumber(1, 5);

  let headerTranslate = {
    es: {
      producto: "Productos",
      linkProducto: "productos",
      horeca: "Horeca",
      laTribu: "La Tribu",
      linkLaTribu: "la-tribu",
      recetas: "Recetas",
      linkRecetas: "recetas",
      calidad: "Calidad",
      linkCalidad: "calidad",
      contacto: "Contacto",
      linkContacto: "contacto",
      laHoguera: "La Hoguera",
      linkLaHoguera: "la-hoguera",
    },
    en: {
      producto: "Products",
      linkProducto: "products",
      horeca: "Horeca",
      laTribu: "The Tribe",
      linkLaTribu: "the-tribe",
      recetas: "Recipes",
      linkRecetas: "recipes",
      calidad: "Quality",
      linkCalidad: "quality",
      contacto: "Contact",
      linkContacto: "contact",
      laHoguera: "The Bonfire",
      linkLaHoguera: "the-bonfire",
    },
  };

  return (
    <header>
      <div className="idiomas">
        <a href="/es/" className={`idioma${generateRandomNumber(1, 5)}`}>
          ES
        </a>
        <a href="/en/" className={`idioma${generateRandomNumber(1, 5)}`}>
          EN
        </a>
      </div>

      <div className="logo">
        <a href={`/${props.lang}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="278" height="135" viewBox="0 0 278 135">
              <g transform="translate(-1141 270)">
                  <rect className={`logo_rectangulo${logoaleatorio}`} width="278" height="135" transform="translate(1141 -270)" fill="#13235a"/>
                  <g transform="translate(1159.163 -244.359)">
                      <g transform="translate(0 30.789)">
                          <g transform="translate(0 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M1944.812,1684.684l.732,2.2c.182.458,0,.732-.458.732h-8.417c-.458,0-.641-.275-.549-.732l.732-2.2v-4.941h-7.868v17.841l12.9,5.307a1.232,1.232,0,0,1,.641.549l2.013,3.2a1.28,1.28,0,0,1,.274.823v23.147a1,1,0,0,1-.365.824l-3.2,3.2a.994.994,0,0,1-.823.366h-14.914a.993.993,0,0,1-.823-.366l-3.294-3.2a1,1,0,0,1-.366-.824V1722.2l-.732-2.2c-.091-.457.092-.732.549-.732h8.417c.458,0,.641.275.458.732l-.732,2.2v4.941h7.868v-17.841l-12.809-5.306a1.231,1.231,0,0,1-.641-.549l-2.1-3.2a1.282,1.282,0,0,1-.274-.824v-23.239a1,1,0,0,1,.366-.823l3.294-3.2a1,1,0,0,1,.823-.366h14.914a1,1,0,0,1,.823.366l3.2,3.2a1,1,0,0,1,.365.823Z" transform="translate(-1920.269 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(30.784 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M2196.323,1671.783c.457,0,.64.274.457.732l-.732,2.287V1716a.994.994,0,0,1-.366.824l-3.2,3.2a.994.994,0,0,1-.824.366h-14.913a1,1,0,0,1-.824-.366l-3.2-3.2a.994.994,0,0,1-.366-.824v-41.2l-.732-2.287c-.183-.458,0-.732.457-.732h8.418c.457,0,.64.274.457.732l-.732,2.287v37.724h7.96V1674.8l-.732-2.287c-.183-.458,0-.732.457-.732Z" transform="translate(-2171.549 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(61.98 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M2434.871,1732.077l.732,2.2c.183.457,0,.732-.457.732h-8.418c-.457,0-.64-.275-.457-.732l.732-2.2V1674.8l-.732-2.287c-.183-.458,0-.732.457-.732h19.58a1,1,0,0,1,.824.366l3.2,3.2a.994.994,0,0,1,.366.823v26.808a.994.994,0,0,1-.366.823l-3.2,3.2a1,1,0,0,1-.824.366h-11.437Zm0-32.572h7.868v-19.762h-7.868Z" transform="translate(-2426.201 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(91.256 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M2688.753,1734.364c-.092.457-.275.64-.732.64H2665.7c-.457,0-.64-.275-.457-.732l.732-2.287v-57.275l-.732-2.2c-.183-.458,0-.732.457-.732h22.325c.457,0,.64.183.732.64l.823,6.588a.515.515,0,0,1-.549.641H2673.84v19.762h4.941l2.287-.732c.457-.183.732,0,.732.458v8.417c0,.458-.275.64-.732.458l-2.287-.732h-4.941v19.763h15.188a.515.515,0,0,1,.549.641Z" transform="translate(-2665.169 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(120.073 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M2909.8,1734.273c.183.457,0,.732-.457.732h-8.418c-.457,0-.64-.275-.457-.732l.732-2.2V1674.8l-.732-2.287c-.183-.458,0-.732.457-.732h19.58a1,1,0,0,1,.824.366l3.2,3.2a.994.994,0,0,1,.366.823v26.808a.994.994,0,0,1-.366.823l-3.568,3.568,3.385,23.605,1.007,3.294c.183.457,0,.732-.458.732h-8.326c-.549,0-.731-.275-.549-.732l.641-1.83-3.659-25.069h-3.934v24.7Zm-.732-34.768h7.96v-19.762h-7.96Z" transform="translate(-2900.402 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(150.538 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M3173.573,1693.009l-5.855,15.188a.7.7,0,0,1-.732.549h-2.561a.7.7,0,0,1-.732-.549l-5.947-15.187v39.068l.732,2.2c.183.457,0,.732-.458.732H3149.6c-.458,0-.64-.275-.458-.732l.732-2.2V1674.8l-.732-2.287c-.182-.458,0-.732.458-.732h7.594a.7.7,0,0,1,.732.549l7.777,20.678,7.685-20.678a.7.7,0,0,1,.732-.549h7.594c.458,0,.64.274.458.732l-.732,2.287v57.274l.732,2.2c.182.457,0,.732-.458.732H3173.3c-.458,0-.641-.275-.458-.732l.732-2.2Z" transform="translate(-3149.075 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(189.603 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M3491.539,1734.364c-.092.457-.273.64-.731.64h-22.325c-.458,0-.64-.275-.458-.732l.732-2.287v-57.275l-.732-2.2c-.182-.458,0-.732.458-.732h22.325c.458,0,.64.183.731.64l.824,6.588a.515.515,0,0,1-.549.641h-15.187v19.762h4.941l2.286-.732c.458-.183.732,0,.732.458v8.417c0,.458-.275.64-.732.458l-2.286-.732h-4.941v19.763h15.188a.515.515,0,0,1,.549.641Z" transform="translate(-3467.955 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(216.806 0)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M3713.926,1674.253l-6.861,29.095,6.861,29.187,1.281,1.647c.275.457.091.823-.457.823h-9.333c-.548,0-.731-.275-.548-.732l.457-1.281-2.653-16.743-2.654,16.743.366,1.281c.183.457,0,.732-.458.732H3690.5c-.458,0-.641-.366-.366-.823l1.282-1.738,6.77-29.1-6.77-29.095-1.282-1.647c-.275-.458-.092-.823.458-.823h9.332c.458,0,.641.274.458.732l-.366,1.281,2.654,16.652,2.653-16.652-.457-1.281c-.183-.458,0-.732.548-.732h9.333c.548,0,.731.366.457.823Z" transform="translate(-3690.008 -1671.783)" fill="#46b2b5"/>
                          </g>
                          <g transform="translate(30.784 54.529)">
                              <path className={`logo_letra_supermex${logoaleatorio}`} d="M2196.118,2116.913l-2.22.756-19.421.023-2.2-.732c-.457-.183-.732,0-.732.458v8.417c0,.458.275.64.732.549l2.2-.732,19.445-.047,2.2.732c.457.183.732,0,.732-.458v-8.417C2196.85,2117,2196.575,2116.822,2196.118,2116.913Z" transform="translate(-2171.549 -2116.89)" fill="#46b2b5"/>
                          </g>
                      </g>
                      <g transform="translate(41.879)">
                          <g transform="translate(0)">
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2265.532,1446.308c.933-.084,1.4-.125,2.333-.205q2.427,3.8,4.82,7.626c-.867.071-1.3.107-2.169.18-.456-.758-.685-1.137-1.143-1.895-1.749.15-2.623.227-4.372.385-.313.825-.469,1.238-.781,2.064-.841.077-1.261.116-2.1.2Q2263.807,1450.477,2265.532,1446.308Zm3.148,4.506c-.752-1.29-1.129-1.934-1.886-3.223-.531,1.4-.795,2.1-1.32,3.505C2266.757,1450.981,2267.4,1450.925,2268.68,1450.814Z" transform="translate(-2262.119 -1442.961)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2369.569,1443.454q2.989-3.011,6.011-5.989c-2.4.169-3.6.258-6,.445l-.1-1.252q4.294-.334,8.592-.624c.033.488.049.732.082,1.219q-3,2.933-5.97,5.9c2.55-.192,3.825-.283,6.377-.455.035.528.053.792.089,1.32q-4.5.3-8.99.655Z" transform="translate(-2356.332 -1434.126)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2467.312,1431.708c-1.405.084-2.107.128-3.512.217l-.08-1.253q4.5-.288,9-.527c.027.5.04.752.067,1.254-1.406.075-2.108.114-3.513.194q.193,3.369.386,6.737l-1.95.114Q2467.513,1435.076,2467.312,1431.708Z" transform="translate(-2439.022 -1428.958)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2567.236,1426.051q4.071-.192,8.143-.358c.02.5.029.753.049,1.255-2.466.1-3.7.149-6.164.264.038.806.056,1.209.094,2.016,2.36-.11,3.54-.16,5.9-.253.02.5.03.753.049,1.255-2.357.093-3.535.143-5.891.253.041.887.062,1.33.1,2.217,2.491-.116,3.736-.169,6.228-.266l.049,1.255q-4.085.166-8.169.358Q2567.431,1430.048,2567.236,1426.051Z" transform="translate(-2529.857 -1425.052)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2673.87,1424.482c-.239-1.194-1.4-1.895-3.066-1.848a2.886,2.886,0,0,0-3.062,3.211c.053,1.669,1.433,2.779,3.361,2.725,2.033-.057,2.668-1.248,2.817-2.1.846-.021,1.27-.031,2.116-.05-.479,2.456-3.01,3.373-5.235,3.419-2.415.049-5-1.382-5.1-4.067-.1-2.815,2.568-4.38,5.1-4.389,3.153-.01,4.948,1.321,5.2,3.053C2675.143,1424.451,2674.719,1424.461,2673.87,1424.482Z" transform="translate(-2616.253 -1421.266)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2844.367,1420.488q3.9-.026,7.807-.029v1.256c-2.331,0-3.5,0-5.826.015l.012,2.018c2.2-.013,3.3-.016,5.5-.015v1.255c-2.2,0-3.294,0-5.49.015.008,1.39.012,2.085.021,3.475l-1.953.014Q2844.4,1424.49,2844.367,1420.488Z" transform="translate(-2773.037 -1420.459)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M2939.749,1420.563l1.971.013q-.026,3.34-.052,6.681c2.263.018,3.4.031,5.658.064-.008.529-.011.794-.019,1.323q-3.8-.058-7.6-.077Q2939.727,1424.565,2939.749,1420.563Z" transform="translate(-2856.696 -1420.55)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M3028.186,1422.263c.936.021,1.4.033,2.339.057q1.984,4.05,3.933,8.118c-.869-.027-1.3-.039-2.173-.064-.368-.8-.553-1.206-.923-2.01-1.753-.047-2.63-.068-4.383-.106-.4.785-.6,1.178-1.006,1.963-.844-.017-1.265-.025-2.109-.041Q3026.008,1426.212,3028.186,1422.263Zm2.622,4.83c-.6-1.366-.905-2.049-1.512-3.413-.683,1.333-1.024,2-1.7,3.335C3028.879,1427.044,3029.522,1427.059,3030.808,1427.093Z" transform="translate(-2930.545 -1422.042)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M3127.9,1424.186c.883.029,1.324.044,2.207.076q1.416,3.256,2.809,6.522,1.612-3.148,3.247-6.284c.851.036,1.276.055,2.127.094q-2.241,3.9-4.448,7.821l-2.069-.081Q3129.857,1428.251,3127.9,1424.186Z" transform="translate(-3021.838 -1423.729)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M3235.1,1433.015c.142-2.92,3.243-4.071,5.722-3.934s5.434,1.625,5.252,4.542c-.181,2.9-3.25,4.034-5.72,3.9S3234.959,1435.913,3235.1,1433.015Zm8.937.485c.1-1.746-1.082-3.043-3.284-3.165s-3.524,1.036-3.614,2.782,1.1,3.029,3.285,3.15S3243.933,1435.245,3244.037,1433.5Z" transform="translate(-3115.898 -1428.015)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M3357.2,1435.752l1.968.134c-.125,1.8-.187,2.7-.312,4.507-.077,1.107-.13,2.448,2.419,2.633s2.7-1.16,2.786-2.256l.34-4.5,1.967.151c-.142,1.819-.213,2.729-.354,4.549-.025,2.674-2.606,3.363-4.83,3.313-2.249-.05-4.64-1.453-4.289-3.973Z" transform="translate(-3222.751 -1433.878)" fill="#ffaf00"/>
                              <path className={`logo_aztec_supermex${logoaleatorio}`} d="M3466.856,1444.164c2.37.2,3.555.3,5.924.515,2.385.216,3.071,1.207,2.953,2.457a1.924,1.924,0,0,1-1.719,1.776c0,.009,0,.014,0,.022,1.076.3,1.26,1.142,1.153,2.281a2.956,2.956,0,0,0,.229,1.744c-.841-.079-1.261-.119-2.1-.2a2.376,2.376,0,0,1-.123-1.227c.1-1.128-.017-1.961-1.437-2.089-1.329-.119-1.993-.177-3.323-.292-.108,1.26-.162,1.89-.27,3.15l-1.948-.164Q3466.524,1448.152,3466.856,1444.164Zm5.04,4.037c1.1.1,1.7-.127,1.778-1.021.077-.837-.522-1.208-1.569-1.3-1.355-.122-2.033-.181-3.389-.3l-.2,2.323C3469.869,1448.02,3470.544,1448.079,3471.9,1448.2Z" transform="translate(-3318.684 -1441.26)" fill="#ffaf00"/>
                          </g>
                      </g>
                      <g transform="translate(30.928 5.475)">
                          <path className={`logo_aztec_puntos_supermex${logoaleatorio}`} d="M2177.553,1468.016l-1.744,3.831-3.083-2.867,1.745-3.831Z" transform="translate(-2172.727 -1465.149)" fill="#ffaf00"/>
                      </g>
                      <g transform="translate(204.755 5.475)">
                          <path className={`logo_aztec_puntos_supermex${logoaleatorio}`} d="M3591.64,1468.016l1.745,3.831,3.083-2.867-1.745-3.831Z" transform="translate(-3591.64 -1465.149)" fill="#ffaf00"/>
                      </g>
                  </g>
              </g>
          </svg>
        </a>
      </div>
      <div className="btmenu" data-menu="closed" onClick={() => {opera_menu();}}>
        <div id="lineamenu1" className="lineamenu1">
          <img src={menu1} width="55" height="15" alt="lineamenu1" className="imagenmaxwidth" />
        </div>
        <div id="lineamenu2" className="lineamenu2">
          <img src={menu2} width="57" height="16" alt="lineamenu1" className="imagenmaxwidth" />
        </div>
        <div id="lineamenu3" className="lineamenu3">
          <img src={menu3} width="56" height="16" alt="lineamenu1" className="imagenmaxwidth" />
        </div>
      </div>

      <div id="menucompleto">
        <div id="elmenu">
          <div id="tablamenu">
            <div className="tablamenuf">
              <div className="tablamenuc">
                <ul id="listamenu1">
                  <li>
                    <a
                      href={`/${props.lang}/${
                        headerTranslate[props.lang].linkProducto
                      }`}
                    >
                      {headerTranslate[props.lang].producto}
                    </a>
                  </li>
                  <li>
                    <a href={`/${props.lang}/horeca`}>
                      {headerTranslate[props.lang].horeca}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${props.lang}/${
                        headerTranslate[props.lang].linkLaTribu
                      }`}
                    >
                      {headerTranslate[props.lang].laTribu}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${props.lang}/${
                        headerTranslate[props.lang].linkRecetas
                      }`}
                    >
                      {headerTranslate[props.lang].recetas}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${props.lang}/${
                        headerTranslate[props.lang].linkCalidad
                      }`}
                    >
                      {headerTranslate[props.lang].calidad}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${props.lang}/${
                        headerTranslate[props.lang].linkContacto
                      }`}
                    >
                      {headerTranslate[props.lang].contacto}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${props.lang}/${
                        headerTranslate[props.lang].linkLaHoguera
                      }`}
                    >
                      {headerTranslate[props.lang].laHoguera}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <video id="videomenu" preload="yes" loop muted>
          <source src={videomenu} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </header>
  );
}
