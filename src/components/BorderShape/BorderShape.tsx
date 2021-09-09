import style from './borderShape.module.scss';

interface BorderShapeProps {
    path: string,
    background: string,
}

export const BorderShape = ({ path, background }: BorderShapeProps) => {
    return (
        <div style={{background: background}}className={style.container}>
            <img className={style.borderShape} src={path}/>
        </div>
    )
}