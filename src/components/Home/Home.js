//Dependencias
import React from 'react'
//Assets
import bannerImg from '../global/images/blogging-business-coding-34140.jpg'
import blockchainImg from '../global/images/blockchain.jpg'
import autonomoImg from '../global/images/disp-autonomo.jpg'
import analiticaImg from '../global/images/analitica.jpg'
import iaImg from '../global/images/desarrollo-ia.jpeg'
import gemelosImg from '../global/images/gemelos-digitales.jpg'

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
            <Banner title="lorem ipsum massa tincidut" image={bannerImg}/>

            <Presentation title="Lorem Ipsum">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis repellendus ab excepturi amet, vero autem. Sed facilis aliquam ab quaerat maxime ea iste voluptatum inventore, omnis, alias magni? Sit?
            </Presentation>

            <Topics>
                <Topic image={blockchainImg} title="Blockchain" enlace="/blockchain/"/>
                <Topic image={autonomoImg} title="Dispositivos autónomo" enlace="/dispositivos-autonomos/"/>
                <Topic image={analiticaImg} title="Analítica aumentada" enlace="/analitica-aumentada/"/>
                <Topic image={iaImg} title="Desarrollos impulsados por la IA" enlace="/inteligencia-artificial/"/>
                <Topic image={gemelosImg} title="Gemelos digitales" enlace="/gemelos-digitales/"/>
                <Topic image={"cuanticaImg"} title="Computación cuántica" enlace="computacion-cuantica"/>
            </Topics>

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
export default Home;