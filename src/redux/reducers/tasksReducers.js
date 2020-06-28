import { act } from "react-dom/test-utils"

const initialState = {
    tasks: [
    {name: 'Первая задача', date: 'Диплом', startAt: '08:40', id: 0, taskIsDone: false},
    {name: 'Вторая задача', date: 'Диплом', startAt: '08:40', id: 2, taskIsDone: false},
    {name: 'Третья задача', date: 'Конференция', startAt: '08:40', id: 3, taskIsDone: false},
    {name: 'Четвертая задача', date: 'Конференция', startAt: '08:40', id: 4, taskIsDone: true},

] 
}



export default function( state = initialState, action){
    switch(action.type){

        case 'addTask':{
            if(action.payload.name===''){
                return state
            }else{
                while(state.tasks.indexOf(action.payload.id)!==-1){
                    console.log( 'id indexOf',action.payload.id, state.tasks.indexOf(action.payload.id) )
                    action.payload.id = Math.floor(Math.random()*2001)
                }
                return{
                    tasks: [...state.tasks, action.payload]
                }
            }
        }
        case 'toggleIsDone':{
            const tasks = [...state.tasks]
            const index = tasks.findIndex(item => item.id==(action.payload))
            tasks[index].taskIsDone = !tasks[index].taskIsDone
            return{
                tasks: [...tasks]
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



