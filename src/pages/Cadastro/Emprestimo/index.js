/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroEmprestimo() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  let location = useLocation();
  const [livro, setLivro] = useState(location.state);
  const [emprestimos, setEmprestimos] = useState([]);
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
{
  // useEffect(()=>{
  //   console.log("Alou");
  //   const URL = window.location.hostname.includes("localhost") ?
  //   'http://localhost:8080/categorias'
  //   : "https://devsoutinhoflix.herokuapp.com/categorias";
  //   fetch(URL)
  //   .then(async (res) => {
  //       const respost = await res.json()
  //       setEmprestimos([
  //       ...respost,
  //     ]);
  //     });
  //   },[]

  // )
}
 
  return (
    <PageDefault>
      <h1>
        Cadastro de Empréstimo:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setEmprestimos([...emprestimos, values]);
        setValues(valoresIniciais);
        let livrosArray = []
        const livrosEmprestados = localStorage.getItem('livros');
        if(livrosEmprestados !== null)
          livrosArray = JSON.parse(livrosEmprestados);
         
        livrosArray.push(livro.id)
        localStorage.setItem("livros",JSON.stringify(livrosArray))
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
          type="date"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Livro:"
          inputType="number"
          type="number"
          name="livro"
          value={location.state.id}
          onChange={handleChange}
        />
        
        
        <Button as={Button} type="submit">
          Cadastrar
        </Button>

        {emprestimos.length === 0 && <div>
          <br />Loading...
        </div>}

        <ul>
          {emprestimos.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>{categoria.nome}</li>
          ))}
        </ul>

      </form>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroEmprestimo;
