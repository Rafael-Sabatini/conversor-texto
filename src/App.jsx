import "./App.css";
import { useState, useEffect } from "react";
import CasingConverter from "./components/CasingConverter";
import SpaceRemoval from "./components/SpaceRemoval";
import LineBreakConverter from "./components/LineBreakConverter";
import CNPJCPFConverter from "./components/CNPJCPFConverter";
import SQLConverter from "./components/SQLConverter";
import HomeScreen from "./components/HomeScreen";
import SymbolRemover from "./components/SymbolRemover";
import TextComparator from "./components/TextComparator";

function App() {

  // Initialize state with the value from localStorage or default to "HomeScreen"
  const [changeComponent, setChangeComponent] = useState(
    localStorage.getItem("component") || "HomeScreen"
  );

  // Update localStorage whenever changeComponent changes
  useEffect(() => {
    localStorage.setItem("component", changeComponent);
  }, [changeComponent]);

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
    <div
      className="
        relative 
        p-0 m-0 
        min-h-screen max-h-full 
        bg-gradient-to-t from-slate-100 to-slate-200 
        text-black
      ">
      {/* Botão para abrir o sidebar (aparece só quando sidebarOpen === false) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            sticky top-4 left-4
            bg-slate-500 text-white
            px-4 py-2
            rounded-lg
            hover:scale-110
            transition-all
            flex items-center
            gap-2
            duration-500
          ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
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
          text-white
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="sidebar"
        id="sidebar">
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
              ">
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
              ">
              X
            </button>
          </div>

          <hr className="mb-5 border-2 border-zinc-800 border-double rounded w-full " />

          <ul className="space-y-3">
            <li>
              <a
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
                  cursor-pointer
                ">
                Maiúsculo e Minúsculo
              </a>
            </li>
            <li>
              <a
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
                  cursor-pointer
                ">
                Remover Espaços
              </a>
            </li>
            <li>
              <a
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
                  cursor-pointer
                ">
                Remover Quebra de Linha
              </a>
            </li>
            <li>
              <a
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
                  cursor-pointer
                ">
                Formatar CNPJ e CPF
              </a>
            </li>
            <li>
              <a
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
                  cursor-pointer
                ">
                Formatar SQL
              </a>

              <a
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
                  cursor-pointer
                ">
                Remover Símbolos
              </a>

              <a
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
                  cursor-pointer
                ">
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
        `}>
        <div className="min-h-screen">
          {/* Add a key prop to force re-render and trigger animation */}
          {changeComponent === "CasingConverter" && (
            <div key="CasingConverter" className="slide-in">
              <CasingConverter />
            </div>
          )}
          {changeComponent === "SpaceRemoval" && (
            <div key="SpaceRemoval" className="slide-in">
              <SpaceRemoval />
            </div>
          )}
          {changeComponent === "LineBreakConverter" && (
            <div key="LineBreakConverter" className="slide-in">
              <LineBreakConverter />
            </div>
          )}
          {changeComponent === "CNPJCPFConverter" && (
            <div key="CNPJCPFConverter" className="slide-in">
              <CNPJCPFConverter />
            </div>
          )}
          {changeComponent === "SQLConverter" && (
            <div key="SQLConverter" className="slide-in">
              <SQLConverter />
            </div>
          )}
          {changeComponent === "SymbolRemover" && (
            <div key="SymbolRemover" className="slide-in">
              <SymbolRemover />
            </div>
          )}
          {changeComponent === "TextComparator" && (
            <div key="TextComparator" className="slide-in">
              <TextComparator />
            </div>
          )}
          {changeComponent === "HomeScreen" && (
            <div key="HomeScreen" className="slide-in">
              <HomeScreen />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;