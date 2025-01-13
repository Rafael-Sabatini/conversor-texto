import './App.css';  // Caso queira colocar customizações extras aqui
import { useState } from 'react';
import CasingConverter from './components/CasingConverter';
import SpaceRemoval from './components/SpaceRemoval';
import LineBreakConverter from './components/LineBreakConverter';
import CNPJCPFConverter from './components/CNPJCPFConverter';
import SQLConverter from './components/SQLConverter';
import HomeScreen from './components/HomeScreen';
import SymbolRemover from './components/SymbolRemover';
import TextComparator from './components/TextComparator';

function App() {
  
  const componentRender = [
    { id: 1, name: "CasingConverter" },
    { id: 2, name: "SpaceRemoval" },
    { id: 3, name: "LineBreakConverter" },
    { id: 4, name: "CNPJCPFConverter" },
    { id: 5, name: "SQLConverter" },
    { id: 6, name: "SymbolRemover" },
    { id: 7, name: "TextComparator" },
    { id: 8, name: "HomeScreen" },
  ];

  // Qual componente será renderizado
  const [changeComponent, setChangeComponent] = useState(componentRender[7].name);

  // Estado para controlar visibilidade da sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Funções de troca de componente
  const casingChange = () => setChangeComponent("CasingConverter");
  const spaceChange = () => setChangeComponent("SpaceRemoval");
  const lineBreakChange = () => setChangeComponent("LineBreakConverter");
  const cnpjChange = () => setChangeComponent("CNPJCPFConverter");
  const sqlChange = () => setChangeComponent("SQLConverter");
  const symbolChange = () => setChangeComponent("SymbolRemover");
  const textCompareChange = () => setChangeComponent("TextComparator");
  const homeChange = () => setChangeComponent("HomeScreen");

  return (
    <div className="relative p-0 m-0 min-h-screen max-h-full bg-gradient-to-t from-slate-800 to-slate-950 text-white">
      {/* Botão para abrir o sidebar (aparece só quando sidebarOpen === false) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            sticky top-4 left-4
            bg-slate-700 text-white
            px-4 py-2
            rounded
            hover:rotate-180
            hover:scale-110
            transition-all
            z-50
            flex items-center
            gap-2
            duration-500
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}

      <div
        className={`
          fixed top-0 left-0 z-40
          h-screen w-74
          bg-black
          px-4 py-6
          shadow-md
          shadow-slate-800
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="sidebar"
        id="sidebar"
      >
        <aside className="w-full">
          <div className="flex items-center justify-between">
            <a
              href="#!"
              onClick={homeChange}
              className="
                text-xl 
                font-semibold 
                block 
                px-2 py-2 rounded-md 
                hover:translate-x-2 
                transition-all 
                duration-300 
                ease-in-out
              "
            >
              Conversões
            </a>
            <button
              onClick={() => setSidebarOpen(false)}
              className="
                fixed
                right-5
                top-6
                p-2
                hover:scale-110
                hover:text-red-600
                transition-all
                duration-500
                text-lg
              "
            >
              X
            </button>
          </div>

          <hr className="mb-5 border-2 border-zinc-800 border-double rounded w-full " />

          <ul className="space-y-3">
            <li>
              <a
                href="#!"
                onClick={casingChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                "
              >
                Maiúsculo e Minúsculo
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={spaceChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                "
              >
                Remover Espaços
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={lineBreakChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                "
              >
                Remover Quebra de Linha
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={cnpjChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                "
              >
                Formatar CNPJ e CPF
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={sqlChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                "
              >
                Formatar SQL
              </a>

              <a
                href="#!"
                onClick={symbolChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                  mt-3
                "
              >
                Remover Símbolos
              </a>

              <a
                href="#!"
                onClick={textCompareChange}
                className="
                  text-xl 
                  font-semibold 
                  block 
                  px-2 py-2 rounded-md 
                  hover:translate-x-2 
                  hover:bg-blue-800
                  transition-all 
                  duration-300 
                  ease-in-out
                  mt-3
                "
              >
                Comparador de Textos
              </a>
            </li>
          </ul>
        </aside>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div
        className={`
          transition-all duration-300
          ${sidebarOpen ? "ml-[320px]" : "ml-0"}
          p-5
        `}
      >
        <div className="min-h-screen">
          {changeComponent === "CasingConverter" && <CasingConverter />}
          {changeComponent === "SpaceRemoval" && <SpaceRemoval />}
          {changeComponent === "LineBreakConverter" && <LineBreakConverter />}
          {changeComponent === "CNPJCPFConverter" && <CNPJCPFConverter />}
          {changeComponent === "SQLConverter" && <SQLConverter />}
          {changeComponent === "SymbolRemover" && <SymbolRemover />}
          {changeComponent === "TextComparator" && <TextComparator />}
          {changeComponent === "HomeScreen" && <HomeScreen />}
        </div>
      </div>
    </div>
  );
}

export default App;
