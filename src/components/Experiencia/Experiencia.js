//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/experiencia/banner-experiencia.jpg'

//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Experiencia(){
  
    return (
        <div className="experiencia">
            <Banner title="Experiencias Inmersivas" image={bannerImg}/>

            <Presentation title="¿Qué es una experiencia inmersiva? ">
            <p>Las experiencias inmersivas son el caso general de las realidades aumentada, virtual y mixta (RA, RV y RM, respectivamente) y engloban a otras como la interactividad háptica, las representaciones holográficas, la realidad disminuida o la teleinmersión. En todos los casos, se trata de reforzar una experiencia digital con elementos adicionales, generalmente sensoriales, para que nos sintamos inmersos en dicha experiencia.</p>
                        <p>Con este tipo de realidad, tendremos la sensación de estar “inmersos” en una escena u otra realidad. Se crean escenas que se podrán disfrutar en 360º, en otros casos más avanzados podremos movernos y seguir viendo las diferentes imágenes. Se pueden sumar elementos hápticos que buscan reproducir el tacto, así por ejemplo podríamos tocar un piano virtual y sentir la sensación al tacto de tocar las teclas.</p>
            </Presentation>
            <div className="content-block-chain">
                <article>
                    <h1>Un poco de Historia.</h1>
                    <p>
                        <div> <img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Como se considera a la realidad virtual la primera experiencia inmersiva con medios tecnológicos pues en principio hablaremos de la su historia:</p>
                        <p>El origen de la realidad virtual se remonta a la Segunda Guerra Mundial. La Marina de Guerra de Estados Unidos contacta con el MIT (Massachusetts Institute of Technology) para la posible creación de un simulador de vuelo apto para el entrenamiento de pilotos de bombarderos. El proyecto fue denominado Whirlwind y su construcción finalizó algunos años más tarde en 1951. No fue hasta 8 años después cuando USAF (United States Air Force) retomó el proyecto bajo el nombre de “Claude Project” y apareció un uso civil de la tecnología 3D.</p>
                        <p>En 1978, un equipo del MIT liderado por Andrew Lippman realizó el Aspen Movie Map, un programa que permitía al usuario recorrer las calles de la ciudad de Aspen, mediante filmaciones reales del lugar, e interactuar con ciertos edificios, permitiendo ver su interior y datos históricos.</p>
                        <p>En 1984, la sede de Baltimore de la cadena de parques de diversiones Six Flags estrenó The Sensorium, una sala de cine 4D que combinaba una película con proyección estereoscópica, asientos que vibraban y efectos aromáticos.</p>
                        <p>En 1991, Sega anunció el lanzamiento del Sega VR, un casco de realidad virtual con pantalla LCD y auriculares estéreo para máquinas arcade y consolas de videojuegos. El aparato se presentó al público en 1993, y se anunció que costaría 200 dólares, pero nunca se comercializó.</p>
                        <p>En 1994 lanzó el Sega VR-1, un simulador de movimiento que incorporaba un casco con gráficos tridimensionales poligonales y seguimiento de movimientos de la cabeza.</p>
                        <p>En 2012, Palmer Luckey presentó el primer prototipo del casco de realidad virtual Oculus Rift3, la versión para clientes se comenzó a comercializar en 2015. En 2016, Sony lanzó el PlayStation VR, mientras que HTC y Valve lanzaron el HTC Vive.</p>
                        
                        <p></p>
                    </p>
                </article>
                <article>
                    <h1>¿Cómo son las experiencias inmersivas?</h1>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HxFajoeaF6w" title="Experiencia video"rameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                    <p> Estas inmersiones mejoran las experiencias, haciendo que estas sean más realistas y presentando a la marca de una manera mucho más atractiva e interesante. 
                        </p>

                </article>
            </div>
                        <div className="content-ia">
                  <article>
                    <h1>¿Quiénes están usando las experiencias inmersivas?</h1>
                  
                        <div></div>
                        <p>En el sector turístico/hotelero ya existen iniciativas, como la experiencia inmersiva de telefónica, Nokia y Samsung llamada “Tapas en…” que consiste de una experiencia inmersiva donde el usuario se traslada virtualmente a distintos escenarios mientras disfruta en vivo de distintas tapas gastronómicas asociadas a los mismos.
                        </p>
                        <p>Se trata de un proyecto basado en la realidad distribuida, concepto desarrollado por Nokia Bell Labs, donde se combina la realidad local del usuario (en este caso sus propias manos y la tapa) con un entorno capturado remotamente y relacionado con la comida que se está degustando gracias a las gafas de realidad virtual. </p>
                        <p>En el mundo del entretenimiento pareciera el sector que mas busca aplicar y desarrollar estas tecnologías, sobretodo en el nicho de mercado de los videojuegos, siendo los ejemplos más notorios los dispositivos VR Oculus Rift, PlayStation VR y HTC Vive.</p>
                        <div> <img src="http://www.cataloniacaribbean.com/wp-content/uploads/2017/07/cataloniahotels-passeigdegracia1.jpg" alt=""/></div>
                    
                </article>
            </div>
            <Knowthat>
                <h1>¿Sabías que la realidad virtual y aumentada entra en juego en la educación?</h1>
                <p>Manipular modelos 3D virtuales, navegar e interactuar en entornos simulados o construir mundos virtuales son opciones al alcance de la mano gracias a estas tecnologías. Es posible, de esta manera, aprender creando. </p>
                <p>El alumno pasa de ser receptor pasivo a protagonista, adopta un papel activo con experiencias en primera persona. Se proporcionan ambientes de aprendizaje más eficientes, reduciéndose la curva de aprendizaje y mejorando la comprensión</p>
                <p>A la vez, se aumenta la motivación gracias a la riqueza sensorial que se aporta, algo especialmente atractivo para las nuevas generaciones. El uso de herramientas de RA y RV permite que los estudiantes se conviertan en creadores de su propio contenido virtual y que aprendan creando, en lugar de ser meros consumidores de contenidos.</p>
            </Knowthat>
            <Others>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur delectus voluptate necessitatibus, at velit explicabo aut! Tempore, consectetur tenetur. Doloremque vero tempora, eum at numquam eligendi. Voluptate, soluta tempore.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae laboriosam porro nisi enim adipisci odit excepturi quis necessitatibus facilis unde atque reprehenderit, natus illum doloribus, modi impedit vitae beatae.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor impedit aut! Doloribus officiis voluptatum accusamus sunt, asperiores modi! Cupiditate fugit magni deserunt inventore. Laborum aliquam pariatur reprehenderit voluptate autem.</Other>
            </Others>
        </div>
    );
}
export default Experiencia;