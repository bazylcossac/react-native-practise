import {create} from "zustand"

const mockTasks = {
    "1": {
        id: "1",
        body: "mockttest",
        createdAt: Date.toString()
    },
    "2": {
        id: "1",
        body: "mockttest2",
        createdAt: Date.toString()
    }
}


export type TaskType = {
    id: string;
    body: string;
    createdAt: string;
}

type TasksStoreIntialStateType = {
    tasks: Record<string, TaskType>
}

type TasksStoreActions = {
    addTask: (newTask: TaskType) => void
    removeTask: (taskId: TaskType["id"]) => void
    updateTask: (newTask: TaskType) => void
}

export type TaskStoreType = TasksStoreIntialStateType & TasksStoreActions

const InitialState: TasksStoreIntialStateType = {
    tasks: mockTasks
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



