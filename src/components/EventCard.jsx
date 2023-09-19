import React from 'react'

function EventCard() {
    return (
        <a href="/events/event">
            <div className='bg-white shadow-xl hover:translate-y-[-10px] transition-transform duration-50 ease-in-out'>
                <div className='h-36 bg-blue-700'>

                </div>
                <div className='p-3 '>
                    <h1 className='font-medium text-xl text-gray-900  '>New Event</h1>
                    <h2>4 December 2022</h2>
                </div>

            </div>
        </a>
    )
}

export default EventCard
