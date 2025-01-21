import { useState, useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CharCounter from "./CharCounter";

function CasingConverter() {
  const [text, setText] = useState("");
  const [activeState, setActiveState] = useState(true);

  const contentEditableRef = useRef(null);

  const handleConversion = (value) => {
    return activeState ? value.toUpperCase() : value.toLowerCase();
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
    }
    contentEditableRef.current.value = "";
    toast.success("Texto limpo com sucesso!");
    setText("");
  };

  return (
    <div
      className="
        container 
        mx-auto 
        px-4 
        py-8
        flex 
        flex-col 
        items-center 
        justify-center
      ">
      <h1 className="text-4xl font-bold mb-5">Conversor de Letras</h1>
      <h2 className="text-lg mb-5">Selecione o tipo de conversão desejada:</h2>

      <label className="inline-flex items-center cursor-pointer mb-10">
        <span
          className="
            mr-3 
            text-lg 
            font-normal
            transition-all
            hover:translate-x-[-0.75rem]
            ease-in-out
            duration-300
          ">
          Minúsculo
        </span>
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleActive}
          checked={activeState}
        />
        <div
          className="
            relative 
            w-11 
            h-6 
            bg-gray-200 
            peer-focus:outline-none 
            rounded-full 
            dark:bg-gray-600
            peer-checked:after:translate-x-full 
            rtl:peer-checked:after:-translate-x-full 
            after:content-[''] 
            after:absolute 
            after:top-[2px] 
            after:start-[2px] 
            after:bg-white 
            after:border-gray-300 
            after:border 
            after:rounded-full 
            after:h-5 
            after:w-5 
            after:transition-all 
            dark:border-gray-600 
            peer-checked:bg-blue-600
          "
        />
        <span
          className="
            ml-3 
            text-lg 
            font-normal
            transition-all
            hover:translate-x-3
            ease-in-out
            duration-300
          ">
          Maiúsculo
        </span>
      </label>

      {/* ÁREA DOS TEXTAREAS */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          w-full
          max-w-5xl
          gap-4
        ">
        {/* TEXTO DE ENTRADA */}
        <textarea
          placeholder="Digite seu texto aqui"
          ref={contentEditableRef}
          onInput={(e) => setText(e.target.value)}
          className="
            bg-slate-200
            rounded
            p-3
            text-black 
            w-full
            h-64
            drop-shadow-lg
            whitespace-pre-wrap
            break-all
            resize-none
            shadow-md shadow-slate-500
          "
        />
        {/* TEXTO DE SAÍDA (CONVERTIDO) */}
        <textarea
          disabled
          placeholder="Texto convertido"
          className="
            bg-slate-300
            rounded
            p-3
            text-black 
            w-full
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

      {/* BOTÕES AÇÕES */}
      <div
        className="
          flex
          flex-row
          w-full
          max-w-5xl
          mt-5
          justify-end
        ">
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
  );
}

export default CasingConverter;
