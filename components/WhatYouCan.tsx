import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
 

const userTypes = [
  {
    title: 'Learners & Students',
    emoji: '🧑‍🎓',
    avatars: [
      '../public/Avater1.0.png',
      '../public/Avater1.1.png',
    ],
    PlayIcon: <PlayIcon className="text-[#ADB0FA] text-lg" />,
  },
  {
    title: 'Creatives & Professionals',
    emoji: '🎨',
    avatars: [
      '../public/Avater1.2.png',
      '../public/Avater1.3.png',
    ],
    PlayIcon: <PlayIcon className="text-[#D2AAE9] text-lg" />,
  },
  {
    title: 'Educators & Teachers',
    emoji: '🧑‍🏫',
    avatars: [
      '../public/Avater1.4.png',
      '../public/Avater1.5.png',
    ],
    PlayIcon: < PlayIcon className="text-[#CFF7D3] text-lg" />,
  },
  {
    title: 'Administrators & School Leaders',
    emoji: '🏫',
    avatars: [
      '../public/Avater1.6.png',
      '../public/Avater1.7.png',
    ],
    
    PlayIcon: < PlayIcon className="text-[#CBFFDE] text-lg" />,
  },
]

const WhatYouCanDo = () => {
  return (
    <div className="w-full px-6 py-12 flex flex-col items-center bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#3C4BFF] mb-10 text-center">
        What Can You Do on Studomia Today?
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {userTypes.map((user, index) => (
          <div
            key={index}
            className="bg-white border border-[#D3D3FD] rounded-xl px-4 py-6 flex flex-col items-center shadow-sm hover:shadow-md transition"
          >
            {/* Joined Avatars */}
            <div className="relative w-[100px] flex item-center h-[100px] mb-4">
              <img
                src={user.avatars[0]}
                alt="Avatar 1"
                className="absolute left-0 w-full h-full bg-red-100 rounded-full object-cover border border-white shadow-sm"
              />
              <img
                src={user.avatars[1]}
                alt="Avatar 2"
                className="absolute left-15 w-full h-full bg-blue-200 rounded-full object-cover border border-white shadow-sm"
              />
            </div>

            {/* Title with emoji */}
            <p className="text-center text-md font-semibold text-[#2D2D2D]">
              <span className="mr-1">{user.emoji}</span> {user.title}
            </p>

            {/* Play icon */}
            <span className="mt-2 stroke-fill">{user.PlayIcon}</span>
          </div>
        ))}
      </div>

      {/* Selected Badge */}
      <div className="bg-[#F7FFFA] p-8 rounded-full text-[#050962] font-bold text-2xl">
        🎨 Learners, Students
      </div>
    </div>
  )
}

export default WhatYouCanDo
