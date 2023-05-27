import ProjectEntry from "../components/ProjectEntry";
import projects from "../metadata";

function ListProjects() {
  return (
    <ul>
      {projects
        .map((p) => (
          <li key={p.title} className="post-entry">
            <ProjectEntry project={p} />
          </li>
        ))}
    </ul>
  );
}

export default ListProjects;
