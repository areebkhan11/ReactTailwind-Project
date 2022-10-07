import React from 'react'
import Card from '../components/Card'

export default function Dashboard() {
  const cards = [
    {
      id: 1,
      name: "Today"
    },
    {
      id: 2,
      name: "Overdue"
    },
    {
      id: 3,
      name: "Tickets"
    },
    {
      id: 4,
      name: "Targets"
    }
  ]

  return (
    cards.map(card => {
      return(
        <div>
          <Card card={card}/>
        </div>
      )
    })
  )
}
