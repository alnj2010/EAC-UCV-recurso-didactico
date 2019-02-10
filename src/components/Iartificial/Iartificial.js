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
            <Banner title="Desarrollos impulsados por <br>Inteligencia Artificial (IA)" image={bannerImg}/>
  
            <Presentation title="¿Qué es la Inteligencia Artificial?">
                <p>La noción de inteligencia artificial fue desarrollada en referencia a ciertos sistemas creados por los seres humanos que constituyen agentes racionales no vivos. La racionalidad, en este caso, es entendida como la capacidad para maximizar un resultado esperado.</p>
                <p>La inteligencia artificial, por lo tanto, consiste en el diseño de procesos que, al ejecutarse sobre una arquitectura física, producen resultados que maximizan una cierta medida de rendimiento. Estos procesos se basan en secuencias de entradas que son percibidas y almacenadas por la mencionada arquitectura.</p>
                <p>En la actualidad, la forma de inteligencia artificial más popular existe en los videojuegos, dado que su consumo es masivo.</p>
            </Presentation>

            <div className="content-block-chain">
                <article>
                    <h1>Un poco de historia.</h1>
                    <p>
                        <div> <img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Los orígenes de esta tecnología se remontan a la época griega, cuando Aristóteles describió un conjunto de reglas que describen una parte del funcionamiento de la mente para obtener conclusiones racionales.</p>
                        <p>A pesar de estos primeros referentes históricos, es a Alan Turing a quien se considera padre de la inteligencia artificial. En 1936, este visionario diseñó una máquina capaz de implementar cualquier cálculo que hubiera sido formalmente definido, pilar esencial para que un dispositivo pueda adaptarse a distintos escenarios y “razonamientos”</p>
                        <p>Fue ya en 1956 cuando John McCarthy, Marvin Minsky y Claude Shannon acuñaron este término durante la conferencia de Darthmounth para referirse a “la ciencia e ingenio de hacer máquinas inteligentes, especialmente programas de cálculo inteligentes”.  </p>
                        <p>Eso sí, estos tres científicos erraron por completo a la hora de prever cuando llegarían las primeras inteligencias artificiales, ya que confiaban en que en 10 años (para la década de los 70) estaríamos rodeados por Inteligencias Artificiales (IAs) en nuestro mundo.</p>
                        <p>La consagración definitiva de la inteligencia artificial llegó en 1997, cuando IBM demostró que un sistema informático era capaz de vencer al ajedrez a un humano… y no un humano cualquiera, sino el campeón del mundo Gari Kaspárov. Se llamaba Deep Blue y sirvió de base para que la industria tecnológica y la sociedad en general cobrara conciencia de la relevancia y las posibilidades de las IA.</p>
                        <p>Si hay un ejemplo de inteligencia artificial por defecto, ese es IBM Watson. En 2011, ¡Watson ganó el popular concurso televisivo Jeopardy! frente a los dos máximos campeones de este programa, en el que se realizan preguntas sobre cultura y conocimiento de todo tipo.</p>
                        <p>Lo primero de todo Watson tuvo que ser capaz de entender las preguntas y las respuestas que da, a lo que ayudaron sus 200 millones de páginas de contenido almacenadas en su sistema. También tuvo que realizar jugadas inteligentes a la hora de sopesar la elección de las categorías y cuando tuvo que apostar una cantidad en la ronda final.</p>
                    </p>
                </article>
                <article className="articleVideo">
                    <h1>Se acerca el fin del trabajo.</h1>
                    <div className="video"><iframe title="Iartificial" width="560" height="315" src="https://www.youtube.com/embed/xYAtoebsXvs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <p>Las máquinas serán mejores que los humanos en una variedad de habilidades, incluidas algunas que requieren habilidades cognitivas.</p>
                        <p>Las tecnologías automáticas también producirán muchos menos errores, lo que permitirá a las empresas mejorar la productividad, la calidad y la velocidad. Emplear humanos se convertirá en una opción ilógica en algunas profesiones.</p>
                        <p>Ciertos sectores se verán más afectados que otros. Para el año 2030, la demanda de trabajadores de oficina, incluyendo a cualquier persona involucrada en tareas administrativas, debería caer en un 20%, predicen los investigadores. Hasta el 30% de las personas en trabajos que requieren "trabajo físico predecible", como en la construcción o en la industria alimentaria, por ejemplo.</p>
                </article>
            </div>
                            <div className="content-ia">
                    <article>
                        <h1>Proyectos que se están desarrollando actualmente.</h1>                        
                    </article>

                    <article>

                    <div><div><img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_400/https://www.re-inventa.es/wp-content/uploads/2017/07/imagen-post-4.jpg" alt=""/></div>
                        <p><b>Procesamiento de lenguaje natural: </b>Es el campo de conocimiento de la Inteligencia Artificial que se ocupa de la investigar la manera de comunicar las máquinas con las personas mediante el uso de lenguas naturales, como el español, el inglés o el chino. </p>
                        <p>Con esto buscan proteger la información y hacerla más confiable, ya que se benefician de la inmutabilidad que la tecnología ofrece.</p>
                    </div>

                    <div>
                    <div><img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2017/06/NLP-banner2.jpg" alt=""/></div>
                        <p><b>Análisis del sentimiento de los textos:</b> Las redes sociales han explotado en los últimos años. Todo el mundo quiere saber lo que se dice en Twitter o Facebook. Pero nuestra capacidad es muy limitada y se nos escapan infinidad de mensajes que nos interesan. </p>
                        <p>El sistema Watson de IBM se hizo famoso por ganar a los dos mejores competidores del concurso televisivo Jeopardy. Watson era más rápido y exacto a la hora de encontrar la relación entre preguntas y respuestas. Para ello, usa múltiples niveles de conocimiento y bases de datos donde se almacenan los contenidos.</p>
                    </div>
                    <div><div><img src="http://loogic.com/wp-content/uploads/2015/12/traduccion.jpg" alt=""/></div>
                        <p><b>Traducción Automática de textos (TA): </b>El sueño de un robot que traduce y habla un millón de formas de comunicación es muy anterior a la saga de La Guerra de las Galaxias. El multilingüismo es una barrera colosal para la globalización y la comunicación humana, no se resuelve con conocer dos o tres lenguas (tarea costosa para la mayoría de las personas).</p>
                        <p>Necesitamos traductores que nos acerquen los contenidos escritos en docenas de lenguas. Ante la falta de disponibilidad de traductores humanos para muchos pares de lenguas, la Traducción Automática nos proporciona un borrador del contenido de una página web o de un comentario sobre la habitación de un hotel.</p>
                    </div>
                    <div><div><img src="https://static1.laverdad.es/www/multimedia/201801/25/media/cortadas/chip-cerebro-kZe-U507872661334J-624x385@RC.jpg" alt=""/></div>
                        <p><b>Hardware optimizado con IA: </b> Los procesadores neuromórficos también conocidos como procesadores de redes neuronales artificiales simulan el funcionamiento de las neuronas y la sinapsis del cerebro. El hardware neuromórfico comprende dispositivos semiconductores conceptualmente inspirados en arquitecturas neurobiológicas. </p>
                        <p>Se caracterizan por elementos de procesamiento simples, pero una interconectividad muy alta. Unos de los procesadores o chips neuromórficos más conocidos en la actualidad es Loihi de la empresa Intel.</p>
                    </div>

                    <div>
                    <div><img src="https://img.blogs.es/anexom/wp-content/uploads/2018/09/Apps-de-reconocimiento-facial-1024x683.jpg" alt=""/></div>
                        <p><b>Reconocimiento facial y biométricas: </b> Apple se convirtió en pionera, al incorporar en su iPhone 5S el desbloqueo por huella dactilar, no tardaron mucho en seguirle otros fabricantes de móvil como Samsung. Con la presentación de su iPhone X ha vuelto a ir un paso por delante, instaurando en sus terminales el desbloqueo a través del reconocimiento facial (Face ID).</p>
                        <p> Lo presentaron como un auténtico logro, y como la opción más segura de desbloqueo, muy por encima de su anterior sistema de huella dactilar.  Un sistema capaz de reconocer nuestro rostro entre millones de personas diferentes.</p>
                    </div>
                    
                    </article>


                </div>
            <Knowthat>
                <h1>¿Sabías que un programa de IA le ganó al campeón mundial de Go?</h1>
                <p>En marzo de 2016 el programa de inteligencia artificial AlphaGo, desarrollado por Google Deepmind, ganó en su última y definitiva partida al campeón coreano del juego de mesa Go, Lee Sedol. La máquina completó su cuarta victoria frente a una única del humano, en lo que ha sido planteado como el gran reto de la inteligencia artificial, debido a la dificultad de ese juego, muy popular en Asia.</p>
                <p>Pero en enero de 2017 fue mucho más lejos: después de haberle ganado al campeón chino Ke Jie, obtuvo la victoria en más de 50 partidas anónimas frente a los mejores jugadores del mundo, identificado en el juego con el usuario “Master”.</p>
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
export default Iartificial;