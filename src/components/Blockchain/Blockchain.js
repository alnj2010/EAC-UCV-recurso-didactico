//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/blockchain/banner-blockchain1.jpg'

//Components
import Banner from '../Banner/Banner'
import Presentation from '../Presentation/Presentation'
import Knowthat from '../Knowthat/Knowthat'
import Other from '../Others/Other/Other'
import Others from '../Others/Others'

function Blockchain(){
  
    return (
        <div className="blockchain">
            <Banner title="Blockchain" image={bannerImg}/>

            <Presentation title="¿Qué es el BlockChain?">
                <p>Una cadena de bloques <i>(Blockchain)</i>, también conocida como libro de contabilidad distribuido <i>(distributed ledger)</i>, es una base de datos distribuida que registra bloques de información y los entrelaza para facilitar la recuperación de la información y la verificación de que ésta no ha sido cambiada. Los bloques de información se enlazan mediante apuntadores <i>hash</i> que conectan el bloque actual con el anterior y así sucesivamente hasta llegar al bloque génesis.</p>
                <p>La cadena de bloques es almacenada por todos aquellos nodos de la red que se mantienen en sincronía con ésta. Cada bloque perteneciente a la cadena de bloques contiene información referente a las transacciones relativas a un periodo (agrupadas en una estructura denominada <i>Merkle Tree</i>), la dirección criptográfica (apuntador <i>hash</i>) del bloque anterior y un número arbitrario único <i>(nonce)</i>.</p>
                <p>La información contenida en cada bloque es registrada en forma de <i>hash</i> criptográfico, lo que permite su fácil verificación, pero hace inviable recrear la data de entrada. <i>Bitcoin</i> usa la función hash criptográfica SHA-256 lo que implica que sus apuntadores <i>hash</i> son de un tamaño fijo de 256 bit.</p>
            </Presentation>

            <div className="content-block-chain">
                <article>
                    <h1>Un poco de historia.</h1>
                    <p>
                        <div> <img src="http://www.seminarioipch.cl/images/estudiante.png" alt=""/></div>
                        <p>Para entender el fenómeno de blockchain tenemos que retroceder… mucho en la historia. Concretamente, hasta el año 3200 antes de Cristo, primera vez que se tiene constancia de la existencia de registros contables de una única entrada. Serían los antecesores de las bases de datos actuales y el comienzo del registro de información de forma sistemática.</p>
                        <p>Posteriormente, en 1494 se creó el primer sistema de contabilidad de doble entrada, codificado en un libro de matemáticas publicado en Venecia. De ahí pocos avances hubo hasta 1991, cuando el fuerte emerger de Internet (basado en un modelo distribuido, como el blockchain) abrió las puertas a las primeras tecnologías de cadena de bloques digitales.</p>
                        <p>En 1997, hace ahora 21 años, Adam Back inventó Hashcash, un sistema monetario alternativo que usaba lo que hoy podríamos considerar una primera prueba de concepto del sistema que luego popularizó el bitcoin.</p>
                        <p>Un año más tarde, en 1998, aparecerían los sistemas B-Money y Bit Gold de Wei Dai y Nick Szabo, respectivamente. Aquí ya se introducía definitivamente la noción de capacidades digitales distribuidas para la gestión de criptomonedas.</p>
                        <p>En el 2008 se publica el primer paperwhite sobre Bitcoin, a manos del misterioso Satoshi, que daría las claves técnicas y de fundamentos económicos para la creación de una nueva criptomoneda. El bloque original es minado por el propio Satoshi, empezando así el blockchain de bitcoin tal y como lo conocemos.</p>
                        <p>El 22 de mayo de 2010 se produjo la primera transacción real con un bitcoin (el pago de dos pizzas a cambio de 10.000 bitcoins a cargo del programador Laszlo Hanyecz), la burbuja exponencial del precio de la moneda hasta el reciente batacazo generalizado o la aparición de otras divisas digitales alternativas, como Ethereum.</p>
                        <p>Desde entonces son muchas las empresas del sector financiero y bancario que han llevado a cabo pruebas relacionados con el blockchain, con mayor o menor madurez y éxito. A escala global, cabe citar el proyecto Hyperledger, comandado por la Fundación Linux y puesto en marcha en diciembre de 2015, el cual es la mayor comunidad open-source ligada al blockchain del mundo.</p>
                    </p>
                </article>
                <article className="articleVideo">
                    <h1>Más sobre el blockchain en tan solo 5 minutos.</h1>
                    <div className="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/Yn8WGaO__ak" title="blockchain" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <p>Al ser una tecnología distribuida, donde cada nodo de la red almacena una copia exacta de la cadena, se garantiza la disponibilidad de la información en todo momento. En caso de que un atacante quisiera provocar una denegación de servicio, debería anular todos los nodos de la red, ya que basta con que al menos uno esté operativo para que la información esté disponible.</p>
                        <p>Por otro lado, al ser un registro consensuado, donde todos los nodos contienen la misma información, resulta casi imposible alterar la misma, asegurando su integridad. Si un atacante quisiera modificar la información en la cadena de bloques, debería modificar la cadena completa en al menos el 51% de los nodos.
                        </p>
                </article>
            </div>
                            <div className="content-ia">
                    <article>
                        <h1>Ejemplos de sectores donde aplican esta tecnología y cómo se está utilizando</h1>
                    
                            <div></div>
                            <p>Básicamente, cualquier tipo de información que necesite ser preservada de forma intacta y que deba permanecer disponible puede ser almacenada en blockchain de manera segura, descentralizada y más económica que a través de intermediarios. Además, si esa información se guarda cifrada se puede garantizar su confidencialidad, ya que solo quien cuente con la llave de cifrado pueda acceder a ella.</p>
                            <p>Siendo esta una tecnología joven, seguramente aún no se han descubierto o desarrollado lo suficiente todas sus posibles aplicaciones. Sin embargo, hay muchas ideas que tratan de explotar las bondades de una tecnología que tiene un alcance virtualmente ilimitado. Veamos algunos ejemplos: </p>
                        
                    </article>
                    <article>
                        <div>
                    <div><img src="https://luisperis.com/wp-content/uploads/2017/11/microsoft-azure.jpg" alt=""/></div>
                        <p><b>Empresas:</b> Ahora mismo los clientes de Microsoft Azure Enterprise pueden acceder al blockchain de Ethereum como servicio. Esta es una gran noticia ya que los negocios tienen ante sí los contratos inteligentes y las aplicaciones de blockchain en un ambiente seguro.</p>
                        <p>También existen reportes que indican que Google está trabajando en un blockchain propietario que ofrezca soporte a servicios de la nube. Alphabet, como se llama compañía matriz, se encuentra desarrollando un libro mayor, en donde se podrá almacenar información. Un servicio en la nube que está destinado para las empresas y que utiliza blockchain.</p>
                    </div>
                    <div><div><img src="https://cdn.coincrispy.com/wp-content/uploads/2018/04/dubai-mercado-electronico-blockchain-turismo-696x395.jpg" alt=""/></div>
                        <p><b>Turismo:</b> En el estado de Queensland, Australia, se están llevando a cabo pruebas para mejorar el turismo en la zona. Permitiendo pagar por productos locales y servicios con criptomonedas como Bitcoin.</p>
                        <p>Este proyecto es llevado a cabo por unos startups, pero es financiado por el gobierno australiano que ha creado un nuevo programa de incentivos a empresas nuevas que presenten ideas que ayuden a las economías locales. El turismo es una de ellas, pero también trabajan para mejorar otros aspectos.</p>
                    </div>
                    <div><div><img src="https://docplayer.net/docs-images/60/44398776/images/127-0.png" alt=""/></div>
                        <p><b>Trenes:</b> En Rusia, el operador de trenes Novotrans busca utilizar la tecnología de cadena de bloques con el objetivo de mejorar la velocidad y eficiencia de sus operaciones. La compañía, que es una de las empresas de trenes más importante del país, utilizara esta gran base de datos descentralizada para registrar información sobre los pedidos de reparación, inventario y otras actividades relacionadas con las operaciones.</p>
                        <p>Con esto buscan proteger la información y hacerla más confiable, ya que se benefician de la inmutabilidad que la tecnología ofrece.</p>
                    </div>
                    </article>
                </div>
            <Knowthat>
                <h1>¿Sabías que existe la Fundación Blockchain Colombia?</h1>
                <p>La fundación Blockchain Colombia nace con el objetivo de fomentar la generación del ecosistema descentralizado del país latinoamericano, partiendo desde la educación y la intermediación, para las buenas decisiones del gobierno nacional con respecto al uso de la tecnología blockchain</p>
                <p>Con la creación de la Fundación Blockchain Colombia, el futuro de esta tecnología en el país se ve más latente, siendo esta  una oportunidad para muchos empresarios y emprendedores que quieran globalizar sus iniciativas o traer nuevas apuestas al mercado.</p>
            </Knowthat>
            <Others>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur delectus voluptate necessitatibus, at velit explicabo aut! Tempore, consectetur tenetur. Doloremque vero tempora, eum at numquam eligendi. Voluptate, soluta tempore.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae laboriosam porro nisi enim adipisci odit excepturi quis necessitatibus facilis unde atque reprehenderit, natus illum doloribus, modi impedit vitae beatae.</Other>
                <Other>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor impedit aut! Doloribus officiis voluptatum accusamus sunt, asperiores modi! Cupiditate fugit magni deserunt inventore. Laborum aliquam pariatur reprehenderit voluptate autem.</Other>
            </Others>
        </div>
    );
}
export default Blockchain;