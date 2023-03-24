import { useState, useEffect } from 'react';
import { Conteiner, Content } from "./styles";

import { api } from "../../services/api";

import { useNavigate } from 'react-router-dom';

import { Section } from '../../componentes/Section';
import { ButtonText } from '../../componentes/ButtonText';

import imgLogo from "../../assets/logo.png"
import imgUser from "../../assets/user.png"
import imgModelo from "../../assets/default.png"

export function Details() {
  const [idPost, setIdPost] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/posts/${id}`);

  }

  useEffect(() => {
    async function fetchIdPost() {
      const response = await api.get("/posts");
      setIdPost(response.data);
    }

    fetchIdPost();
  },[]);

  return (
    <Conteiner>
      <header>
        <img className='logo' src={imgLogo} alt="modelo de imagem" />

        <img className='avatar' src={imgUser} alt="modelo de imagem" />
      </header>

      <Content>
        <Section title="Clique em um post abaixo para ver os detalhes">
          <div className='post'>
            {
              idPost.map(ind => (
                <li key={String(ind.id)} >
                  <img src={imgModelo} alt="modelo de imagem" />
                  <ButtonText 
                    title={ind.title} 
                    onClick={() => handleDetails(ind.id)}
                  />
                  <ButtonText 
                    className="btn"
                    title={"Leia mais >"} 
                    onClick={() => handleDetails(ind.id)}
                  />
                </li>
              ))
            }
          </div>
        </Section>
      </Content>
    </Conteiner>
  )
}