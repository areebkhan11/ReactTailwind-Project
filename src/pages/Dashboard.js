import React from 'react'
import Card from '../components/Card'
import DashboardSection2 from '../components/DashboardSection2'

export default function Dashboard() {
  const cards = [
    {
      id: 1,
      name: "Today",
      color: "#03a9f4"
    },
    {
      id: 2,
      name: "Overdue",
      color: "#f44336"
    },
    {
      id: 3,
      name: "Tickets",
      color: "#ff9800"
    },
    {
      id: 4,
      name: "Targets",
      color: "#607d8b"
    },
    
  ]

  const card2 = [
    {
      id: 1,
      name: "Task Distribution"
    },
    {
      id: 2,
      name: "Team Scheduling"
    }
  ]

  return (
    <div className='grid grid-cols-4 gap-4 place-items-center gap-8 pt-4'>
    {cards.map(card => {
      return(
        <Card card={card}/>
      )
    })}
    {card2.map(card2 => {
      return(
        <DashboardSection2 card2={card2}/>
      )
    })}
    
    </div>
  )
}
