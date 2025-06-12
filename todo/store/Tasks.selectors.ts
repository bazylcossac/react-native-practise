import { TaskStoreType } from "./Tasks.bear";


export const getTasks = (state: TaskStoreType) => (
    state.tasks
)

export const getTask = (state: TaskStoreType, id: string) => {
    return state.tasks[id]
}