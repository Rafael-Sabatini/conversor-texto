import { diffWords } from "diff";
import { useState } from "react";
import Modal from "react-modal";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Set the root element for react-modal (required for accessibility)
Modal.setAppElement("#root");

const TextComparator = () => {
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [openMergeModal, setOpenMergeModal] = useState(false);
  const [mergedText, setMergedText] = useState("");
  const [ignoreDiffs, setIgnoreDiffs] = useState(false); // Checkbox state

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

  // Função para mesclar textos
  const handleMerge = (option) => {
    let merged = "";

    if (textOne.value || textTwo.value === ""){
      toast.error("Sem textos para mesclar");
      return;
    } 

    if (option === "textOneIntoTextTwo") {
      if (ignoreDiffs) {
        // Ignore diffs: Only add missing parts from Text 1 to Text 2
        merged = diffResult
          .map((part) => (part.added ? "" : part.value))
          .join("");
      } else {
        // Replace diffs: Replace all diffs in Text 2 with Text 1
        merged = diffResult
          .map((part) => (part.removed ? "" : part.value))
          .join("");
      }
    } else if (option === "textTwoIntoTextOne") {
      if (ignoreDiffs) {
        // Ignore diffs: Only add missing parts from Text 2 to Text 1
        merged = diffResult
          .map((part) => (part.removed ? "" : part.value))
          .join("");
      } else {
        // Replace diffs: Replace all diffs in Text 1 with Text 2
        merged = diffResult
          .map((part) => (part.added ? "" : part.value))
          .join("");
      }
    }

    setMergedText(merged);
    setOpenMergeModal(false); // Fecha o modal após a escolha
  };

  // Função para copiar o texto mesclado
  const copyMergedText = () => {
    navigator.clipboard.writeText(mergedText);
    toast.success("Texto copiado com sucesso!")
  };

  // Função para limpar os campos
  const clearFields = () => {
    setTextOne("");
    setTextTwo("");
    setMergedText("");
  };

  return (
    <div className="flex flex-col justify-center align-center p-10">
      {/* Botão de ajuda */}
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
        onClick={() => setOpenHelpModal(true)}>
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

      {/* Modal de ajuda */}
      <Modal
        isOpen={openHelpModal}
        onRequestClose={() => setOpenHelpModal(false)}
        className="
          bg-gradient-to-b from-slate-100 to-slate-200
          p-3
          rounded-lg
          shadow-lg shadow-black
          max-w-2xl
          text-black
          relative
          mx-auto
        "
        overlayClassName="
          fixed top-0 left-0 
          w-screen h-screen 
          bg-black bg-opacity-50 
          flex items-center justify-center
        ">
        <button
          onClick={() => setOpenHelpModal(false)}
          className="
            absolute top-2 right-3
            bg-red-500 
            p-2
            w-9
            h-10
            rounded 
            text-white
            hover:bg-red-600
            hover:scale-110
            transition-all
            duration-300
          ">
          X
        </button>

        <h1 className="text-xl font-bold mb-3">Como funciona?</h1>
        <hr className="border-x-2 border-black mb-2" />

        <p className="mb-4">
          Esse comparador funciona a base de cores, indicando partes
          diferentes entre eles.
          <br />
          Por ser uma versão beta ainda, fica meio confuso como essa
          conversão funciona, então aqui está uma explicação:
        </p>

        <h2 className="font-bold">Cores</h2>
        <hr className="border-x-2 border-black my-2" />
        <span className="mb-2">
          <span className="bg-red-300 text-black px-1">Vermelho:</span>{" "}
          Indica diferenças no primeiro texto (o de cima). Toda parte
          grifada em vermelho indica algo que está no texto 1 e não no texto
          2.
        </span>
        <p className="mb-4">
          <span className="bg-green-300 text-black px-1">Verde:</span>{" "}
          Indica diferenças no segundo texto (o de baixo). Toda parte
          grifada em verde indica algo que está no texto 2 e não no texto 1.
        </p>

        <h2 className="font-bold">Como saber se os textos estão iguais?</h2>
        <hr className="mb-2" />
        <span>
          Simples: caso ambos os textos estejam iguais, nenhuma parte será
          grifada em vermelho ou verde.
          <br />
        </span>

        <h2 className="font-bold my-2">Mesclagem</h2>
        <hr className="border-x-2 border-black mb-2" />
        <span>
          Ao mesclar os textos, você vai ter algumas opções:
          <br /><br />
          <strong>Seleção do texto a ser mesclado</strong><br />
          Básico, somente selecionar qual texto você quer mesclar, ou seja se você quer que
          as partes do primeiro texto sejam inseridas no segundo e vice-versa
          <br /><br />

          <strong>Opção de ignorar as diferenças</strong><br />
          Essa opção vai fazer com que seja ignorado as palavras diferentes dos textos,
          mantendo somente as informações faltantes dos textos (tanto o primeiro quanto
          o segundo)

        </span>
      </Modal>

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

      {/* Botão Mesclar */}
      <button
        className="
          bg-green-600
          p-3
          rounded-lg
          mt-3
          w-32
          transition-all
          duration-300
          hover:scale-110
          hover:bg-green-500
        "
        onClick={() => setOpenMergeModal(true)}>
        Mesclar
      </button>

      {/* Modal de Mesclagem */}
      <Modal
        isOpen={openMergeModal}
        onRequestClose={() => setOpenMergeModal(false)}
        className="
          bg-gradient-to-b from-slate-100 to-slate-200
          p-4 
          rounded-md
          shadow-md shadow-black
          max-w-2xl
          text-black
          relative
          mx-auto
          mt-20
        "
        overlayClassName="
          fixed top-0 left-0 
          w-screen h-screen 
          bg-black bg-opacity-50 
          flex items-center justify-center
        ">
        <button
          onClick={() => setOpenMergeModal(false)}
          className="
            absolute top-2 right-3
            bg-red-500 
            p-2
            w-9
            h-10
            rounded 
            text-white
            hover:bg-red-600
            hover:scale-110
            transition-all
            duration-300
          ">
          X
        </button>

        <h1 className="text-xl font-bold mb-3">Escolha como mesclar:</h1>
        <hr className="mb-2" />

        {/* Checkbox para ignorar diferenças */}
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={ignoreDiffs}
            onChange={(e) => setIgnoreDiffs(e.target.checked)}
            className="mr-2"
          />
          Ignorar diferenças (apenas adicionar partes faltantes)
        </label>

        <button
          onClick={() => handleMerge("textOneIntoTextTwo")}
          className="
            bg-blue-500
            p-2
            rounded-lg
            w-full
            mb-2
            hover:bg-blue-400
            transition-all
            duration-300
          ">
          Mesclar Texto 1 no Texto 2
        </button>

        <button
          onClick={() => handleMerge("textTwoIntoTextOne")}
          className="
            bg-blue-500
            p-2
            rounded-lg
            w-full
            hover:bg-blue-400
            transition-all
            duration-300
          ">
          Mesclar Texto 2 no Texto 1
        </button>
      </Modal>

      {/* Div para mostrar o texto mesclado */}
      {mergedText && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Texto Mesclado:</h2>
          <div className="bg-slate-200 p-2 rounded border">
            {mergedText}
          </div>
          <button
            onClick={copyMergedText}
            className="
              bg-blue-500
              p-3
              rounded-lg
              mt-2
              w-32
              hover:bg-blue-400
              transition-all
              duration-300
            ">
            Copiar
          </button>
        </div>
      )}

      {/* Botão para limpar campos */}
      <button
        onClick={clearFields}
        className="
          bg-red-500
          p-3
          rounded-lg
          mt-2
          w-32
          hover:bg-red-400
          transition-all
          duration-300
        ">
        Limpar
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme="colored"
        transition={Bounce}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default TextComparator;