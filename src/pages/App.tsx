import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefa: ITarefa) {
    setSelecionado(tarefa);
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefaAntiga => (
      {
        ...tarefaAntiga,
        selecionado: tarefaAntiga.id === tarefa.id ? true : false
      }
    )))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
