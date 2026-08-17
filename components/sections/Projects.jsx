import projectsData from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const { projects } = projectsData;

  return (
    <section className="section" id="projects">
      <div className="container-lg">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted">
              Interested in more? Check out my <a href="https://github.com/Arvind29" target="_blank" rel="noopener noreferrer" className="link-external">GitHub profile</a> for additional projects and contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
