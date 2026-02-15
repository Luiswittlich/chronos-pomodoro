import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
   tasks: TaskModel[]; //Historico, Mainform
   secondsRemaining: number; //CountDown, Histórico, MainForm, Button
   formattedSecondsReamining: string; //Titulo, CountDown
   activeTask: TaskModel | null; //CountDown, Histórico, MainForm, Button
   currentCycle: number; //1 a 8 - Home
   config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
   };
};