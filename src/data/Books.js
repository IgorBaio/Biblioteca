import datascience from "../assets/img/DataScience.jpg";
import OUltimoDesejo from "../assets/img/O_ultimo_desejo.jpg";
import O_Viking from "../assets/img/o_viking.jpg";
import Berserk from "../assets/img/Berserk.jpg";
import mitologia_nordica from "../assets/img/mitologia_nordica.jpg";
import deuses_americanos from "../assets/img/deuses_americanos.jpg";
const livros = [
  {
    "id":1,
    "titulo": "Berserk Volume 1",
    "capa":Berserk,
    "url": "https://drive.google.com/file/d/1hjcFRMduIa_eYSMT0Rs-NQsTCfa3sqz6/view?usp=sharing",
    "descricao":"Desde a ressurreição de Griffith, o mundo começou a perder a sua forma original. O surgimento de Qliphot – o território das trevas – é a prova de que as fronteiras do mundo real com o plano etéreo estavam ruindo de pouco a pouco. Guts, Schierke e Isidro deparam com a cena mais horripilante do mundo nas profundezas de Qliphot... Eis a demonstração de todo o potencial desta fantástica história originada no país do sol nascente!",
    "emprestimo":false
  },
  {
    "id":2,
    "titulo": "Data Science do zero: Primeiras regras com o Python",
    "capa":datascience,
    "url": "https://drive.google.com/file/d/1h506mQMlQD-DklT_9hCjepoVe0iZSjvu/view?usp=sharing",
    "descricao":"Obtenha um curso intensivo em Python; Aprenda o básico de álgebra linear, estatística e probabilidade — e entenda como e quando eles são usados em data science; Explore sistemas recomendados, processamento de linguagem natural, análise de rede, MapReduce e bases de dados.",
    "emprestimo":false
  },
  {
    "id":3,
    "titulo": "O Último desejo",
    "capa":OUltimoDesejo,
    "url": "https://drive.google.com/file/d/1XhpeaVSHsVXxAI3qjbqqHq4u4MfA0q6q/view?usp=sharing",
    "descricao":"Geralt de Rívia é um personagem estranho, um mutante que, graças à magia e a um longo treino, mas também a um misterioso elixir, se tornou um assassino perfeito. ... E Geralt dedica-se a viajar por terras pitorescas, ganhando a vida como caçador de monstros.",
    "emprestimo":false
  },
  {
    "id":4,
    "titulo": "O viking",
    "capa":O_Viking,
    "url": "https://drive.google.com/file/d/1wjzfIVF4wc6MoeoyVNlHtzgoZsbwKBnN/view?usp=sharing",
    "descricao":"O guerreiro viking Brage Nordwald é temido por todos - exceto por uma mulher que poderia ser seu maior prêmio - ou maior destruição.\nInvicto na batalha, Brage Nordwald espera outra vitória quando invadir a costa saxônica. Em vez disso, ele sofre uma derrota esmagadora que o deixa gravemente ferido...",
    "emprestimo":false
  },
  {
    "id":5,
    "titulo": "Mitologia Nórdica",
    "capa":mitologia_nordica,
    "url": "https://drive.google.com/file/d/1wjzfIVF4wc6MoeoyVNlHtzgoZsbwKBnN/view?usp=sharing",
    "descricao":"As lendas nórdicas sempre tiveram uma forte influência no universo de Neil Gaiman. Em Mitologia Nórdica, o multipremiado autor regressou às suas fontes para criar quinze contos relacionados com a grande saga dos deuses escandinavos, que inspiraram a sua obra-prima Deuses Americanos. Da génese do mundo ao crepúsculo dos deuses e à era dos homens, eles readquirem vida: Odin, o mais poderoso dos deuses, sábio, corajoso e astuto; Thor, seu filho, incrivelmente forte mas turbulento; Loki, filho de um gigante e irmão de Odin, ardiloso e manipulador... Orgulhosas, impulsivas e arrebatadoras, estas divindades míticas transmitem-nos a sua apaixonante - e muito humana - história.",
    "emprestimo":false
  },
  {
    "id":6,
    "titulo": "Deuses Americanos",
    "capa":deuses_americanos,
    "url": "https://drive.google.com/file/d/1wjzfIVF4wc6MoeoyVNlHtzgoZsbwKBnN/view?usp=sharing",
    "descricao":"American Gods é um romance de Neil Gaiman. O romance é uma mistura de fantasia e várias vertentes da mitologia antiga e moderna, tudo centralizado em um misterioso e taciturno protagonista Shadow. É o quarto romance de Neil Gaiman, sendo precedido por Good Omens, Neverwhere e Stardust",
    "emprestimo":false
  }
]
//   "categorias": [
//     {
//       "titulo": "Data Science",
//       "link": "https://www.google.com/search?q=Data+Science+do+zero:+Primeiras+regras+com+o+Python&sxsrf=ALeKk02Zz2r-L9Zl67MYtihz-kbdgFuY3g:1601912199308&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjzjef8453sAhVUGrkGHcJkBNgQ_AUoAnoECBgQBA&biw=1366&bih=618#imgrc=AFRRLrrYQWOrwM",
//       "cor": "#6BD1FF",
//       "link_extra": {
//         "text": "Data Science do zero: Primeiras regras com o Python",
//         "url": "https://www.google.com/search?q=Data+Science+do+zero:+Primeiras+regras+com+o+Python&sxsrf=ALeKk02Zz2r-L9Zl67MYtihz-kbdgFuY3g:1601912199308&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjzjef8453sAhVUGrkGHcJkBNgQ_AUoAnoECBgQBA&biw=1366&bih=618#imgrc=AFRRLrrYQWOrwM"
//       },
//       "videos": [
//         {
//           "titulo": "O que faz uma desenvolvedora front-end? #HipstersPontoTube",
//           "url": "https://www.youtube.com/watch?v=ZY3-MFxVdEw"
//         },
        
           
//       ]
//     },
//     {
//       "titulo": "Back End",
//       "cor": "#00C86F",
//       "link_extra": {
//         "text": "Cursos de Back End na Alura",
//         "url": "https://www.alura.com.br/cursos-online-programacao"
//       },
//       "videos": [
//         {
//           "titulo": "PERCURSO em NÍVEL em ÁRVORE BINÁRIA | Estruturas de Dados #14",
//           "url": "https://www.youtube.com/watch?v=UOK7nS2E9xM"
//         },
//         {
//           "titulo": "Coders4Tips - S01E04: GitHub CLI - Uma Nova Experiência no Github!",
//           "url": "https://www.youtube.com/watch?v=6o6-bKOZOEY"
//         },
//         {
//           "titulo": "Programei 4 robôs que criam vídeos para mim no YouTube",
//           "url": "https://www.youtube.com/watch?v=kjhu1LEmRpY"
//         },
//         {
//           "titulo": "API: Dicionário do Programador",
//           "url": "https://www.youtube.com/watch?v=vGuqKIRWosk"
//         }, 
//         {
//           "titulo": "Usando Git Direito",
//           "url": "https://www.youtube.com/watch?v=6OokP-NE49k"
//         }
//       ]
//     },
//     {
//       "titulo": "Data Science e Inteligência Artificial",
//       "cor": "#9cd33b",
//       "link_extra": {
//         "text": "Cursos de Data Science na Alura",
//         "url": "https://www.alura.com.br/formacao-data-science"
//       },
//       "videos": [
//         {
//           "titulo": "Teste de Turing",
//           "url": "https://www.youtube.com/watch?v=BaPGU4JWa34"
//         },
//         {
//           "titulo": "O que é Data Science?",
//           "url": "https://www.youtube.com/watch?v=5b9Z8toVaAU&t=9s"
//         },
//         {
//           "titulo": "Melhor forma de aprender Python",
//           "url": "https://www.youtube.com/watch?v=Gojqw9BQ5qY"
//         },
//         {
//           "titulo": "Como ingressar no mercado de Data Science?",
//           "url": "https://www.youtube.com/watch?v=gxyjGmOV540"
//         }
//       ]
//     },
//     {
//       "titulo": "Filmes",
//       "cor": "orange",
//       "videos": [
//         {
//           "titulo": "Interestellar",
//           "url": "https://www.youtube.com/watch?v=frD_IiY_A3E"
//         },
//         {
//           "titulo": "Gattaca",
//           "url": "https://www.youtube.com/watch?v=Dl0tYLbrhhs"
//         },
//         {
//           "titulo": "A Chegada",
//           "url": "https://www.youtube.com/watch?v=rNciXGzYZms"
//         },
//         {
//           "titulo": "Feitiço do Tempo",
//           "url": "https://www.youtube.com/watch?v=zi8d69P9NvI"
//         }
//       ]
//     },
//     {
//       "titulo": "Games",
//       "cor": "red",
//       "link_extra": {
//         "text": "Formação de Jogos na Alura",
//         "url": "https://www.alura.com.br/formacao-jogos-unity"
//       },
//       "videos": [
//         {
//           "titulo": "Final Fantasy 7",
//           "url": "https://www.youtube.com/watch?v=I_ATSCTnUD8"
//         },
//         {
//           "titulo": "Assassins Creed Valhalla",
//           "url": "https://www.youtube.com/watch?v=KDfdjB9uL0U"
//         },
//         {
//           "titulo": "God of War 4",
//           "url": "https://www.youtube.com/watch?v=FyIwEFXOcaE"
//         },
//         {
//           "titulo": "Resident Evil 8",
//           "url": "https://www.youtube.com/watch?v=JSapXD9vxYA"
//         },
//         {
//           "titulo": "Pokémon Let's Go Pikachu/Eevee",
//           "url": "https://www.youtube.com/watch?v=L56q_k2ydrs"
//         }
//       ]
//     },
//     {
//       "titulo": "Aprendendo a aprender tecnologia",
//       "cor": "#6b5be2",
//       "link_extra": {
//         "text": "Curso sobre aprendizado na Alura",
//         "url": "https://alura.com.br/curso-online-aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento"
//       },
//       "videos": [
//         {
//           "titulo": "Como estudar melhor?",
//           "url": "https://www.youtube.com/watch?v=Is6c9KSGCbk&feature=youtu.be"
//         },
//         {
//           "titulo": "Faculdade",
//           "url": "https://www.youtube.com/watch?v=jw06H8esyzQ&feature=youtu.be"
//         },
//         {
//           "titulo": "Frameworks",
//           "url": "https://www.youtube.com/watch?v=QzDjdlF1BQI"
//         },
//         {
//           "titulo": "A mágica do Aprendizado",
//           "url": "https://www.youtube.com/watch?v=oTEXzpfEpPY"
//         },
//         {
//           "titulo": "Como aprender a programar?",
//           "url": "https://www.youtube.com/watch?v=MwCx2qKdbDw&feature=youtu.be"
//         }
//       ]
//     }
//   ]
// }

export default livros;