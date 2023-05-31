import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Certificates() {
    return (
        <>

    <h6 className="subtitle"> Certificados </h6>
    <h2 style={{'margin-bottom': '50px', 'textAlign': 'center'}}> Solo Learn </h2>

    <div className="section-link">
        <h2> Perfil Profesional </h2>

            <a href="https://www.linkedin.com/in/bryaninit/" target="_blank">
            <h2 className="link">
            <svg width="30" height="46" className="link" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
            <path d="M8 11v5"></path>
            <path d="M8 8v.01"></path>
            <path d="M12 16v-5"></path>
            <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
            </svg>
            /LinkedIn </h2>
            </a>
    </div>


    <div className='certificates'>
    {/* START  */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Solo Learn" src="https://api2.sololearn.com/v2/certificates/CT-I572BGAV/image/jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Solo Learn" src="https://api2.sololearn.com/v2/certificates/CT-GHQSZIQD/image/jpg" width="500"/>
        </picture>
        </Zoom>
    </div>
    {/* SPACE */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Solo Learn" src="https://api2.sololearn.com/v2/certificates/CT-NXVGTBZX/image/jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Solo Learn" src="https://api2.sololearn.com/v2/certificates/CT-BXZMAORQ/image/jpg" width="500"/>
        </picture>
        </Zoom>
    </div>
    
    {/* SPACE */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Solo Learn" src="https://api2.sololearn.com/v2/certificates/CT-VOAJF5JQ/image/jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Solo Learn" src="https://www.sololearn.com/Certificate/1162-15192096/jpg" width="500"/>
        </picture>
        </Zoom>
    </div>
    
    <h2 style={{'margin': '50px', 'textAlign': 'center'}}> Microsoft Learn </h2>

    {/* SPACE */}
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Microsoft learn" src="https://raw.githubusercontent.com/Serphp/portf-serph/master/src/Cer/python.jpg" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="Microsoft learn" src="https://raw.githubusercontent.com/Serphp/portf-serph/master/src/Cer/web.jpg" width="500"/>
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

    <h2 style={{'margin': '50px', 'textAlign': 'center'}}> Udemy </h2>
    <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://udemy-certificate.s3.amazonaws.com/image/UC-a300cfe2-d0a8-4d62-84c8-cd982d079634.jpg?v=1670066678000" width="500"/>
        </picture>
        </Zoom>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://udemy-certificate.s3.amazonaws.com/image/UC-8f81babb-4dd5-4964-bd1f-02971468ae2f.jpg?v=1672188528000" width="500"/>
        </picture>
        </Zoom>
        </div>
        <div className='Ccontainer'>
        <Zoom>
        <picture>
        <img className='imgcer' alt="openwebin ars" src="https://udemy-certificate.s3.amazonaws.com/image/UC-2a337a0a-2846-4727-a0ad-c83cc43ebc39.jpg?v=1676077459000" width="500"/>
        </picture>
        </Zoom>

        </div>
        

    {/* END */}
        </div>
        </>)
}
