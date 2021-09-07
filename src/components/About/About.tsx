import Iframe from 'react-iframe';

import style from "./about.module.scss";

export const About = () => {
    return (
        <section className={style.aboutContainer}>
            <img src="images/wave-top-blue.svg"/>

            <h1>O que construímos</h1>

            <div className={style.aboutContent}>
                <div className={style.aboutContentText}>
                    <p>
                        Nós combinamos uma <strong>plataforma fácil de usar </strong>
                        com um <strong>sensor IoT rápido de implementar</strong>.
                    </p>
                    <br/>
                    <p>
                        Para que todos os profissionais de manutenção tenham acesso ao monitoramento 
                        online de seus equipamentos e um “braço direito” que lhes fornece insights valiosos, 
                        otimiza rotinas e permite tomada de decisões de forma prática e eficaz.
                    </p>
                </div>
                <div className={style.aboutContentVideo}>
                    <Iframe url="https://www.youtube.com/embed/_6NLhkPMo9w"/>
                </div>
            </div>
        </section>
    );
}