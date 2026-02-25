import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(state:TaskStateModel, action:TaskActionModel): TaskStateModel{
    switch(action.type){
        case TaskActionTypes.START_TASK:{
     
            const newTask = action.payload
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;
            return {
                ...state,
                activeTask:newTask,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formattedSecondsReamining: formatSecondsToMinutes(secondsRemaining),
                tasks:[...state.tasks, newTask],
            };
        }
        case TaskActionTypes.STOP_TASK:{
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsReamining: '00:00',
                tasks: state.tasks.map(tasks => {
                    if (state.activeTask && state.activeTask.id === tasks.id){
                        return {...tasks,interruptDate: Date.now()};
                    }
                    return tasks
                })                
            };
        }
    }

    return state
}