
  import { GraphQLClient, gql, request } from "graphql-request";
  import {  } from 'graphql-request';
  import React, { useEffect, useState } from "react";

  const hygraph = new GraphQLClient(`https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clszf2ktf0f8008vw55b6z0ug/master`);


  export default function App() {
  const [proyectos, setprojects] = useState([]);

  const query = gql`
  query Projects {
    projects {
      createdAt
      id
      slug
      title
      updatedAt
      languages
      category
      duration
    }
  }

    `;

  // useEffect(() => {
  //   const fetchprojects = async () => {
  //     const proyectos = await hygraph.request(query);
  //     setprojects(proyectos);
  //   };
  //   fetchprojects();
  // })
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { projects } = await hygraph.request(query);
        setprojects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [query]);

    console.log(proyectos)
    return(
      <>
        <h1>Projects</h1>
        <ul>
              {proyectos.map((project) => (
            <li key={project.id}>
              {project.title}
            </li>
          ))}
        </ul>
      </>
    );
  }