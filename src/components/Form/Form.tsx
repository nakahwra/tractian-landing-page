import style from "./form.module.scss";

export const Form = () => {
    return (
        <section id="form" className={style.formContainer}>
            <h1>Melhore seus processos de manutenção</h1>
            <p>Agende uma demonstração</p>

            <div className={style.formContent}>
                <form>
                    <div className={style.personalInfo}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" placeholder="Insira seu nome"/>

                        <label htmlFor="occupation">Cargo</label>
                        <input id="occupation" type="text" placeholder="Insira seu cargo"/>

                        <label htmlFor="email">E-mail profissional</label>
                        <input id="email" type="email" placeholder="seu@email.com"/>

                        <label htmlFor="tel">Telefone</label>
                        <input id="tel" type="tel" placeholder="(99) 99999-9999"/>
                    </div>

                    <span>Quantidade de pontos monitorados</span>
                    <div className={style.pontos}>
                        <div>
                            <label>
                                <input name="machines" type="radio"/>
                                10-20
                            </label>
                        </div>
                        <div>
                            <label>
                                <input name="machines" type="radio"/>
                                21-30
                            </label>
                        </div>
                        <div>
                            <label>
                                <input name="machines" type="radio"/>
                                31-50
                            </label>
                        </div>
                        <div>
                            <label>
                                <input name="machines" type="radio"/>
                                    Mais de 50
                                </label>
                        </div>
                    </div>
                    
                    <button type="submit" >Agendar demonstração</button>
                </form>
            </div>
        </section>
    );
}