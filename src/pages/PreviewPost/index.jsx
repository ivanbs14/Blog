import { useState, useEffect } from "react";
import { Conteiner } from "./styles";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { useNavigate } from 'react-router-dom';

import { ButtonText } from "../../componentes/ButtonText";
import { Section } from "../../componentes/Section";

export function PreviewPost() {
    const [data, setData] = useState(null);
    const [dataComent, setDataComent] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    function backDetails() {
        navigate(`/`);

    }

    useEffect(() => {
        async function fetchPost() {
            const response = await api.get(`/posts/${params.id}`);
            setData(response.data);
        }
        
        fetchPost();
    }, []);

    useEffect(() => {
        async function fetchComent() {
            const response = await api.get(`/posts/${params.id}/comments`);
            setDataComent(response.data);
        }

        fetchComent();
    }, [])
    
    return (
        <Conteiner> 

            {
                data &&
                <main>
                    <ButtonText 
                      title="< Voltar" 
                      onClick={backDetails}
                    />

                    <h1>{data.title}</h1>
                    
                    <p>{data.body}</p>

                    {
                        dataComent &&
                        <Section title="Comentários">
                            {
                                dataComent.map(post => (
                                    <li key={String(post.id)}>
                                        <p>{post.name}</p>
                                        {post.body}
                                    </li>
                                ))
                            }
                        </Section>
                    }
                </main>
            }
        </Conteiner>
    )
};