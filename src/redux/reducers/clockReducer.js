const date = new Date(),
            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
            console.log(hours + ':' + minutes + ':' + seconds)
const initialState = {
    time: {
        seconds: seconds,
        minutes: minutes,
        hours: hours
    }
}
export default function(state=initialState, action) {
    switch(action.type){
        case 'newTime':{
            return{
                time:{
                    seconds: action.payload.seconds,
                    minutes: action.payload.minutes,
                    hours: action.payload.hours
                }
                
            }
        }
        default: return state
    }
}

