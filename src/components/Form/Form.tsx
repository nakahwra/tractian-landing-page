import style from "./form.module.scss";

export const Form = () => {
    return (
        <section className={style.formContainer}>
            <h1>Melhore seus processos de manutenção</h1>
            <p>Agende uma demonstração</p>

            <div className={style.formContent}>
                <form>
                    <div className={style.personalInfo}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text"/>

                        <label htmlFor="occupation">Cargo</label>
                        <input id="occupation" type="text"/>

                        <label htmlFor="email">E-mail profissional</label>
                        <input id="email" type="email"/>

                        <label htmlFor="tel">Telefone</label>
                        <input id="tel" type="tel"/>
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

                    <button>Agendar demonstração</button>
                </form>
            </div>
        </section>
    );
}