import skills from '../serph/server';


export default function Experiences() {

    console.log(Object.keys(skills))
    return (
        <>
        <section className="row">
            <div className="col-md-5">
            <div className="box-part text-center">

            <h6 className="subtitle"> Practicas </h6>
            <h5>  Practices  </h5>
                    <div className="practices">          
                    {
                        skills.practices.map((item, index) => (
                            <li key={index} className="subpractices"><i></i> {item}</li>
                        ))
                    }
                    </div>
                </div>
            </div>

            <div className="col-md-7">

            <h6 className="subtitle"> Tecnologías </h6>
            <h5> Technology </h5>

            {Object.keys(skills).slice(1, 8).map((category, index) => (
            <article className="boxitemrow" key={index}>
                <div className="boxitem">{skills[category].title}</div>
                <div className="contsecond">
                    {skills[category].items ? (
                        skills[category].items.map((item, itemIndex) => (
                            <li className="boxsecond" key={itemIndex}>
                                <h4>{typeof item === 'object' ? item.language : item}</h4>
                            </li>
                        ))
                    ) : null}
                </div>
            </article>
            ))}
            </div>
        </section>
        </>
    )
};


