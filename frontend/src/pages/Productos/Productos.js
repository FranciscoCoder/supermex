import {changeStyleBody} from '../../components/Utils';

import styleProductos from './Productos.module.css';

import patataClasica from '../../assets/images/bolsa_patatas_clasicas.png';
import tortitas from '../../assets/images/tortitas.png';
import salsas from '../../assets/images/mockup_queso.png';
import sazonadores from '../../assets/images/paquete_sachet_packet.png';
import chiliConCarne from '../../assets/images/lata_tin_can.png';

export default function Productos(){
    changeStyleBody('fondoturquesa','fondorosa');  
    return(
    <div>
        <section>
            <div></div>
            <div>
                <span>Disfruta de nuestros mejores productos en compañía de tu tribu.</span><br /><br />
                <p>
                    El auténtico sabor de nuestras deliciosas creaciones, siempre elaboradas con ingredientes de gran calidad, que te transportarán en un momento a nuestros antepasados aztecas.<br /><br />

                    Aquí podrás encontrar todos nuestros productos y sus especificaciones, que podrás encontrar en tiendas y supermercados.
                </p>
            </div>
        </section>
        <section>
            <div>
                <div>Tortilla chips<br />triangulos - redondos</div>
                <div>
                    <div>CLÁSICAS</div>
                    <div>
                        <span>Las tradicionales con nuestra receta de la tribu.</span>
                        <p>
                            En Supermex elaboramos nuestras tortilla chips con ingredientes de proveedores locales elegidos por su máxima calidad. Elaboradas con maíz, y siguiendo nuestra técnica tradicional nixtamal, para conservar ese sabor que las hace únicas.
                        </p>
                    </div>
                </div>
                <div><img src={patataClasica} width="616" height="883" alt="imagen patatas fritas" /></div>
                <div>
                    <div>SABORES</div>
                    <div>
                        <span>American BBQ / Queso.</span>
                        <p>
                            Nuestras tortillas chips están fabricadas con ingredientes de proveedores locales elegidos por su máxima calidad. Elaboradas con maíz y siguiendo nuestra técnica tradicional nixtamal, para conservar ese sabor que las hace únicas. Disfruta de la variedad de Queso y American BBQ, perfectas para dippear o comer directos de la bolsa.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>Tortillas de trigo</div>
                    <div>
                        <span>Rellénalo de lo que más te gusta y a disfrutar.</span>
                        <p>
                            Muy versátiles y sabrosas. Podemos usarlas en diversos platos, como burritos, kebabs y wraps. Puedes prepararlas calientes (fritas o recién salidas del horno) o frías. Nuestras tortillas de trigo están elaboradas con harina de máxima calidad y se envasan para permanecer frescas y sabrosas sin necesidad de refrigeración.
                        </p>
                    </div>
                </div>
                <div><div><img src={tortitas} width="1253" height="1117" alt="imagen patatas fritas" /></div></div>
            </div>
            <div>
                <div><div><img src={chiliConCarne} width="872" height="919" alt="imagen chili con carne" /></div></div>
                <div>
                    <div>Chili con carne</div>
                    <div>
                        <span>Perfecto para los amantes de la cocina tradicional tex-mex.</span>
                        <p>
                            El chili con carne es un famoso plato de la cocina tex-mex, preparado a base de carne de vacuno y alubias rojas, mezclado con una salsa de tomate ligeramente picante. Llena de sabor y lista para consumir, es el complemento perfecto para acompañar unos nachos, rellenar unos burritos o simplemente comerlo con arroz como plato principal.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>Salsas</div>
                    <div>
                        <span>El complemento perfecto para nuestras tortilla chips.</span>
                        <p>
                            Ya sea dippeando o para cubrir unos nachos. Nuestras salsas, hechas a partir de las recetas tradicionales milenarias, añaden sabor y color a cualquier plato. Están especialmente envasadas para su fácil utilización.<br /><br />
                            cheese - tomato - guacamole
                        </p>
                    </div>
                </div>
                <div><div><img src={salsas} width="1088" height="1148" alt="imagen patatas fritas" /></div></div>
            </div>
            <div>
                <div><div><img src={sazonadores} width="1049" height="958" alt="imagen sazonadores" /></div></div>
                <div>
                    <div>Sazonadores</div>
                    <div>
                        <span>Perfectos para preparar tacos, burritos o fajitas en casa.</span>
                        <p>
                            Preparamos nuestros condimentos con productos 100% naturales y libres de gluten. Ajo, comino, cebolla… son algunos de los ingredientes de nuestra mezcla especial que ayudan a realzar el sabor azteca de tus recetas. Envasados en sobres monodosis de 25gr.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}