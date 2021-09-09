import style from "./product.module.scss";

import steps from "../../utils/steps.content.json";

export const Product = () => {
    return (
        <section className={style.productContainer}>
            <h1>Como funciona?</h1>

            <div className={style.productContent}>
                <div className={style.cardContainer}>
                    {steps.map(step => (
                        <div key={step.title} className={style.card}>
                            <img src={step.img}/>
                            <div>
                                <strong>{step.title}</strong>
                                <p>
                                    {step.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}