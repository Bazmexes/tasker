const initialState = {
    tasks: [
    {name: 'Первая задача', date: '20.20.2020', startAt: '08:40'},
    {name: 'Вторая задача', date: '19.22.2992', startAt: '08:40'},
    {name: 'Третья задача', date: '19.22.2992', startAt: '08:40'},
    {name: 'Четвертая задача', date: '20.20.2020', startAt: '08:40'},

] 
}

export default function( state = initialState, action){
    switch(action.type){

        case 'addTask':{
            return{
                tasks:[...state.tasks, action.payload]
            }
        }
        default:{
            return state
        }
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
//         case 'addTask':{
//             console.log(state)
//             const nameInput = document.getElementById('add-task__name')
//             const startAtInput = document.getElementById('add-task__start-at')
//             const dateInput = document.getElementById('add-task__date')
//             console.log("dateInput is ",dateInput)
//             let task = [{
//                 nameTask: nameInput.value,
//                 dateTask: dateInput.value,
//                 startAt: startAtInput.value
//             }]
//             console.log('state ', state.days)
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
//                 today: state.today,
//                 days: state.days
//             }
//         }
//         case 'addTaskButton':{
//             const form = document.getElementById('addTask')
//             form.classList.toggle('addTask_active')
//             const body = document.querySelector('body')
//             body.classList.toggle('add-task_stop-scroll')

//         }
//         default:
//             return state
//     }
// }



