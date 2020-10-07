import React from 'react';
import LivroIframeResponsive from './components/LivroIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import Button from '../Button';
import { Link } from 'react-router-dom';

export default function BannerMain({
  livro
}) {
  const idEmprestado = localStorage.getItem('@biblioteca/livroId');
  const nomeEmprestado = localStorage.getItem('@biblioteca/livroNome');
  console.log(idEmprestado)
  console.log(nomeEmprestado)
  const handleSubmit = (livroId) => {
    // const username = e.target.elements.username.value;
    console.log(livroId)
    // localStorage.setItem('@biblioteca/username', username);
    // window.location.reload();
  }
  const removeBook = () => {
    let msg = prompt('Deseja mesmo devolver?');
    if(msg.toLowerCase().includes('sim')){
      localStorage.removeItem('@biblioteca/livroId');
    }
    window.location.reload()
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
          {idEmprestado == livro.id ? 
           <Button onClick={()=>removeBook()} className="ButtonLink" >Devolver Livro</Button> :
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
