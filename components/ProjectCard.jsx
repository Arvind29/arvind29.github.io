export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{project.title}</h5>
          <span className="badge" style={{ whiteSpace: 'nowrap' }}>
            {project.status}
          </span>
        </div>

        <p className="card-text">{project.description}</p>

        <div className="mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
