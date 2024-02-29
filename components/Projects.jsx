
  import { GraphQLClient, gql, request } from "graphql-request";
  import {  } from 'graphql-request';
  import React, { useEffect, useState } from "react";
  //import '../src/styles/Proyect.scss';

  const hygraph = new GraphQLClient(`https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clszf2ktf0f8008vw55b6z0ug/master`);


  export default function App() {
  const [proyectos, setprojects] = useState([]);

  const [endCursor, setEndCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  const query = gql`
  query Projects($first: Int, $after: String) {
    projects(first: $first, after: $after) {
      createdAt
      id
      slug
      name
      updatedAt
      lang
      categoria
      duration
      description
      url
      url2
      image {
        url
      }
    }
  }
  `;

  //First Method
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       //const { projects } = await hygraph.request(query);
  //       const { projects } = await hygraph.request(queryPage);
  //       setprojects(projects);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //     }
  //   };

  //   fetchProjects();
  // }, [query]);

  const queryPage = gql`
  query Projects($first: Int, $after: String) {
    projectsConnection(after: $after, first: $first, orderBy: createdAt_DESC) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          createdAt
          id
          slug
          name
          updatedAt
          lang
          categoria
          duration
          description
          url
          url2
          image {
            url
          }
        }
      }
    }
  }
  
  `;

  //Second method
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { projectsConnection } = await hygraph.request(queryPage, {
        first: 10,
        after: endCursor
      });
  
      // Verifica si projectsConnection existe y tiene la estructura esperada
      if (projectsConnection && projectsConnection.edges) {
        setprojects([...projectsConnection.edges.map((edge) => edge.node)]);
        setEndCursor(projectsConnection.pageInfo.endCursor);
        setHasNextPage(projectsConnection.pageInfo.hasNextPage);
      } else {
        console.error("Respuesta no esperada.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

    console.log(proyectos)

    const loadMoreProjects = async () => {
      // Si no hay más páginas, no se carga nada
      if (!hasNextPage) return;
  
      try {
        const { projectsConnection: newProjects } = await hygraph.request(queryPage, {
          first: 10,
          after: endCursor
        });
  
        // Actualizar el estado de los proyectos
        setprojects(prevProjects => [
          ...prevProjects,
          ...newProjects.edges.map(edge => edge.node)
        ]);
  
        // Actualizar el cursor de la página y la disponibilidad de la siguiente página
        setEndCursor(newProjects.pageInfo.endCursor);
        setHasNextPage(newProjects.pageInfo.hasNextPage);
      } catch (error) {
        console.error("Error fetching more projects:", error);
      }
    };

    const Orden = proyectos.sort((a, b) => {
      // Aquí se supone que tienes una propiedad createdAt en tus objetos de proyecto
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return(
      <>

    <main>
    <div className="section-container">

      
        {
            Orden.map((project, i) => (
                <div key={i} className="section">

                    <div className="image-container">
                    <img src={project.image.url} alt={project.name} title={project.name}/>
                    </div>
                    
                    <div className="text-container">
                        
                        <div className='ttitle'>{project.name}</div>

                        <div className='contenedor_des'>
                            <b>{project.categoria}</b>
                            <div className="contech">
                                
                                {project.lang.map((lang) => (
                                  <div className="boxtech" key={i}>{lang}</div>
                                ))}
                            </div>
                        </div>

                        <p className='tdescription'> {project.description}</p>
                        
                        <div className="containerq">
                            {
                                project.url === null ? '' :  <a href={project.url || 'null'} 
                                target="_blank" className="buttonp">
                                <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.309 2.309 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"></path>
                                </svg>
                                </a>
                            }
                                                        {
                                project.url2 === '' ? '' :  <a href={project.url2 || 'null'} 
                                target="_blank" className="buttonp">Ver Proyecto</a>
                            }
                        </div>
                    </div>
                </div>
            ))
        }
</div>

  {hasNextPage && (<><div className="mb-3"></div><button className='buttoned' onClick={loadMoreProjects}>Cargar más proyectos</button></>)} 

  {!hasNextPage && (<><div className="mb-3"></div><div className='buttoned'><a href='https://github.com/Serphp'>  Mas proyectos </a></div>

        </>)}

</main>
      </>
    );
  }