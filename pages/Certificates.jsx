import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Certificates() {
    return (
        <>
    <h1> Certificados </h1>

    <div className='certificates'>
    <section className='Ccontainer'>
    <Zoom>
    <picture>
    <img className='imgcer' alt="openwebin ars" src="./src/Cer/certificado.jpg" width="500"/>
    </picture>
    </Zoom>
    </section>
        <hr/>
    <section className='Ccontainer'>
    <Zoom>
    <picture>
    <img className='imgcer' alt="openwebin ars" src="./src/Cer/certificado.jpg" width="500"/>
    </picture>
    </Zoom>
    </section>
    </div>

        </>)
}
