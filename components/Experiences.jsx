import { fronted } from "../serph/fronted"
import { backend } from "../serph/backend"
import { Mobile } from "../serph/Mobile"
import { cloud } from "../serph/cloud"
import { serverless } from "../serph/serverless"
//import { php } from "../serph/conint"

//import { slider } from "../serph/slider"

export default function Experiences() {

    

    return (
        <>
        {/* ////////////////////////////  EXPERIENCES  //////////////////////////// */}

        {/* <h6 className="subtitle">Web developer</h6>
        <h5> Tecnologías </h5> */}

<section className="">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="box-part text-center">

                <h6 className="subtitle">Web developer</h6>
                <h5> Quality Practices </h5>

                    <div className="practices">
                        <ul className="">
                            <li className="subpractices"><i></i>Consistencia en el estilo de código </li> 
                            <li className="subpractices"><i></i> Comentarios y documentación </li>
                            <li className="subpractices"><i></i> Pruebas unitarias y de integración </li>
                            <li className="subpractices"><i></i> Optimización de recursos </li>
                            <li className="subpractices"><i></i> Control de versiones </li>
                            <li className="subpractices"><i></i> Metodologías ágiles </li>
                            <li className="subpractices"><i></i> Mantenimiento proactivos </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="col-md-7">

                <h6 className="subtitle">Web developer</h6>
                <h5> Tecnologías </h5>

                <article className="boxitemrow">
                    <div className="boxitem">
                        JavaScript
                    </div>
                    <div className="contsecond">
                        {
                            fronted.map(({language, percentage}, i) => (
                                <article className="boxsecond" key={i}>
                                    <h4 style={{ marginTop: '-1px'}}> {language}</h4>
                                    {/* <div className="progresbar">
                                    <div className="pprogress" style={{ width: `${percentage}%` }}>
                {percentage !== 0 ? null : <h4>none</h4>}</div>
                                    </div> */}
                                </article>
                            ))
                        } 
                    </div>
                </article>

                <article className="boxitemrow">
                    <div className="boxitem">
                        Python
                    </div>
                    <div className="contsecond">
                        <li className="boxsecond">
                            <h4 style={{ marginTop: '-1px'}}> Django </h4>
                        </li>
                    </div>
                </article>

                <article className="boxitemrow">
                    <div className="boxitem">
                        PHP
                    </div>
                    <div className="contsecond">
                        <li className="boxsecond">
                            <h4 style={{ marginTop: '-1px'}}> Composer </h4>
                        </li>
                        <li className="boxsecond">
                            <h4 style={{ marginTop: '-1px'}}> Laravel </h4>
                        </li>
                        <li className="boxsecond">
                            <h4 style={{ marginTop: '-1px'}}> Wordpress </h4>
                        </li>

                    </div>
                </article>

                <article className="boxitemrow">
                    <div className="boxitem">
                        Backend
                    </div>
                    <div className="contsecond">
                        {
                            backend.map(({language, percentage}, index) => (
                                <li className="boxsecond" key={index}>
                                    <h4 style={{ marginTop: '-1px'}}> {language}</h4>
                                    {/* <div className="progresbar">
                                    <div className="pprogress" style={{ width: `${percentage}%`}}></div>
                                    </div> */}
                                </li>
                            ))
                        }
                    </div>
                </article>

                <article className="boxitemrow">
                    <div className="boxitem">
                        Cloud
                    </div>
                    <div className="contsecond">
                        {
                            cloud.map(({language, percentage}, index) => (
                                <li className="boxsecond" key={index}>
                                    <h4 style={{ marginTop: '-1px'}}> {language}</h4>
                                    {/* <div className="progresbar">
                                    <div className="pprogress" style={{ width: `${percentage}%`}}></div>
                                    </div> */}
                                </li>
                            ))
                        }
                    </div>
                </article>

                <article className="boxitemrow">
                    <div className="boxitem">
                    Serverless
                    </div>
                    <div className="contsecond">
                        {
                            serverless.map(({language, percentage}, index) => (
                                <li className="boxsecond" key={index}>
                                    <h4 style={{ marginTop: '-1px'}}> {language}</h4>
                                    {/* <div className="progresbar">
                                    <div className="pprogress" style={{ width: `${percentage}%`}}></div>
                                    </div> */}
                                </li>
                            ))
                        }
                    </div>
                </article>

                <article className="boxitemrow">
                    <div className="boxitem">
                    Mobile
                    </div>
                    <div className="contsecond">
                        {
                            Mobile.map(({language, percentage}, index) => (
                                <li className="boxsecond" key={index}>
                                    <h4 style={{ marginTop: '-1px'}}> {language}</h4>
                                    {/* <div className="progresbar">
                                    <div className="pprogress" style={{ width: `${percentage}%`}}></div>
                                    </div> */}
                                </li>
                            ))
                        }
                    </div>
                </article>

            </div>
        </div>
    </div>
    
</section>

        </>
    )
};


