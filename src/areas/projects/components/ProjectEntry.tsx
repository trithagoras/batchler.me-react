import ProjectModel from "../models/project";
import { Link } from "react-router-dom";
import "../../posts/styles/post.css";

function ProjectIndex({ project }: { project: ProjectModel }) {
  return (
    <div>
      <h2 className="h3">
        <Link to={project.url}>{project.title}</Link>
      </h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectIndex;
