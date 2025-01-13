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
        bg-slate-800
        rounded-md
        shadow-lg
        overflow-x-none
      ">
      <h1 className="mb-10 text-center text-4xl">Bem vindo!</h1>
        
        <main>
        <hr className="mb-10 border-3" />
            <span>
                Este é um projeto de conversão de textos, para ser utilizado pela Soften Sistemas, <strong>NÃO É PERMITIDO USO PARA CLIENTES</strong>
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
                <br /> <br />
                <strong>IMPORTANTE</strong>
                <br />
                Esse projeto está em uma versão inicial, bugs estão propensos a ocorrer e também a estilização vai mudar bastante, qualquer bug por favor enviar uma mensagem no Discord
                com evidência e de preferência uma descrição de como ocorreu. Qualquer sugestão é bem vinda
            </span>
        </main>
    </div>
  )
}

export default HomeScreen