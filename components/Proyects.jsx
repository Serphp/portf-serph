import { NProyects } from "../serph/NProyects"
import '../src/styles/Proyect.scss'

{/*
        <div className="containery mt-4">
            <div className="card3">
                <div className="">
                    <div className="row">

            {
                NProyects.map(({name, description, image, url, url2},i) => ( 
                    <div className="cardbody2" key={i}>
                        <div className="cardre">
                        <img className="image" src={image} alt="" />
                            <div className="cardinfo">
                            <h2> {name} </h2>
                            <hr/>
                            <div> {description} </div>
                            <br/>
                            <a href={url} className="ae"> Preview </a>
                            <a href={url2} className="ae"> Github </a>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            </div>
            </div>
            </div>
*/}
export default function Proyects() {
    return (
        <>
        <div class="section-container">
        {/* SEPARACION */}
        <div class="section">
        <div class="image-container">
        <img src="./src/img/black-line.png" alt="image 1" />
        </div>
        <div class="text-container">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, purus at varius dignissim, quam urna fermentum mauris, et pretium urna arcu id ligula. Donec hendrerit, neque a placerat viverra, mauris felis ullamcorper urna, quis suscipit risus urna auctor quam.</p>
        <a href="#" class="button">Learn More</a>
        </div>
        </div>
        {/* SEPARACION */}
        </div>
        </>
    )
};

