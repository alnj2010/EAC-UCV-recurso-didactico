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

            <Presentation title="Lorem Ipsum">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis repellendus ab excepturi amet, vero autem. Sed facilis aliquam ab quaerat maxime ea iste voluptatum inventore, omnis, alias magni? Sit?
            </Presentation>

            <div className="content-block-chain">
                <article>
                    <h1> Lorem ipsum </h1>
                    <p>
                        <div> <img src="" alt=""/></div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, expedita itaque! Rem, animi harum consequatur
                        facilis nihil, modi facere, adipisci nam asperiores nisi illo atque! Officiis modi temporibus deserunt voluptatem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, expedita itaque! Rem, 
                        animi harum consequatur facilis nihil, modi facere, adipisci nam asperiores nisi 
                        illo atque! Officiis modi temporibus deserunt voluptatem.Lorem ipsum, dolor sit
                         amet consectetur adipisicing elit. Quam, expedita itaque! Rem, animi harum 
                         consequatur facilis nihil, modi facere, adipisci nam asperiores nisi illo atque! 
                        Officiis modi temporibus deserunt voluptatem.Lorem ipsum, dolor sit amet 
                        consectetur adipisicing elit. Quam, expedita itaque! Rem, animi harum consequatur 
                        facilis nihil, modi facere, adipisci nam asperiores nisi illo atque! Officiis
                        modi temporibus deserunt voluptatem.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Quam, expedita itaque! Rem, animi harum consequatur facilis
                        nihil, modi facere, adipisci nam asperiores nisi illo atque! Officiis modi 
                        temporibus deserunt voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, 
                        expedita itaque! Rem, animi harum consequatur facilis nihil, modi facere, adipisci 
                        nam asperiores nisi illo atque! Officiis modi temporibus deserunt voluptatem.Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Quam, expedita itaque! Rem, animi harum consequatur facilis nihil, modi facere, adipisci nam 
                        asperiores nisi illo atque! Officiis modi temporibus deserunt voluptatem.
                    </p>
                </article>
                <article className="articleVideo">
                    <h1>Lorem ipsum</h1>
                    <div className="video"><iframe width="854" height="510" src="https://www.youtube.com/embed/Bo8815AeU7E" title="blockchain video" frameborder="0"></iframe></div>
                    
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
export default Blockchain;