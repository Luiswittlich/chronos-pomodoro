import styles from './styles.module.css'

import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";


export function MainForm(){
  function handleCreateNewTask(event:React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    console.log('deu certo')
  }


    return(
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput labelText='Task:' id='input' type='text' placeholder='Digite algo...' />
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