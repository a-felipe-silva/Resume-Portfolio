const skills = [
    'C#', 'VB.NET', 'JavaScript', 'ASP.NET MVC', 'WebForms', 'HTML/CSS', 'SQL Server',
    'MySQL', 'Entity Framework', 'Unity 2D/3D', 'Git', 'Scrum', 'REST APIs', 'Google Cloud'
  ];
  
  export default function Skills() {
    return (
      <section id="habilidades" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6">Habilidades Técnicas</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 shadow rounded text-sm">{skill}</span>
          ))}
        </div>
      </section>
    );
  }