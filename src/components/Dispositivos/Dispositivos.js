//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/dispositivos/autonomo.jpg'

//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Dispositivos(){
  
    return (
        <div className="dispositivos">
            <Banner title="Dispositivos Autónomos" image={bannerImg}/>

            <Presentation title="¿Qué se considera un dispositivo autónomo?">
            En el campo de la informática, un 'dispositivo autónomo es aquel que no necesita estar conectado al ordenador para funcionar. Así un dispositivo multifuncional puede tener funciones autónomas para: enviar y recibir faxes, realizar copias, imprimir imágenes cuando se le conecta una cámara foto-video o una tarjeta flash. Todo esto sin necesidad de que el ordenador esté encendido.
            <p>Los dispositivos de nuestro interés serán aquellos que además de cumplir las características antes mencionadas, puedan operar por si mismos gracias a software especializado para que el dispositivo realice por sí mismo una tarea o gracias a la inteligencia artificial.</p>
            </Presentation>
               <div className="content-block-chain">
                <article>
                    <h1>Un poco de historia.</h1>
                    <p>
                        <div><img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Existen numerosas historias acerca de experimentos que durante los inicios del siglo XX tuvieron como protagonista el coche sin conductor, y es que desde la aparición del automóvil el hombre soñó con la conducción autónoma.</p>
                        <p>La mayoría de avances en el coche autónomo se deben a un único nombre, Ernst Dickmanns, un alemán que profesor de la Bundeswehr University de Múnich y experto en inteligencia artificial que lideró la construcción del primer coche autónomo moderno. Para ello utilizó una tecnología avanzada que combinaba la visión sacádica (un movimiento rápido del ojo, cabeza u otras partes del cuerpo de animales o dispositivos) con cálculos probabilísticos y computación paralela.</p>
                        <p>En 1987 Dickmanns diseñó una furgoneta Mercedes-Benz con esta tecnología y consiguió con éxito conducir por una autopista sin conductor alcanzando velocidades de 100 km/h sin tráfico.</p>
                        <p>Más adelante, en 1994 un Mercedes 500 SEL rebautizado como ‘VAmP’ recorrió más de 1.000 kilómetros en la carretera de circunvalación que rodea la ciudad de París, incluso era capaz de adelantar a otros coches y alcanzar velocidades de hasta 130 km/h.</p>
                        <p>Tras esta serie de experimentos la Comisión Europea mostró su interés en la idea y realizó una generosa inversión de 800 millones de euros en el bautizado como proyecto EUREKA Prometheus para el desarrollo del coche autónomo.</p>
                        <p>Ya en la actualidad podemos decir que numerosas marcas, fabricantes y empresas tecnológicas están trabajando para el desarrollo del coche autónomo, incluso Apple.</p>
                        <p>Tesla es uno de los principales precursores en la actualidad de este tipo de sistemas gracias al ‘Autopilot’ y aunque aún queda mucho camino por recorrer ahora estamos mucho más cerca de conseguirlo.</p>
                    </p>
                </article>
                </div>
            <div className="content-ia">
                  <article>
                    <h1>Dispositivos que se están desarrollando actualmente.</h1>
                  
                        <div></div>
                        <p>Aunque a veces no lo pareciera, el avance de la tecnología en la actualidad va muy rápido, creando todo tipo de dispositivos para hacernos la vida más fácil, así sea creando un hogar inteligente, haciendo nanomateriales impresionantes o inventando robots tan extraordinarios que podrían tomar el control de la humanidad como en una película de ciencia ficción.

                        </p>
                        <p><b>Algunos de estos dispositivos son: </b></p>
                    
                </article>
                <article>
                    <div>
                    <div><img src="https://i.blogs.es/d6a2fa/google_self_driving_car_at_the_googleplex/450_1000.jpg" alt=""/></div>
                        <p><b>Automóviles:</b> es un tipo de automóvil con los sensores, procesadores, software y actuadores necesarios para conducirse por sí mismo.</p>
                        <p>La industria de los automóviles no se queda atrás porque existen muchos prototipos de coches que se conducirían a sí mismos. Ahora mismo, empresas como Audi, BMW, Tesla y Google están estudiando y progresando en el desarrollo de coches autónomos, y de hecho, Google ya ha sacado un modelo que han estado probando y que funciona con satélites que se actualizan en tiempo real para que el auto continúe su camino sin importar las condiciones.</p>
                    </div>
                    <div><div><img src="https://i1.wp.com/dutyvip.com/wp-content/uploads/2015/05/12870-7149-Lily-TrackingDevice-2k-xl.jpg" alt=""/></div>
                        <p><b>Drones:</b> Cada vez están más de moda los aviones no tripulados o drones que sin duda están haciéndose un hueco entre los consumidores de este tipo de tecnología que cada día interesa a más usuarios y que están comenzando a ser uno de los mayores reclamos para los amantes de los selfies.</p>
                        <p>Hoy conocemos a LiLy, el nuevo drone autónomo que es capaz de grabar vídeo en 1080 píxeles a 60 fps o 720 píxeles con 120 fps (cámara lenta). Pero estas no son ni mucho menos las características con las que Lily pretende diferenciarse del resto de drones existentes actualmente en el mercado, sino que llega como avión no tripulado resistente al agua y el primero que es capaz de seguir al usuario por donde quiera que este se mueva.</p>
                    </div>
                    <div><div><img src="https://www.nationalgeographic.com.es/medio/2018/02/28/el-octobot-desarrollado-por-la-univesidad-de-harvard__960x571.jpg" alt=""/></div>
                        <p><b>Robots:</b> son máquinas inteligentes capaces de realizar tareas en su entorno, sin un control explícito de los humanos. </p>
                        <p>Dichos robots tienen que ser capaces de desenvolverse en entornos completamente desconocidos. Para ello deben coordinar todos sus sensores de forma que puedan orientarse, moverse (si tienen capacidad para ello) y poder interactuar con su entorno para realizar la tarea que tienen asignada. </p>
                        <p> Octobot es el primer robot autónomo y blando, accionado por una reacción química controlada por microfluidos y fabricado mediante impresión 3D, "Octobot" no tiene ninguna parte electrónica. </p>
                    </div>
                </article>
            </div>
            <Knowthat>
                <h1>¿Sabías que los coches autónomos tienen que lavarse a mano?</h1>
                <p>El jabón o las propias marcas de agua pueden interrumpir el funcionamiento de los múltiples sensores, las cámaras y los diversos dispositivos que montan este tipo de vehículos. </p>
                <p>De este modo, el lavado a mano con productos específicos, como los paños de microfibra, garantiza que los coches autónomos no se estropeen.</p>
                <p>También requieren de un cuidado adicional y de una limpieza más frecuente, ya que sus cámaras y sensores deben estar libres de cualquier tipo de suciedad, ya sea polvo, barro e incluso insectos.</p>
            </Knowthat>
            <Others>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur delectus voluptate necessitatibus, at velit explicabo aut! Tempore, consectetur tenetur. Doloremque vero tempora, eum at numquam eligendi. Voluptate, soluta tempore.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae laboriosam porro nisi enim adipisci odit excepturi quis necessitatibus facilis unde atque reprehenderit, natus illum doloribus, modi impedit vitae beatae.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor impedit aut! Doloribus officiis voluptatum accusamus sunt, asperiores modi! Cupiditate fugit magni deserunt inventore. Laborum aliquam pariatur reprehenderit voluptate autem.</Other>
            </Others>
        </div>
    );
}
export default Dispositivos;