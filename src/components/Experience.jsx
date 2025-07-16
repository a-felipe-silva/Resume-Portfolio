const jobs = [
    {
      empresa: 'Webcore',
      titulo: 'Desenvolvedor C# Unity Júnior',
      periodo: 'dez. 2025 – atual',
      descricao: 'Desenvolvi e publiquei 8 jogos educacionais em Unity 3D com C#. Criei ferramenta de importação de traduções via Google Sheets, automatizando a atualização de idiomas em 24 projetos, com redução de 90% no tempo e 50% no espaço ocupado por planilhas de localização.',
      tags: [
        "Unity 2D/3D",
        "C#",
        "WebGL",
        "Javascript"
      ]
    },
    {
      empresa: 'Rede Service',
      titulo: 'Desenvolvedor Full-Stack Júnior',
      periodo: 'ago. 2023 – jun. 2024',
      descricao: 'Melhorei um sistema SAAS multi-inquilino de CRM, Faturamento, chatbots e agentes de IA com ASP.NET MVC/WebForms. Otimizei filas de relatórios com C# e SQL Server, e reduzi o uso de disco em 60% com serviço de expurgo em VB.NET, garantindo estabilidade e performance sob alta carga.',
      tags: [
        "ASP.NET MVC",
        ".NET",
        "C#",
        "Javascript",
        "CSS/HTML",
        "Entity Framework",
        "SQL Server",
      ]
    },
    {
      empresa: 'BWise',
      titulo: 'Designer de Mídias Digitais',
      periodo: 'ago. 2021 – jul. 2023',
      descricao: 'Criação de materiais digitais para redes sociais, vídeos e eventos usando Illustrator, Photoshop e Figma.',
      tags: [
        "Photoshop",
        "Illustrator",
        "Figma",
      ]
    }
  ];
  
  export default function Experience() {
    return (
      <section id="projetos" className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Experiências</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 p-6 shadow rounded">
              <h3 className="text-xl font-semibold">{job.titulo} — <span className="text-sm font-normal">{job.empresa}</span></h3>
              <p className="text-sm text-gray-500">{job.periodo}</p>
              <p className="mt-2 text-sm">{job.descricao}</p>

              {job.tags?.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-3 text-sm text-white">
                  {job.tags.map((tag, i) => (
                    <li key={i} className="bg-gray-700 px-3 py-1 rounded-full">{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }