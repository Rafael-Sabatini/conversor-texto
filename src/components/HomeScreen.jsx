const HomeScreen = () => {
  return (
    <div className="flex flex-col justify-center align-center w-content">
        <h2>Bem vindo!</h2>
        <br /><hr /><br />
        <main>
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

                <br /><br />
                Para usar o software, basta escolher a opção desejada na barra lateral esquerda e iniciar a conversão.
            </span>
        </main>
    </div>
  )
}

export default HomeScreen