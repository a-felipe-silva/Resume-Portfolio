import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlRoot = window.document.documentElement;

    if (darkMode) {
      htmlRoot.classList.add('dark');
    } else {
      htmlRoot.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="w-full px-8 py-6 bg-transparent">
      <div className="flex justify-center md:justify-between items-end flex-wrap gap-y-12">
        <div className="flex justify-between md:justify-start items-center space-x-4 basis-full md:basis-auto flex-1">
          {/* Nome à esquerda */}
          <h1 className="text-4xl sm:text-3xl md:text-2xl lg:text-xl font-semibold text-gray-900 dark:text-gray-300">Agostinho Felipe</h1>

          <button 
            onClick={() => setDarkMode((prev) => !prev)}
            className="transition-colors duration-200 hover:text-yellow-400 bg-transparent"
            aria-label="Alternar tema"
          >
            {darkMode ? (
              <Moon size={24} strokeWidth={2} />
            ) : (
              <Sun size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Navegação à direita */}
        <nav className="flex flex-wrap gap-x-6 text-sm md:text-base justify-center md:justify-start">
          <a href="#sobre" className="hover:font-bold transition-all">Sobre</a>
          <a href="#habilidades" className="hover:font-bold transition-all">Habilidades</a>
          <a href="#experiencias" className="hover:font-bold transition-all">Experiências</a>
          <a href="#formacao" className="hover:font-bold transition-all">Formação</a>
          <a href="#contato" className="hover:font-bold transition-all">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;