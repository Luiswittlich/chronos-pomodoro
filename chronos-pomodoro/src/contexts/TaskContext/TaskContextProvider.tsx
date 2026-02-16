import { useState } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

type TaskContextPrviderProps = {
    children: React.ReactNode,
}

export function TaskContextProvider({children}: TaskContextPrviderProps){
    const[state, setState] = useState(initialTaskState)

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}