import React from 'react'
import EventCard from '@/components/EventCard'

function Events() {
    return (
        <div className='bg-gray-200 p-5 '>
            <div className='bg-white md:mt-20 mt-32'>
                <div className="relative p-5 pt-10">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="w-full h-12 pl-4 pr-10 rounded-md border-none bg-gray-200 focus:outline-none !important"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.293 13.293a6 6 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M10 16a6 6 0 100-12 6 6 0 000 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-5 px-5 pb-5'>
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div>
            </div>
        </div>
    )
}

export default Events
