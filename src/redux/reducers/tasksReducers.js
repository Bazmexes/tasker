
const initialState = {
    tasks: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'addTask': {
            if (action.payload.name === '') {
                return state
            } else {
                while (state.tasks.indexOf(action.payload.id) !== -1) {
                    console.log(
                        'id indexOf',
                        action.payload.id,
                        state.tasks.indexOf(action.payload.id)
                    )
                    action.payload.id = Math.floor(Math.random() * 2001)
                }
                console.log(
                    'id indexOf',
                    action.payload.id,
                    state.tasks.indexOf(action.payload.id)
                )
                action.payload.taskIsDone=false
                return {
                    
                    tasks: [...state.tasks, action.payload],
                }
            }
        }
        case 'toggleIsDone': {
            const tasks = [...state.tasks]
            console.log("смотри", tasks, action.payload)
            const index = tasks.findIndex((item) => item.id == action.payload)
            console.log("смотри", tasks, action.payload)
            tasks[index].taskIsDone = !tasks[index].taskIsDone
            return {
                tasks: [...tasks],
            }
        }
        case 'deleteTask': {

            console.log('action.payload', action.payload, state.tasks)
            const index = state.tasks.findIndex(item => item.id == action.payload)
            const tasks = [...state.tasks]

            console.log('findIndex', index)
            tasks.splice(index, 1)
            return {
                tasks: [...tasks],
            }
        }
        default: {
            return state
        }
    }
}
