const tasks = [{
    id: 1,
    name: "Fillipe",
    completed: false
}, {
    id: 2,
    name: "Guilherme",
    completed: false
}]

const getTasks = () => tasks;

const addTask = (taskName) => {
    const novaTarefa = {
        id: tasks.lenght + 1,
        name: taskName,
        completed: false
    }
    tasks.push(novaTarefa)
}

const removeTask = (taskId) => {
    const index = tasks.findIndex((task) => task.id === taskId)

    tasks.splice(index,1)
}

const updateTask = (taskId,props) => {
    const index = tasks.findIndex((task) => task.id === taskId)

    tasks[index] = {id: taskId,props} 
    tasks[index].completed = props.completed
}

export {getTasks, removeTask, addTask, updateTask};