//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/ia/banner-ia.png'

//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Iartificial(){
  
    return (
        <div className="iartificial">
            <Banner title="lorem ipsum massa tincidut" image={bannerImg}/>

            <Presentation title="Lorem Ipsum">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis repellendus ab excepturi amet, vero autem. Sed facilis aliquam ab quaerat maxime ea iste voluptatum inventore, omnis, alias magni? Sit?
            </Presentation>
               <div className="content-block-chain">
                <article>
                    <h1>Un poco de Historia.</h1>
                    <p>
                        <div> <img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Como se considera a la realidad virtual la primera experiencia inmersiva con medios tecnológicos pues en principio hablaremos de la su historia:</p>
                        <p>El origen de la realidad virtual se remonta a la Segunda Guerra Mundial. La Marina de Guerra de Estados Unidos contacta con el MIT (Massachusetts Institute of Technology) para la posible creación de un simulador de vuelo apto para el entrenamiento de pilotos de bombarderos. El proyecto fue denominado Whirlwind y su construcción finalizó algunos años más tarde en 1951. No fue hasta 8 años después cuando USAF (United States Air Force) retomó el proyecto bajo el nombre de “Claude Project” y apareció un uso civil de la tecnología 3D.</p>
                        <p>En 1978, un equipo del MIT liderado por Andrew Lippman realizó el Aspen Movie Map, un programa que permitía al usuario recorrer las calles de la ciudad de Aspen, mediante filmaciones reales del lugar, e interactuar con ciertos edificios, permitiendo ver su interior y datos históricos.</p>
                        <p>En 1984, la sede de Baltimore de la cadena de parques de diversiones Six Flags estrenó The Sensorium, una sala de cine 4D que combinaba una película con proyección esteroscópica, asientos que vibraban y efectos aromáticos.</p>
                        <p>En 1991, Sega anunció el lanzamiento del Sega VR, un casco de realidad virtual con pantalla LCD y auriculares estéreo para máquinas arcade y consolas de videojuegos. El aparato se presentó al público en 1993, y se anunció que costaría 200 dólares, pero nunca se comercializó.</p>
                        <p>En 1994 lanzó el Sega VR-1, un simulador de movimiento que incorporaba un casco con gráficos tridimensionales poligonales y seguimiento de movimientos de la cabeza.</p>
                        <p>En 2012, Palmer Luckey presentó el primer prototipo del casco de realidad virtual Oculus Rift3 La versión para clientes se comenzó a comercializar en 2015. En 2016, Sony lanzó el PlayStation VR, mientras que HTC y Valve lanzaron el HTC Vive.</p>
                        
                        <p></p>
                    </p>
                </article>
                </div>
            <div className="content-ia">
                  <article>
                    <h1>Aplicaciones y que se está haciendo actualmente.</h1>
                  
                        <div></div>
                        <p>La prevención de fallos de las máquinas es una de las ventajas más obvias y, 
                        potencialmente, transformadoras que el gemelo digital podría tener en la industria. 
                        Sus aplicaciones pueden ser aprovechadas por otros sectores como el energético. 
                        Gracias al análisis y simulación virtual, las empresas podrían ahorrar un 70% de 
                        energía lo que repercutiría en una reducción de costes tanto para el productor 
                        como para el consumidor final.

                        </p>
                        <p>Los gemelos digitales se están extendiendo en el mundo del IoT industrial.
                        Muchas grandes empresas ya los están usando, la NASA como hemos comentado en la
                        introducción, pero también hay muchos otros ejemplos como: </p>
                    
                </article>
                <article>
                    <div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1200px-General_Electric_logo.svg.png" alt=""/></div>
                        <p><b>General Electrics:</b> Los está utilizando a través de su plataforma IoT para sus turbinas de viento para encontrar una solución para protegerlas de los vientos violentos del Atlántico norte.</p>
                    </div>
                    <div><div><img src="http://freevectorlogo.net/wp-content/uploads/2011/05/rolls-royce-logo-400x400.png" alt=""/></div>
                        <p><b>Rolls Royce:</b> Utiliza gemelos digitales para modelar diferentes escenarios digitalmente para mejora el diseño de sus motores de avión.</p>
                    </div>
                    <div><div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/SAP-Logo.svg/1280px-SAP-Logo.svg.png" alt=""/></div>
                        <p><b>SAP:</b> Propone un componente de la solución SAP Leonardo, llamado SAP Predictive Engineering Insights que utiliza un programa 3-D y lo combina con los datos enviados por los sensores, como la fuerza o el estrés, para dar una visión sobre los dispositivos.</p>
                    </div>
                </article>
            </div>
            <Knowthat>
                <h1>¿Sabías que los Gemelos Digitales trabajan con sensores que recopilan datos sobre el estado de los procesos en tiempo real?</h1>
                <p>Los componentes están conectados a un sistema que se basa en La Nube, que recibe y procesa toda la información recopilada. </p>
                <p>Una vez que se lleva a cabo el análisis del proceso, se puede generar de manera virtual una copia del proceso, producto o servicio y dotarlo de todos los cambios antes de que ingrese al proceso de fabricación.</p>
                <p>Los Gemelos Digitales son poderosas fuentes intelectuales, que permiten impulsar la innovación y el rendimiento.</p>
            </Knowthat>
            <Others>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur delectus voluptate necessitatibus, at velit explicabo aut! Tempore, consectetur tenetur. Doloremque vero tempora, eum at numquam eligendi. Voluptate, soluta tempore.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae laboriosam porro nisi enim adipisci odit excepturi quis necessitatibus facilis unde atque reprehenderit, natus illum doloribus, modi impedit vitae beatae.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor impedit aut! Doloribus officiis voluptatum accusamus sunt, asperiores modi! Cupiditate fugit magni deserunt inventore. Laborum aliquam pariatur reprehenderit voluptate autem.</Other>
            </Others>
        </div>
    );
}
export default Iartificial;