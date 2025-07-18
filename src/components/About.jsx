import ProfilePicture from "./ProfilePicture";

export default function About() {
    return (
      <section id="sobre" className="py-20 px-4 flex flex-col md:flex-row items-center gap-6 gap-y-14 mb-12">
        <ProfilePicture />

        <div className="shrink text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Desenvolvedor de Software</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Sou um Desenvolvedor de Software de 23 anos com mais de 2 anos de experiência profissional.
            Crio jogos em Unity e aplicações web com ASP.NET, C#, JavaScript e bancos de dados SQL Server.
          </p>
        </div>
      </section>
    );
  }