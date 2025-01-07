import './App.css';  // Caso queira colocar customizações extras aqui
import { useState } from 'react';
import CasingConverter from './components/CasingConverter';
import SpaceRemoval from './components/SpaceRemoval';
import LineBreakConverter from './components/LineBreakConverter';
import CNPJCPFConverter from './components/CNPJCPFConverter';
import SQLConverter from './components/SQLConverter';
import HomeScreen from './components/HomeScreen';

function App() {
  const componentRender = [
    { id: 1, name: "CasingConverter" },
    { id: 2, name: "SpaceRemoval" },
    { id: 3, name: "LineBreakConverter" },
    { id: 4, name: "CNPJCPFConverter" },
    { id: 5, name: "SQLConverter" },
    { id: 6, name: "HomeScreen" },
  ];

  // Qual componente será renderizado
  const [changeComponent, setChangeComponent] = useState(componentRender[5].name);

  // Estado para controlar visibilidade da sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Funções de troca de componente
  const casingChange = () => setChangeComponent("CasingConverter");
  const spaceChange = () => setChangeComponent("SpaceRemoval");
  const lineBreakChange = () => setChangeComponent("LineBreakConverter");
  const cnpjChange = () => setChangeComponent("CNPJCPFConverter");
  const sqlChange = () => setChangeComponent("SQLConverter");
  const homeChange = () => setChangeComponent("HomeScreen");

  return (
    <div className="relative min-h-screen bg-gradient-to-t from-slate-800 to-slate-950 text-white">
      {/* Botão para abrir o sidebar (aparece só quando sidebarOpen === false) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            fixed top-4 left-4
            bg-slate-700 text-white
            px-4 py-2
            rounded
            hover:bg-slate-800
            transition-colors
            z-50
            flex items-center
            gap-2
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

      {/* SIDEBAR (fixed) */}
      <div
        className={`
          fixed top-0 left-0 z-40
          h-screen w-[320px]
          bg-black
          px-4 py-6
          shadow-md
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="sidebar"
        id="sidebar"
      >
        <aside className="w-full">
          <div className="flex items-center justify-between mb-4">
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
                p-2
                rounded
                hover:bg-gray-800
                transition-colors
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
            </li>
          </ul>
        </aside>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      {/* Repare que aplicamos margin-left condicional para "empurrar" o conteúdo */}
      <div
        className={`
          transition-all duration-300
          ${sidebarOpen ? "ml-[320px]" : "ml-0"}
          p-5
        `}
      >
        <div className="mt-10 min-h-screen">
          {changeComponent === "CasingConverter" && <CasingConverter />}
          {changeComponent === "SpaceRemoval" && <SpaceRemoval />}
          {changeComponent === "LineBreakConverter" && <LineBreakConverter />}
          {changeComponent === "CNPJCPFConverter" && <CNPJCPFConverter />}
          {changeComponent === "SQLConverter" && <SQLConverter />}
          {changeComponent === "HomeScreen" && <HomeScreen />}
        </div>
      </div>
    </div>
  );
}

export default App;
