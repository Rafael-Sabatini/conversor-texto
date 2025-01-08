import { useState } from "react";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";

const CasingConverter = () => {
  const [text, setText] = useState("");
  const [activeState, setActiveState] = useState(false);

  const handleConversion = (value) => {
    if (!activeState) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
  };

  const handleActive = () => {
    setActiveState((prev) => !prev);
  };

  const copyText = () => {
    const convertedText = handleConversion(text);
    if(convertedText === ''){
      toast.error("Sem texto para copiar");
      return;
    }
    else{
      navigator.clipboard.writeText(convertedText);
      toast.success("Texto copiado com sucesso!");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold mb-5">Conversor de Letras</h1>
      <h2 className="text-lg mb-5">Selecione o tipo de conversão desejada:</h2>

      {/* CHECKBOX */}
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
          "
        >
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
            w-11 h-6 
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
        ></div>

        <span
          className="
            ml-3 
            text-lg 
            font-normal
            transition-all
            hover:translate-x-3
            ease-in-out
            duration-300
          "
        >
          Maiúsculo
        </span>
      </label>

      {/* SPAN (contentEditable) where user types */}
      <span
        contentEditable="true"
        onInput={(e) => setText(e.currentTarget.textContent)}
        className="
          bg-slate-200 
          box-border 
          rounded
          p-1
          text-black 
          w-full
          max-w-screen-sm
          min-h-[50px]
          break-all
        "
      ></span>

      <br />

      {/* Display the converted text */}
      <span
        className="
          bg-slate-200 
          box-border 
          rounded
          px-1
          text-black 
          w-full
          max-w-screen-sm
          min-h-[50px]
          break-all
        "
      >
        {handleConversion(text)}
      </span>

      {/* Copy Button */}
      <button
        onClick={copyText}
        className="
          bg-blue-700 
          rounded-md 
          p-1
          text-2xl
          transition-all
          hover:bg-blue-800
          hover:scale-110
          duration-300
          ease-in-out
          mt-7
        "
      >
        Copiar
      </button>
      <br />
      <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={true}
       closeOnClick={true}
       theme="dark"
       transition={Bounce}
       />
    </div>
  );
};

export default CasingConverter;
