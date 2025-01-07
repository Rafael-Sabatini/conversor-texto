import "./CasingConverter.css";

const CasingConverter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-base">Conversor de Letras</h1>
      <br />

      <h2>Selecione o tipo de conversão desejada:</h2>
      <br />


      <label className="inline-flex items-center cursor-pointer">
        <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Minúsculo</span>
        <input type="checkbox" className="sr-only peer" />
        <div 
          className="
            relative 
            w-11 h-6 
            bg-gray-200 
            peer-focus:outline-none 
            rounded-full 
            peer dark:bg-red-700 
            peer-checked:after:translate-x-full 
            rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-white 
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
            ">
            </div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Maiúsculo</span>
      </label>


      <span
        contentEditable="true"
        className="
          bg-slate-200 
          box-border 
          rounded
          p-1 mt-5 
          text-black 
          flex
          w-full
          overflow-auto 
          max-w-screen-sm h-fit 
          break-all
        "></span>
      <br />

      <button 
      className="
        bg-blue-700
        hover:bg-blue-500
        hover:scale-110
        transition-all
        duration-300
        ease-in-out
        rounded-md
        drop-shadow-md
        p-1
        w-40
        mt-3
      "
      >Converter
      </button>
    </div>
  );
};

export default CasingConverter;
