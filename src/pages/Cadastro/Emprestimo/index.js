import React, { useState} from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroEmprestimo() {
  let location = useLocation();
  const history = useHistory();
  const [livro, setLivro] = useState(location.state);
  const [dateNow, setDateNow] = useState(new Date());
  
  const valoresIniciais = {
      nome: localStorage.getItem('nome') != '' ? localStorage.getItem('nome') : '',
      date: `${dateNow.getDate()}/${dateNow.getMonth()+1}/${dateNow.getFullYear()}`,
      livroId: '',
    };

  const [values, setValues] = useState(valoresIniciais);
 
  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Empréstimo:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        if(values.nome === ''){
          alert('O campo "Nome" deve ser preenchido');
        }else{

          let livrosArray = []
          const livrosEmprestados = localStorage.getItem('livros');
          if(livrosEmprestados !== null)
            livrosArray = JSON.parse(livrosEmprestados);
           
          livrosArray.push(livro.id)
          localStorage.setItem("livros",JSON.stringify(livrosArray))
          localStorage.setItem("nome",values.nome)
          alert(`${livro.titulo} Emprestado`);
          history.push('/')
        }
      }}
      >

        <FormField
          label="Nome:"
          inputType="input"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Data de empréstimo:"
          inputType="date"
          type="input"
          name="Data de empréstimo:"
          value={values.date}
        />

        <FormField
          label="Livro:"
          inputType="input"
          type="text"
          name="livro"
          value={livro.titulo}
        />
        
        
        <Button as={Button} type="submit">
          Cadastrar
        </Button>

      </form>
      
    </PageDefault>
  );
}

export default CadastroEmprestimo;
