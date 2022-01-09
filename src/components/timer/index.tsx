import { useState, useEffect } from 'react'

const Index = () => {
 const [workDuration, setWorkDuration] = useState(0);
 const [breakDuration, setBreakDuration] = useState(0);
 const [isPaused, setIsPaused] = useState(false);

 return (
  <div>
   <div className="status"></div>
   <div className="timerDisplay"></div>
   <div className="start-btn"></div>
   <div className="settings"></div>
  </div>
 )
}

export default Index
