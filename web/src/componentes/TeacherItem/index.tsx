import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/38673203?s=460&u=07c6207fc4444f41815d83ea95c30b6015fd8611&v=4" alt="Lucas Lima" />
         <div>
             <strong>Lucas Lima</strong>
             <span>Química</span>
         </div>
        </header>
         <p>
         Entusiasta das melhores tecnologias de química avançada.
         <br /><br />
         Apaixonado por explodir coisas em por mudar a vida das pessoas através das experiências. Mais de 2000.000 pessoas já passaram
         por uma das minhas eplosões.
         </p>

         <footer>
            <p>
                Preço/hora
                <strong> R$ 80,00</strong>
            </p> 
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato" />
                Entrar em contato
            </button>
         </footer>

    </article>
    );

}

export default TeacherItem;