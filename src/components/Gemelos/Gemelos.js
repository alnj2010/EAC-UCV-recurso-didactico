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
                    <div><div></div><p><b>General Electrics:</b> Los está utilizando a través de su plataforma IoT para sus turbinas de viento para encontrar una solución para protegerlas de los vientos violentos del Atlántico norte.</p></div>
                    <div><div></div><p><b>Rolls Royce:</b> Utiliza gemelos digitales para modelar diferentes escenarios digitalmente para mejora el diseño de sus motores de avión.</p></div>
                    <div><div></div><p><b>SAP:</b> Propone un componente de la solución SAP Leonardo, llamado SAP Predictive Engineering Insights que utiliza un programa 3-D y lo combina con los datos enviados por los sensores, como la fuerza o el estrés, para dar una visión sobre los dispositivos. </p></div>
                </article>
            </div>
            <Knowthat>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quis itaque eos non accusantium, voluptate dolore quam delectus officiis voluptatibus assumenda cum, placeat sint quod, deleniti ducimus sed aperiam veritatis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quis itaque eos non accusantium, voluptate dolore quam delectus officiis voluptatibus assumenda cum, placeat sint quod, deleniti ducimus sed aperiam veritatis.</p>
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