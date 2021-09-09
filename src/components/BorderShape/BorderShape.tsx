import style from './borderShape.module.scss';

interface BorderShapeProps {
    path: string,
    background: string,
    bottom?: boolean,
}

export const BorderShape = ({ path, background, bottom=false }: BorderShapeProps) => {
    return (
        <div style={{background: background}}className={style.container}>
            <img style={{ margin: bottom ? "0 0 -1px" : "" }} className={style.borderShape} src={path}/>
        </div>
    )
}