import React from "react";
import style from './Lista.module.scss';

export default function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '00:30:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '00:20:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '00:10:00'
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className={style.item}>
                        <h3>
                            {tarefa.tarefa}
                        </h3>
                        <span>
                            {tarefa.tempo}
                        </span>
                    </li>

                ))}
            </ul>
        </aside>
    );
}