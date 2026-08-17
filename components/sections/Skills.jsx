import skillsData from '@/data/skills.json';

export default function Skills() {
  const { skills } = skillsData;

  return (
    <section className="section bg-light" id="skills">
      <div className="container-lg">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="row g-4">
          {skills.map((skillGroup, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title"><span style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>
                    {skillGroup.icon}
                  </span>
                    {skillGroup.category}</h5>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
                    {skillGroup.items.map((item, idx) => (
                      <li key={idx} style={{ color: '#475569' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
