import { act } from 'react-dom/test-utils'

const initialState = {
    tasks: [
        {
            name: 'Первая задача',
            date: 'Диплом',
            startAt: '08:40',
            id: 0,
            taskIsDone: false,
        },
        {
            name: 'Вторая задача',
            date: 'Диплом',
            startAt: '08:40',
            id: 2,
            taskIsDone: false,
        },
        {
            name: 'Третья задача',
            date: 'Конференция',
            startAt: '08:40',
            id: 3,
            taskIsDone: false,
        },
        {
            name: 'Четвертая задача',
            date: 'Конференция',
            startAt: '08:40',
            id: 4,
            taskIsDone: true,
        },
    ],
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
                return {
                    tasks: [...state.tasks, action.payload],
                }
            }
        }
        case 'toggleIsDone': {
            const tasks = [...state.tasks]
            const index = tasks.findIndex((item) => item.id === action.payload)
            tasks[index].taskIsDone = !tasks[index].taskIsDone
            return {
                tasks: [...tasks],
            }
        }
        case 'deleteTask': {
            console.log('action.payload', action.payload)
            const tasks = [...state.tasks]
            const index = tasks.findIndex((item) => item.id === action.payload)
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
