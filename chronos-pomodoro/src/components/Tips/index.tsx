import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCicleType } from "../../utils/getNextCycleType";


export function TipsForTasks (){
const { state } = useTaskContext()
const nextCycle = getNextCycle(state.currentCycle);
const nextCycleType = getNextCicleType(nextCycle);
      //TIPS ---------------------------------------------
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min.</span>,
    shortBreakTime: <span>Descanso curto de {state.config.shortBreakTime} min.</span>,
    longBreakTime: <span>Descanso longo de {state.config.longBreakTime} min.</span>,
  }

   const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo é de {state.config.workTime} min.</span>,
    shortBreakTime: <span>Proximo descanso é de {state.config.shortBreakTime} min.</span>,
    longBreakTime: <span>Proximo descanso será longo.</span>,
  }
  return <>
        {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
        {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
}