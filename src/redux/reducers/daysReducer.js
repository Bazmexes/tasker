const initialState = {
    days: ['Диплом', 'Конференция'],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'addDay': {
            if (state.days.indexOf(action.payload) !== -1) {
                return {
                    days: [...state.days],
                }
            } else {
                return {
                    days: [...state.days, action.payload],
                }
            }
        }
        case 'deleteDay': {
            console.log("action.payload", action.payload)
            const index = state.days.indexOf(action.payload)
            const days = [...state.days]
            days.splice(index, 1)
            return {
                days: [...days],
            }
        }
        default: {
            return state
        }
    }
}
