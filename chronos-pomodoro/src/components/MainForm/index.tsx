import styles from './styles.module.css'

import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCicleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';


export function MainForm(){
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCicleType(nextCycle);
  

  console.log(state)
    
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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
          config: {...prevState.config},
          activeTask:newTask,
          currentCycle: nextCycle, 
          secondsRemaining: secondsRemaining,
          formattedSecondsReamining: formatSecondsToMinutes(secondsRemaining),
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

          {state.currentCycle > 0 &&(

          <div className={styles.formRow}>
            <Cycles />
          </div>
          )}
          <div className={styles.formRow}>
            <DefaultButton color='green' icon={<PlayCircleIcon/>}/>
          </div>
        </form>
    )
}