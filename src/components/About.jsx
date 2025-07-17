export default function About() {
    return (
      <section id="sobre" className="py-20 px-4 flex flex-col md:flex-row items-center gap-6 gap-y-14 mb-12">
        <img
          src="/images/profile.jpg"
          alt="Agostinho Felipe"
          className="w-38 h-38 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-md filter grayscale-10 hover:grayscale-0 brightness-80 hover:brightness-100 contrast-90 hover:contrast-100  transition duration-300 ease-in-out"
          onClick={() => window.open("https://www.linkedin.com/in/agostinhofelipe/", "_blank")}
        />

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Desenvolvedor de Software</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Sou um Desenvolvedor de Software de 23 anos com mais de 2 anos de experiência profissional.
            Crio jogos em Unity e aplicações web com ASP.NET, C#, JavaScript e bancos de dados SQL Server.
          </p>
        </div>
      </section>
    );
  }