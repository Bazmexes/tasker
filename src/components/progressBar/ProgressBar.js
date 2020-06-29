import React, {useState, useEffect} from 'react'
import './progressBar.scss'
 const styles = {
  fontSize: '30px'
 }

export default function(props){
  const [dateNow, setDate] = useState(getTime())

  useEffect( () => {
    setInterval(()=>{
      setDate(getTime())
    },1000)

  }, [])

  function getTime(){
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return {hours, minutes, seconds}
  }
  function getWeekDay(){
    const date = new Date()
    const day = date.getDay()
    const weekDays = ["Воскресенье", "Понедельник",'Вторник','Среда','Четверг','Пятница','Суббота',]
    const weekDay = weekDays[day]
    return weekDay
  }
  return(
    <div className="progress-bar">
        <p style={styles}>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p>
        <p>{getWeekDay()}</p>
    </div>
  )
}