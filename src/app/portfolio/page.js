export default function Portfolio() {
    const projects = [
      { title: "Project One", description: "Description of Project One", link: "#" },
      { title: "Project Two", description: "Description of Project Two", link: "#" },
    ];
  
    return (
      <div className="container p-4 mx-auto mt-20">
        <h1 className="mb-6 text-3xl font-bold">Portfolio</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="mb-4">
              <a href={project.link} className="text-blue-500 hover:underline">
                {project.title}
              </a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }