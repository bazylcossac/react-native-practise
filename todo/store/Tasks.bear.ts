import {create} from "zustand"

export type TaskType = {
    id: string;
    body: string;
    createdAt: Date;
}

type TasksStoreIntialStateType = {
    tasks: Record<string, TaskType>
}

type TasksStoreActions = {
    addTask: (newTask: TaskType) => void
    removeTask: (taskId: TaskType["id"]) => void
    updateTask: (newTask: TaskType) => void
}

type TaskStoreType = TasksStoreIntialStateType & TasksStoreActions

const InitialState: TasksStoreIntialStateType = {
    tasks: {}
}

const useTasks = create<TaskStoreType>((set,get) => ({
    ...InitialState,
    addTask: (newTask) => {
        set(() => ({tasks: {...get().tasks, [newTask.id] : newTask}}))
    },
    removeTask: (taskId) => {
        const localTasks = {...get().tasks}
        delete localTasks[taskId]
        set(() => ({tasks: {...get().tasks}}))
    }, 
    updateTask: (newTask) => {
        set(() => ({tasks: {...get().tasks, [newTask.id] : newTask}}))
    }
}))

export default useTasks