import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../workers/timeWorkerManager"

type TaskContextPrviderProps = {
    children: React.ReactNode,
}

export function TaskContextProvider({children}: TaskContextPrviderProps){
    const[state, dispatch] = useReducer(taskReducer, initialTaskState)

    const worker = TimerWorkerManager.getInstance()

    worker.onMessage(e => {
        const countDownSeconds = e.data
        console.log(e.data)

        if(countDownSeconds <= 0){
            console.log('worker COMPLETED!')
            worker.terminate()
        }
    })

    useEffect(()=>{
        if(!state.activeTask){
            console.log('worker terminado por flta de active task')
            worker.terminate()
        }

        worker.postMessage(state)
    }, [worker, state])
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}