const HomeScreen = () => {
  return (
    <div 
      className="
        flex flex-col 
        justify-center 
        align-center 
        max-w-screen
        max-h-screen
        p-10
      ">
      <h1 className="mb-10 text-center text-4xl">Bem vindo!</h1>
        
        <main>
        <hr className="mb-10 border-3" />
            <span>
                Este é um projeto de conversão de textos, para ser utilizado pela Soften Sistemas ou qualquer cliente relacionado
                à nossa empresa.
                <br /><br />
                O objetivo deste software é facilitar a conversão de textos entre diferentes formatos e estilos, como:
                <br /><br />

                - Maiúsculo e Minúsculo

                <br />

                - Remover Espaços
                <br />

                - Remover Quebra de Linha
                <br />

                - Formatar CNPJ e CPF
                <br />

                - Formatar SQL

                <br />

                - Remover símbolos

                <br />

                - Comparar Textos

                <br /><br />
                Para usar o software, basta escolher a opção desejada na barra lateral esquerda e iniciar a conversão.
            </span>
        </main>
    </div>
  )
}

export default HomeScreen