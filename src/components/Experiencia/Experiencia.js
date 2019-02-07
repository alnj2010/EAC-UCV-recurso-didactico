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
            <p>Las tecnologías inmersivas son el caso general de las realidades aumentada, virtual y mixta (RA, RV y RM, respectivamente) y engloban a otras como la interactividad háptica, las representaciones holográficas, la realidad disminuida o la teleinmersión. En todos los casos, se trata de reforzar una experiencia digital con elementos adicionales, generalmente sensoriales, para que nos sintamos inmersos en dicha experiencia.</p>
                        <p>Con este tipo de realidad, tendremos la sensación de estar “inmersos” en una escena u otra realidad. Se crean escenas que se podrán disfrutar en 360 º, en otros casos más avanzados podremos movernos y seguir viendo las diferentes imágenes. Se pueden sumar elementos hápticos que buscan reproducir el tacto, así por ejemplo podríamos tocar un piano virtual y sentir la sensación al tacto de tocar la teclas.</p>
            </Presentation>
            <div className="content-block-chain">
                <article>
                    <h1>Un poco de Historia.</h1>
                    <p>
                        <div> <img src="" alt=""/></div>
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
                <article>
                    <h1>Lorem ipsum</h1>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HxFajoeaF6w" ftitle="Experiencia video"rameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis excepturi, deleniti exercitationem sit minima eos, ut placeat, et ullam saepe explicabo magnam dolores. Nulla eos dolorum sed iusto enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis excepturi, deleniti exercitationem sit minima eos, ut placeat, et ullam saepe explicabo magnam dolores. Nulla eos dolorum sed iusto enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                </article>

                <div className="content-ia">
                    <article>
                        <h1>Lorem ipsum</h1>
                    
                            <div></div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem ipsam sit quaerat maiores ratione quisquam numquam animi libero neque optio deleniti, eum qui totam velit reiciendis dolorem recusandae minima. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque, pariatur numquam accusamus ullam ratione rerum facilis fugiat consequuntur facere veniam blanditiis expedita ad mollitia suscipit, quas dolore earum natus!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit a cupiditate minus, ipsa voluptatum mollitia nemo ea et recusandae ullam quia quidem culpa sunt voluptatem voluptatibus aliquam facere laudantium beatae!
                        
                    </article>
                    <article>
                        <div><div></div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto itaque beatae in illum eaque fugiat nemo totam impedit eum excepturi assumenda molestias officiis dolore placeat dolorem suscipit nostrum, obcaecati nulla?</p></div>
                        <div><div></div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto itaque beatae in illum eaque fugiat nemo totam impedit eum excepturi assumenda molestias officiis dolore placeat dolorem suscipit nostrum, obcaecati nulla?</p></div>
                        <div><div></div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto itaque beatae in illum eaque fugiat nemo totam impedit eum excepturi assumenda molestias officiis dolore placeat dolorem suscipit nostrum, obcaecati nulla?</p></div>
                    </article>
                </div>
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
export default Experiencia;