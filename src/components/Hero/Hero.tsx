import Link from "next/link";

import style from './hero.module.scss';

export const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <header className={style.headerContainer}>
                <img src="images/logo.svg" alt="Tractian logo"/>
            </header>

            <div className={style.heroContent}>
                <p className={style.heroPrimary}>
                    <strong>
                        O sistema preditivo <br/>
                        mais completo do mercado.
                    </strong>
                </p>
                <p className={style.heroSecondary}>
                    Evite falhas nas suas máquinas e torne o tempo de inatividade <br/>
                    uma coisa do passado com o sistema preditivo da TRACTIAN
                </p>

                <Link href="#form">
                    <a className={style.heroCTA}>
                        <strong>
                            Agendar demonstração
                        </strong>
                    </a>
                </Link>
                
            </div>
        </div>
    )
}
