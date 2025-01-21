import { useState, useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "sql-formatter";
import CharCounter from "./CharCounter";

const SQLConverter = () => {
  const [text, setText] = useState("");
  const [activeState, setActiveState] = useState(true);
  const contentEditableRef = useRef(null);

  const handleConversion = (value) => {
    if (!value.trim()) return "";

    if (activeState) {
      //? Tratamento de erro para converter a SQL
      try {
        return format(value, {
          language: "sql",
          uppercase: true,
        });
      } catch (error) {
        toast.error("Erro ao formatar SQL");
        return console.log(error);
      }
    }

    return value;
  };

  const handleActive = () => {
    setActiveState((prev) => !prev);
  };

  const copyText = () => {
    const convertedText = handleConversion(text);
    if (convertedText.trim() === "") {
      toast.error("Sem texto para copiar");
      return;
    }
    navigator.clipboard.writeText(convertedText);
    toast.success("Texto copiado com sucesso!");
  };

  const clearText = () => {
    if (contentEditableRef.current.value === "") {
      toast.warn("Sem texto para limpar");
      return;
    } else {
      contentEditableRef.current.value = "";
      toast.success("Texto limpo com sucesso!");
      setText("");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-bold mb-10">Formatar SQL</h1>
        <h2 className="text2xl font-bold">IMPORTANTE!</h2>
        <p className="mb-10 font-light">Infelizmente não funciona com Access, somente outros tipos de SQL</p>
        <div className="flex flex-row w-full gap-4">
          {/* Textarea de entrada */}
          <textarea
            placeholder="Digite seu código aqui"
            ref={contentEditableRef}
            onInput={(e) => setText(e.target.value)}
            className="
              bg-slate-200
              rounded
              p-3
              text-black
              w-full
              max-w-screen-sm
              h-64
              drop-shadow-lg
              whitespace-pre-wrap
              break-all
              resize-none
              shadow-md shadow-slate-500
            "
          />

          {/* Textarea de saída (formatada) */}
          <textarea
            disabled
            placeholder="Código Formatado"
            className="
              bg-slate-300
              rounded
              p-3
              text-black
              w-full
              max-w-screen-sm
              h-64
              drop-shadow-lg
              whitespace-pre-wrap
              break-all
              resize-none
              shadow-md shadow-slate-500
            "
            value={handleConversion(text)}
          />
        </div>

        <span className=" relative right-5 top-2 flex flex-row justify-start">
          <CharCounter charCount={text.length} />
        </span>

        <div className="flex flex-row w-full mt-5 justify-end">
          {/* Botão para habilitar/desabilitar formatação */}
          <button
            onClick={handleActive}
            className="
              bg-blue-500
              text-white
              rounded-lg
              p-3
              transition-all
              hover:bg-blue-400
              hover:scale-110
              duration-300
              ease-in-out
              flex
              items-center
              gap-1
              mr-5
            ">
            {activeState ? "Desativar Formatação" : "Ativar Formatação"}
          </button>

          {/* Botão para copiar texto */}
          <button
            onClick={copyText}
            className="
              bg-slate-300
              text-green-600
              rounded-lg
              p-3
              transition-all
              hover:bg-slate-100
              hover:scale-110
              duration-300
              ease-in-out
              flex
              items-center
              gap-1
              mr-5
            ">
            {/* Ícone */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 
                .621-.504 1.125-1.125 1.125h-9.75a1.125 
                1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 
                1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 
                10.376h3.375c.621 0 1.125-.504 
                1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 
                9.06 0 0 0-1.5-.124H9.375c-.621 
                0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 
                1.125 0 0 1-1.125-1.125v-9.25m12 
                6.625v-1.875a3.375 3.375 
                0 0 0-3.375-3.375h-1.5a1.125 
                1.125 0 0 1-1.125-1.125v-1.5a3.375 
                3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </button>

          {/* Botão para limpar texto */}
          <button
            onClick={clearText}
            className="
              bg-slate-300
              text-red-700
              rounded-lg
              p-3
              transition-all
              hover:bg-slate-200
              hover:scale-110
              duration-300
              ease-in-out
              flex
              items-center
              gap-1
            ">
            {/* Ícone */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 
                7.5-.625 10.632a2.25 2.25 
                0 0 1-2.247 2.118H6.622a2.25 2.25 
                0 0 1-2.247-2.118L3.75 
                7.5m6 4.125 2.25 
                2.25m0 0 2.25 
                2.25M12 13.875l2.25-2.25M12 
                13.875l-2.25 2.25M3.375 
                7.5h17.25c.621 0 1.125-.504 
                1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 
                0-1.125.504-1.125 1.125v1.5c0 
                .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          theme="dark"
          transition={Bounce}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default SQLConverter;
