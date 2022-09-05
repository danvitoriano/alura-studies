import Item from "./Item";
import style from './Lista.module.scss';
import { ITarefa } from "../../types/tarefa";

interface Props {
    tarefas: ITarefa[];
    selecionarTarefa: (tarefa: ITarefa) => void;
}

export default function Lista({tarefas, selecionarTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}