import { NProyects } from "../serph/NProyects"

export default function Proyects() {
    return (
        <>
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
        </>
    )
};
