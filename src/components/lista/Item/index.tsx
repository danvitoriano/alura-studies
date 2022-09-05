import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

interface Props extends ITarefa {
    selecionarTarefa: (tarefa: ITarefa) => void;
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionarTarefa}: Props) {
    console.log('item atual', {tarefa, tempo, selecionado, completado, id, selecionarTarefa});
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionarTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
} 