import React from 'react';
import LivroIframeResponsive from './components/LivroIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import Button from '../Button';
import { Link, useHistory } from 'react-router-dom';


export default function BannerMain({
  livro
}) {
  const history = useHistory();
  const idEmprestado = localStorage.getItem('livros');
  debugger;

  let livrosArray = JSON.parse(idEmprestado) ?? [0] ;
  console.log(idEmprestado)

  function arrayRemove(arr, value) { return arr.filter(function(ele){ return ele != value; });}

  const removeBook = () => {
    let msg = window.confirm('Deseja mesmo devolver?');
    if(msg){
      livrosArray = arrayRemove(livrosArray, livro.id)
      debugger;
      localStorage.setItem('livros', JSON.stringify(livrosArray));
      history.push('/');
    }
  }
  return (
    <BannerMainContainer backgroundImage={livro.capa}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {livro.titulo}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {livro.descricao}
          </ContentAreaContainer.Description>
          <ContentAreaContainer.Item>
          {livrosArray.includes(livro.id) ? 
           <Button as={Link} onClick={()=>removeBook()} className="ButtonLink" >Devolver Livro</Button> :
        <Button as={Link} to={{pathname:'/Cadastro',
        state: livro
      }} className="ButtonLink" >Pegar Livro</Button>  
          }
            
          </ContentAreaContainer.Item>
        </ContentAreaContainer.Item>
        
        <ContentAreaContainer.Item>
          <LivroIframeResponsive
            Capa = {livro.capa}
          />

        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
