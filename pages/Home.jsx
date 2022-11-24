import Mensaje from "../components/Mensaje"

export default function Home() {
    return (
        <>
        <div>
        {/* <h1>Home</h1> */}
        <Mensaje />

        <div className="row mt-4">
        <div className="col-md-5">
        <div className="card">
        <div class="card-header">Skills</div>
        <hr />
        <div className="card-body">
        <div className="card-text">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Node</p>
        <p>Express</p>
        <p>MySQL</p>
        <p>MongoDB</p>
        <p>Git</p>
        <p>GitHub</p>
        <p>Bootstrap</p>
        <p>Material UI</p>
        <p>React Bootstrap</p>
        <p>React Router</p>
        <p>React Hooks</p>
        <p>React Context</p>
        <p>React Redux</p>
        <p>React Native</p>
        <p>Next.js</p>
        <p>GraphQL</p>
        <p>REST API</p>
        <p>JSON</p>
        <p>JWT</p>
        <p>OAuth</p>
        <p>Socket.io</p>
        <p>Heroku</p>
        <p>Netlify</p>
        <p>VS Code</p>
        <p>Postman</p>
        <p>Adobe XD</p>
        </div>
        </div>
        </div>        
        </div>
        <div className="col-md-7">
        <div className="card">
        <h2 class="mb-1">Experiences</h2>
        <hr/>
        <p>Descripcion</p>
        
        </div>
        </div>
        </div>
        </div>
        </>
    )
  }
