//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/cuantica/banner-cuantica.jpg'

//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Cuantica(){
  
    return (
        <div className="cuantica">
            <Banner title="Computación Cuántica" image={bannerImg}/>

            <Presentation title="¿Qué es la computación cuántica?">
            <p>La computación cuántica es un paradigma de computación distinto al de la computación clásica. Se basa en el uso de qubits en lugar de bits, y da lugar a nuevas puertas lógicas que hacen posibles nuevos algoritmos. Una misma tarea puede tener diferente complejidad en computación clásica y en computación cuántica, lo que ha dado lugar a una gran expectación, ya que algunos problemas intratables pasan a ser tratables.</p>
            <p>La computación cuántica se vale de la suposición de estados y el entrelazamiento. Pues bien, la superposición y el entrelazamiento nos permiten reducir esas limitaciones: con la superposición podemos almacenar muchos más que sólo 2^n estados con n bits cuánticos (qubits), y el entrelazamiento mantiene fijas ciertas relaciones entre qubits de tal forma que las operaciones en un qubit afectan forzosamente al resto.</p>
            </Presentation>
            <div className="content-block-chain">
                <article>
                    <h1>Un poco de historia.</h1>
                    <p>
                        <div> <img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Los teoricos Richard Feynmann, del California Institute of Technology, de Pasadena (California); Paul Benioff, de Argonne National Laboratory, en Illinois; David Deutsch, de la Universidad de Oxford, en Inglaterra, y Charles Bennett, del T.J. Watson Research Center de IBM en Yorktown Heights (Nueva York), propusieron por primera vez el concepto de las computadoras cuánticas en las décadas de 1970 y 1980, muchos científicos dudaron que alguna vez ese tipo de computadora pudiera resultar práctica. </p>
                        <p>Pero en 1994, Peter Shor, de AT&T Research, describió un algoritmo cuántico específicamente diseñado para factorizar números grandes y exponencialmente más rápido que las computadoras convencionales, lo suficientemente rápido como para birlar la seguridad de muchos criptosistemas de clave pública. </p>
                        <p>El potencial del algoritmo de Shor alentó a muchos científicos a tratar de explotar las capacidades de las computadoras cuánticas. En los últimos años, varios grupos de investigación de todo el mundo han alcanzado progresos significativos en este campo.</p>
                        <p>Mientras estuvo en IBM, Chuang amplió su reputación como uno de los experimentalistas en computación cuántica más importantes del mundo. Dirigió el grupo que demostró la primera computadora cuántica de 1 qubit (en 1998 en la Universidad de California en Berkeley).</p>
                        <p>La factorización con el algoritmo de Shor anunciada hoy es el algoritmo más complejo que se haya demostrado hasta ahora usando una computadora cuántica.</p>
                        <p>Además de su ambicioso programa experimental, la División de Investigación de IBM Research es conocida también por sus muchas contribuciones teóricas en el emergente campo de la información cuántica.</p>
                        <p>Los científicos de IBM fueron pioneros en criptografía cuántica, en comunicaciones cuánticas y en metodologías eficientes para corregir errores. </p>
                        
                    </p>
                </article>
            </div>
                        <div className="content-ia">
                  <article>
                    <h1>¿Qué se ha conseguido hasta el momento con la computación cuántica?</h1>
                  
                        <div></div>
                        <p>Hasta ahora, la computación cuántica es un campo que no se ha aplicado mucho en el mundo real. Para que nos hagamos una idea, con los veinte qubits del ordenador cuántico comercial que anunciaba IBM, podríamos aplicar el algoritmo de factorización de Shor sólo a números menores que 1048576, que como se puede imaginar no es muy impresionante.</p>
                        <p>Aun así, el campo tiene una evolución prometedora. En 1998 se presentó el primer ordenador cuántico (sólo dos qubits, y necesitaba una máquina de resonancia magnética nuclear para resolver un problema "de juguete" (el llamado problema de Deutsch-Jozsa).</p>
                        <p>En 2001 se ejecutó por primera vez el algorimo de Shor. Sólo 6 años más tarde, en 2007, D-Wave presentaba su primer ordenador capaz de ejecutar el temple cuántico con 16 qubits. Este año, la misma compañía anunciaba un ordenador de temple cuántico de 2000 qubits. </p>
                        <p>Por otra parte, los nuevos computadores de IBM, aunque con menos qubits, son capaces de implementar algoritmos genéricos y no sólo el del temple cuántico. En resumidas cuentas, parece que el empuje es fuerte y que la computación cuántica cada vez será más aplicable a problemas reales.</p>
                        <div><img src="https://i.blogs.es/fea61f/1366_2000/1366_2000.jpg" alt=""/></div>
                    
                </article>
            </div>
            <Knowthat>
                <h1>¿Sabías que la computación cuántica podría acabar con la encriptación actual, y que ya se buscan alternativas? </h1>
                <p>Las computadoras cuánticas, que usan bits cuánticos o qubits, son capaces de ejecutar cálculos imposibles para la tecnología existente. Eso promete abrir nuevas posibilidades en áreas como investigación médica, inteligencia artificial y seguridad. Sin embargo, también descifrarían fácilmente los algoritmos de encriptación actuales.</p>
                <p>Para descifrar la encriptación de hoy, las computadoras cuánticas tienen que ser mucho mejores que las que tenemos hoy. Los especialistas aseguran que para ello se requerirán computadoras con entre 500 y dos mil qubits. </p>
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
export default Cuantica;