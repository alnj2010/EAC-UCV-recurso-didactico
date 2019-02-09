//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/gemelos/banner-gemelos.png'
//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Gemelos(){
  
    return (
        <div className="gemelos">
            <Banner title="Gemelos Digitales" image={bannerImg}/>

            <Presentation title="¿Qué es un gemelo digital?">
            <p>Es un modelo virtual de un producto, de un proceso o de un servicio. Es un puente entre el mundo virtual y el mundo físico que permite 
           simular escenarios de funcionamiento desde la concepción a través de todo el ciclo de vida del producto,
            analizar datos para mejorar su funcionamiento y realizar monitorizaciones para identificar problemas 
            antes de que ocurran.</p>

            <p>Los gemelos digitales son una herramienta poderosa en la llamada industria 2.0 que permite
             desarrollar nuevas oportunidades de negocio y nuevos planes de fabricación y/o producción, 
             incluso realizar previsiones a futuro.</p>


            <p>Sin embargo, el Gemelo Digital es todavía un concepto de desarrollo que, además presenta
             diversas barreras tecnológicas para su adopción en el tejido industrial. Por un lado, 
             existe una dificultad técnica para monitorizar masivamente y digitalizar procesos en la 
             industria, con gran variedad de equipos, sistemas legados aislados, buses de campo, protocolos
              propietarios, así como una estricta arquitectura de integración y automatización industrial.
              </p>
            </Presentation>
                <div className="content-block-chain">
                <article>
                    <h1>Un poco de historia.</h1>
                    <p>
                        <div> <img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Si bien la terminología ha cambiado con el tiempo, el concepto básico del modelo gemelos digitales se ha mantenido bastante estable desde su inicio en 2002. Se basa en la idea de que una construcción de información digital sobre un sistema físico podría ser creado como una entidad por sí misma.</p>
                        <p> Esta información digital sería un "gemelo" de la información que estaba incorporada dentro del propio sistema físico y se vincularía con ese sistema físico durante todo el ciclo de vida del sistema.</p>
                        <p>Los orígenes del concepto digital, el concepto de Digital Twin o Gemelo Digital (se usarán ambos términos de forma indistinta) se remonta a una presentación de la Universidad de Michigan a la industria en 2002 para la formación de un centro de gestión del ciclo de vida del producto (Product Lifecycle Management, PLM).</p>
                        <p>El modelo conceptual se usó en los primeros cursos ejecutivos de PLM en la Universidad de Michigan a principios de 2002, donde se lo llamó Modelo de Espacios Espejados.</p>
                        <p>El concepto se amplió enormemente en Virtually Perfect, impulsando productos innovadores y eficientes a través de la gestión del ciclo de vida del producto (Grieves 2011), donde el concepto aún se conocía como el modelo de duplicación de información.</p>
                        <p>El Digital Twin ha sido adoptado como una base conceptual en el área de astronáutica y aeroespacial en los últimos años. La NASA lo ha utilizado en sus mapas de tecnología (Piascik, Vickers et al. 2010) y en propuestas para la exploración espacial sostenible (Caruso, Dumbacher et al. 2010).</p>
                        <p>El concepto ha sido propuesto para la próxima generación de aviones de combate y vehículos de la NASA (Tuegel, Ingraffea et al. 2011, Glaessgen y Stargel 2012).</p>
                    </p>
                </article>
                </div>
            <div className="content-ia">
                  <article>
                    <h1>Aplicaciones que se están haciendo actualmente.</h1>
                  
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
export default Gemelos;