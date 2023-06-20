import "./Notes.scss";
import ButtonCommon from "../../components/ButtonCommon/ButtonCommon";
import Card from "../../components/Card/Card";

function Notes() {
  return (
    <>
      <form className="novoFormulario" action="">
        <input placeholder="Escreva um nome para a tarefa" type="text" />

        <input
          placeholder="Descreva como gostaria de ser lembrado desta tarefa"
          type="text"
        />

        <div className="botoesForm">
          <ButtonCommon conteudo="fechar" largura="50%" />
          <ButtonCommon conteudo="postar" largura="50%" />
        </div>
      </form>

      <Card nome="Minha tarefa" descricao="o que eu quiser" />
      <Card nome="Minha tarefa" descricao="o que eu quiser" />
      <Card
        nome="Minha tarefa"
        descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae maiores laborum, velit nemo officia, minus, cupiditate accusamus architecto labore autem voluptates fuga illum rerum sed natus doloribus officiis corrupti?"
      />
    </>
  );
}

export default Notes;
