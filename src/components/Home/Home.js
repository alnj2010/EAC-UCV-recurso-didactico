//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/blogging-business-coding-34140.jpg'
import blockchainImg from '../global/images/blockchain.jpg'
import autonomoImg from '../global/images/disp-autonomo.jpg'
import cuanticaImg from '../global/images/cuantica.jpg'
import iaImg from '../global/images/desarrollo-ia.jpeg'
import gemelosImg from '../global/images/gemelos-digitales.jpg'
import expImg from '../global/images/inmersivas.jpg'

//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Topics from '../Topics/Topics'
import Topic from '../Topics/Topic/Topic'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Home(){
  
    return (
        <div className="home">
            <Banner title="Nuevos perfiles de carreras<br> en Ciencias de la Computación" image={bannerImg}/>

            <Presentation title="Bienvenidos a nuestro recurso didáctico">
            La tecnología ha cambiado prácticamente los estilos de vida, la manera de hacer negocios, 
            la forma en que el mundo se comunica, los trabajos, metodologías de estudio, 
            la lista infinita continúa pero el mundo digital requiere de profesionales capacitados 
            para diseñar y adaptar todo tipo de dispositivos electrónicos es por eso que nuestro 
            objetivo es dar a conocer las nuevas tendencias en el área de la Computación que estarán en auge para el año 2019.
            </Presentation>

            <Topics>
                <Topic image={blockchainImg} title="Blockchain" enlace="/blockchain/"/>
                <Topic image={autonomoImg} title="Dispositivos autónomos" enlace="/dispositivos-autonomos/"/>
                <Topic image={cuanticaImg} title="Computación cuántica" enlace="/computacion-cuantica/"/>
                <Topic image={iaImg} title="Desarrollos impulsados por la IA" enlace="/inteligencia-artificial/"/>
                <Topic image={gemelosImg} title="Gemelos digitales" enlace="/gemelos-digitales/"/>
                <Topic image={expImg} title="Experiencias inmersivas" enlace="/experiencia/"/>
            </Topics>

            <Knowthat>
                <h1>¿Sabías que las carreras de la computación son muy valoradas por su aporte al desarrollo de las sociedad ?</h1>
                <p>La Computación es una de las carreras con mayor empleabilidad tanto a nivel nacional, 
                como internacional, y es una de las más populares, porque permite analizar y optimizar todo tipo de sistemas tecnológicos e informáticos, tan necesarios en el mundo actual.</p>
                <p>Quienes decidan estudiar una carrera como esta, podrán ingresar al mercado laboral de manera inmediata y trabajar para diferentes empresas.</p>
            </Knowthat>
            <Others>
                <Other>
                <ul><b>COLABORADORES<p></p></b>
                <li>Abraham Navarro</li>
                <li>Felix Gárcia</li>
                <li>Jennifer Cádiz</li>
                <li>Jhonatan Llerena</li>
                </ul>
                </Other>
                <Other><div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/UCV.png/250px-UCV.png" alt=""/>
                <img src="http://www.ciens.ucv.ve/ciens/coordinacion-de-extension/files/2013/06/reporte.png" alt=""/></div>
                </Other>
                <Other><p><b>MATERIA:</b> Enseñanza asistida por comporador.</p><p><b>PROFESORA:</b> Yusneyi Carballo.</p> </Other>
            </Others>
        </div>
    );
}
export default Home;