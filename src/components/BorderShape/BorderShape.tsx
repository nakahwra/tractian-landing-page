import style from './borderShape.module.scss';

interface BorderShapeProps {
    path: string,
}

export const BorderShape = ({ path }: BorderShapeProps) => {
    return (
        <div className={style.container}>
            <img className={style.borderShape} src={path}/>
        </div>
    )
}