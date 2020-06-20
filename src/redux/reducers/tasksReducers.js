
const day = new  Date().toLocaleDateString();
const inialState = {
    tasks: [
        [{nameTask: "Первая задача", dateTask: "12.12.2020", startAt: "08:50"},{nameTask: "Второя задача", dateTask: "12.12.2020", startAt: "08:20"},{nameTask: "Третья задача", dateTask: "12.12.2020", startAt: "08:40"}],
        ],
    today: day,
    days: ['12.12.2020']
}


export default function (state = inialState, action){
    switch(action.type){
        case 'addTask':
            const nameInput = document.getElementById('add-task__name')
            const startAtInput = document.getElementById('add-task__start-at')
            const dateInput = document.getElementById('add-task__date')
            console.log("dateInput is ",dateInput)
            let task = [{
                nameTask: nameInput.value,
                dateTask: dateInput.value,
                startAt: startAtInput.value
            }]
            const indexOfTask = state.days.indexOf(task[0].dateTask)
            
            // const indexOfTask = state.tasks.findIndex(i => i.dateTask === task[0].dateTask);
            if(indexOfTask ===-1){
                state.tasks.push(task)
                state.days.push(task[0].dateTask)
                
            }else{
                state.tasks[indexOfTask].push(task[0])
            }
            console.log(state)
            return {
                ...state,
                days: state.days,
                tasks: state.tasks,
            }
        default:
            return state
    }
    
}






// const day = new  Date().toLocaleDateString();
// const inialState = {
//     tasks: [
//         [{nameTask: "Первая задача", dateTask: "12.12.2020", startAt: "08:50"},{nameTask: "Второя задача", dateTask: "12.12.2020", startAt: "08:20"},{nameTask: "Третья задача", dateTask: "12.12.2020", startAt: "08:40"}],
//         ],
//     today: day,
//     days: ['12.12.2020']
// }


// export default function (state = inialState, action){
//     switch(action.type){
//         case 'addTask':
//             const nameInput = document.getElementById('add-task__name')
//             const startAtInput = document.getElementById('add-task__start-at')
//             const dateInput = document.getElementById('add-task__date')
//             console.log("dateInput is ",dateInput)
//             let task = [{
//                 nameTask: nameInput.value,
//                 dateTask: dateInput.value,
//                 startAt: startAtInput.value
//             }]
//             const indexOfTask = state.days.indexOf(task[0].dateTask)
            
//             // const indexOfTask = state.tasks.findIndex(i => i.dateTask === task[0].dateTask);
//             if(indexOfTask ===-1){
//                 state.tasks.push(task)
//                 state.days.push(task[0].dateTask)
                
//             }else{
//                 state.tasks[indexOfTask].push(task[0])
//             }
//             console.log(state)
//             return {
//                 tasks: state.tasks,
//                 days: state.days,
//                 today: state.today
//             }
//         default:
//             return state
//     }
    
// }