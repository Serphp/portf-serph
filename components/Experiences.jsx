//import { fronted } from "../serph/fronted"
//import { backend } from "../serph/backend"
import { slider } from "../serph/slider"

export default function Experiences() {

    slider();

    return (
        <>
        {/* ////////////////////////////  EXPERIENCES  //////////////////////////// */}

        <h6 className="subtitle">Web developer</h6>
        <h5> Tecnologías </h5>

            <section className="box">

                <div className="boxitem">
                <i class="iconbox">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m7 8-4 4 4 4"></path>
                <path d="m17 8 4 4-4 4"></path>
                <path d="m14 4-4 16"></path>
                </svg>
                </i>
                <h6 className="boxtitle"> LANGUAGES </h6>
                <p className="boxcontent"> 

                    C,
                    JavaScript,
                    TypeScript,
                    Python,
                    PHP.

                </p>
                </div>


                <article className="boxitemrow">


                <div className="boxitem">
                <div className="boxcolunm">

                <i class="iconbox">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 6v4.5c-1.478 0-2.805.64-3.72 1.66a4.981 4.981 0 0 0-1.208 4.19 5.005 5.005 0 0 0 2.465 3.502c-1.331.403-3.098.648-5.037.648C5.358 20.5 2 19.38 2 18V6"></path>
                <path d="M17 6c0 1.38-3.358 2.5-7.5 2.5C5.358 8.5 2 7.38 2 6s3.358-2.5 7.5-2.5C13.642 3.5 17 4.62 17 6Z"></path>
                <path d="M2 14c0 1.38 3.358 2.5 7.5 2.5.903 0 1.77-.053 2.572-.15"></path>
                <path d="M2 10c0 1.38 3.358 2.5 7.5 2.5 1.378 0 2.67-.124 3.78-.34"></path>
                <path d="M22 15.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>
                <path d="m18.5 14.5 1 1-1 1"></path>
                <path d="m15.5 16.5-1-1 1-1"></path>
                </svg>
                </i>
                    

                <h6 className="boxtitle">Backend</h6>

                <p className="boxcontent"> 
                MySQL, 
                MongoDB,
                MariaDB,
                PostgreSQL,
                Laravel,
                Django.

                 </p>
                 </div>
                </div>




                <div className="boxitem">
                <div className="boxcolunm">
                <i class="iconbox">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"></path>
                <path d="M3 8h18"></path>
                <path d="M3 6.5v3"></path>
                <path d="M21 6.5v3"></path>
                <path d="M8.5 15H21"></path>
                <path d="M8.5 8v13"></path>
                <path d="M7 21h3"></path>
                <path d="M21 13.5v3"></path>
                </svg>
                </i>
                
                <h6 className="boxtitle"> Fronted </h6>
                
                <p className="boxcontent"> 
                CSS3,
                SASS,
                ReactJS
                NextJS,
                Redux,
                Boostrap 4+,
                Tailwind,
                Figma,
                Adobe XD,
                </p>
                </div>
                </div>

                </article>

            </section>

        </>
    )
};


