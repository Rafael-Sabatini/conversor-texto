import { diffWords } from "diff";
import { useState } from "react";

const TextComparator = () => {
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const diffResult = diffWords(textOne, textTwo);

  const highlightedDiff = diffResult.map((part, index) => {
    const backgroundColor = part.added
      ? "bg-green-300"
      : part.removed
      ? "bg-red-300"
      : "bg-transparent";

    return (
      <span key={index} className={`${backgroundColor} whitespace-pre-wrap`}>
        {part.value}
      </span>
    );
  });

  // Função para abrir/fechar o Modal
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center align-center p-10">
      <button
        className="
          relative
          top-20
          left-1
          bg-blue-500
          w-10
          rounded-lg
          p-2
          text-center
          hover:bg-blue-400
          hover:scale-110
          transition-all
          duration-300
        "
        onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 
            0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </button>

      {openModal && (
        <div
          className="
            fixed top-0 left-0 
            w-screen h-screen 
            flex items-center justify-center 
            z-50
          ">
          <div
            className="
              bg-slate-400 
              p-4 
              rounded-md 
              max-w-2xl
              text-black
              relative
            ">
            <button
              onClick={toggleModal}
              className="
                absolute top-2 right-4 
                bg-red-500 
                p-2
                w-7
                h-10
                rounded 
                text-white
                hover:bg-red-600
              ">
              X
            </button>

            <h1 className="text-xl font-bold mb-3">Como funciona?</h1>
            <hr className="mb-2" />

            <p className="mb-4">
              Esse comparador funciona a base de cores, indicando partes
              diferentes entre eles.
              <br />
              Por ser uma versão beta ainda, fica meio confuso como essa
              conversão funciona, então aqui está uma explicação:
            </p>

            <h2 className="font-bold">Cores</h2>
            <hr className="mb-2" />
            <p className="mb-2">
              <span className="bg-red-300 text-black px-1">Vermelho:</span>{" "}
              Indica diferenças no primeiro texto (o de cima). Toda parte
              grifada em vermelho indica algo que está no texto 1 e não no texto
              2.
            </p>
            <p className="mb-4">
              <span className="bg-green-300 text-black px-1">Verde:</span>{" "}
              Indica diferenças no segundo texto (o de baixo). Toda parte
              grifada em verde indica algo que está no texto 2 e não no texto 1.
            </p>

            <h2 className="font-bold">Como saber se os textos estão iguais?</h2>
            <hr className="mb-2" />
            <p>
              Simples: caso ambos os textos estejam iguais, nenhuma parte será
              grifada em vermelho ou verde.
              <br />
              <br />
              Por enquanto, essa é a única funcionalidade. Futuramente, pretendo
              implementar algo para mesclar textos a partir dessas diferenças.
            </p>
          </div>
        </div>
      )}

      <h1 className=" mt-10 text-center text-4xl font-bold mb-10">
        Comparador de Textos
      </h1>

      {/* Primeira textarea */}
      <textarea
        placeholder="Digite o primeiro texto aqui..."
        value={textOne}
        onChange={(e) => setTextOne(e.target.value)}
        className="bg-slate-200 border rounded text-black p-2 w-full h-40 mb-4 resize-none shadow-md shadow-slate-500"
      />

      {/* Segunda textarea */}
      <textarea
        placeholder="Digite o segundo texto aqui..."
        value={textTwo}
        onChange={(e) => setTextTwo(e.target.value)}
        className="bg-slate-200 border text-black rounded p-2 w-full h-40 mb-4 resize-none shadow-md shadow-slate-500"
      />

      {/* Resultados da comparação */}
      <span className="shadow-sm bg-slate-200 text-black p-2 border rounded min-h-[100px] break-all max-width-screen whitespace-break-spaces">
        {highlightedDiff}
      </span>
    </div>
  );
};

export default TextComparator;
