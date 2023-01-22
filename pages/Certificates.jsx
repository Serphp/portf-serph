import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Certificates() {
    return (
        <>
    <h1> Certificados </h1>
        <hr/>

    <h2 style={{'margin': '50px', 'textAlign': 'center'}}> Solo Learn </h2>

    <div className='certificates'>
    {/* START  */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://api2.sololearn.com/v2/certificates/CT-I572BGAV/image/jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://api2.sololearn.com/v2/certificates/CT-GHQSZIQD/image/jpg" width="500"/>
        </picture>
        </Zoom>
    </div>
    {/* SPACE */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://api2.sololearn.com/v2/certificates/CT-NXVGTBZX/image/jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://api2.sololearn.com/v2/certificates/CT-BXZMAORQ/image/jpg" width="500"/>
        </picture>
        </Zoom>
    </div>
    {/* SPACE */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://api2.sololearn.com/v2/certificates/CT-VOAJF5JQ/image/jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://www.sololearn.com/Certificate/1162-15192096/jpg" width="500"/>
        </picture>
        </Zoom>
    </div>
    <h2 style={{'margin': '50px', 'textAlign': 'center'}}> Microsoft Learn </h2>

        {/* SPACE */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="./src/Cer/python.jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="./src/Cer/web.jpg" width="500"/>
        </picture>
        </Zoom>
    </div>

    <h2 style={{'margin': '50px', 'textAlign': 'center'}}> OpenWebinars </h2>

    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://raw.githubusercontent.com/Serphp/portf-serph/master/src/Cer/certificado.jpg" width="500"/>
        </picture>
        </Zoom>
    </div>

    {/* END */}
    </div>


    

        </>)
}
