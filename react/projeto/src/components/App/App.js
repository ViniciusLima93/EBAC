/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import BasicRating from '../Rating/rating';
import ImageAvatars from '../Avatar/avatar';

import linkedinLogo from '../../assets/linkedin_logo.png'
import githubSVG from '../../assets/gitHub_logo.png'

import * as S from './styles'

function App() {
  return (
   <S.Content>
    <S.Header>
    <ImageAvatars />
    </S.Header>
    <BasicRating />
    <hr />
    <S.AboutMe>
      <S.AboutmeLabel>Sobre mim:</S.AboutmeLabel>
      
      <S.Aboutme>
        Desenvolvedor Fullstack com 1 ano de experiencia em JavaScript, React e NodeJs.
        Sou apaixonado por inovação, aprendizado contínuo, e solução de problemas complexos.
        Busco constantemente aprimorar as minhas habilidades e competências,
        e me manter atualizado com as tendências e demandas do mercado de tecnologia     
      </S.Aboutme>
    </S.AboutMe>
    <hr />
    <S.Experience>
      <S.ExperienceLabel>Experiências Profissionais:</S.ExperienceLabel>
      
      <S.JobExperiences>

        <S.DescriptionJob>
        <strong>Empresa:</strong>  
        <span>Meta</span> 
        <strong>Cargo: </strong>
         <span>Desenvolvedor Fullstack</span>
         </S.DescriptionJob>  
        
        <S.DescriptionJob>
        <strong>Empresa:</strong>  
        <span>X (antigo Twitter)</span> 
        <strong>Cargo: </strong>
         <span>Desenvolvedor Fullstack</span>
         </S.DescriptionJob>

         <S.DescriptionJob>
        <strong>Empresa:</strong>  
        <span>Google</span> 
        <strong>Cargo: </strong>
         <span>Desenvolvedor Fullstack</span>
         </S.DescriptionJob>  
        
        <S.DescriptionJob>
        <strong>Empresa:</strong>  
        <span>Nubank</span> 
        <strong>Cargo: </strong>
         <span>Desenvolvedor Fullstack</span>
         </S.DescriptionJob>

        </S.JobExperiences>

    </S.Experience>
    <hr />
    <S.Contact>
      <S.ContactLAbel>Contatos:</S.ContactLAbel>
      
     
      <S.ImageContacts>
      <a href='https://www.linkedin.com/in/vinicius-lima-9a041b139/' target='_blank' rel="noreferrer"><S.LinkedinIcon src={linkedinLogo}></S.LinkedinIcon></a>
      <a href='https://github.com/ViniciusLima93' target='_blank' rel="noreferrer"><S.GitIcon src={githubSVG}></S.GitIcon></a>
 
      </S.ImageContacts>
    </S.Contact>
    
   </S.Content>
   
  );
}

export default App;
