import React from 'react'
import styles from '../../styles/styles'
import EventCard from './EventCard/EventCard.jsx'

const Events = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className={styles.section}>
        <div className={styles.heading}>
          <h1 className="text-white">Popular Events</h1>
        </div>
        <div className="w-full grid">
            <EventCard />
        </div>
      </div>
    </div>
  )
}

export default Events