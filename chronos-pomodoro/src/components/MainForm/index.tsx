import styles from './styles.module.css'

import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';


export function MainForm(){
  const { setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)
    
  

  function handleCreateNewTask(event:React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Por favor, digite um nome válido!')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name:taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate:null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
          config: {...prevState.config},
          activeTask:newTask,
          currentCycle: 1, //Conferir
          secondsRemaining: secondsRemaining,
          formattedSecondsReamining: '00:00',
          tasks:[...prevState.tasks, newTask],
      }
    })
  }


    return(
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput 
              labelText='Task:' 
              id='input' 
              type='text' 
              placeholder='Digite algo...' 
              ref={taskNameInput}
            />
          </div>

          <div className={styles.formRow}>
            <p>Próximo intervalo é de 25 min.</p>
          </div>

          <div className={styles.formRow}>
            <Cycles />
          </div>

          <div className={styles.formRow}>
            <DefaultButton color='green' icon={<PlayCircleIcon/>}/>
          </div>
        </form>
    )
}