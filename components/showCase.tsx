import { ArrowLeftCircle, ArrowRightCircle, Palette } from 'lucide-react';
import React from 'react';

export default function ShowcaseSection() {
  return (
    <section className="w-full bg-white py-10 overflow-hidden px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="mb-8 border-2 border-dotted border-blue-300 px-4 py-1 rounded-md flex items-center gap-2">
        <Palette className="text-yellow-500" />
        <h2 className="text-blue-900 font-bold text-lg">
          Creatives, Professionals & Talents
        </h2>
      </div>

      {/* Showcase Container */}
      <div className="flex items-center justify-center gap-4 w-full max-w-full relative">
        {/* Left blurred card */}
        
           
        <div className="w-[523px] h-[350px]  absolute -left-60    rounded-2xl flex items-center justify-center">
          <ArrowLeftCircle size={40} className='text-white z-10 relative -left-1/2'/>
          <div className="w-[523px] h-[350px] bg-[#8B5CF6]     rounded-2xl flex items-center justify-center">
            <div className="w-[523px] h-[350px] bg-[#8B5CF6]   blur-sm  rounded-2xl flex items-center justify-center">
              <div className="flex  items-center h-[363px]  w-full justify-btween">
                      <div className="text-white flex flex-col gap-9 w-1/2 flex-wrap justify-between items-start">
                        <h3 className="text-4xl font-bold">🎨Showcase Your Works</h3>
                        <p className="text-xl font-bold">Build Your Portfolio, Creative Talents, & Projects</p>
                        <p className="text-sm">Start My Portfolio</p>
                      </div>
                
                      {/* Portfolio Image */}
                    <img
                      src="../public/section2.1.png"
                      alt="Portfolio Screenshot"
                      className="rounded-lg mt-4 object-contain w-[460px] h-[400px]"
                    />
            </div>
          </div>
          </div>
        </div>
        
          
        

        {/* Main Card */}
        <div className="bg-[#8B5CF6] text-white rounded-3xl p-8 w-[750px] min-h-[463px] shadow-lg">
          <div className="flex  items-center h-[363px]  w-full justify-btween">
            <div className="text-white flex flex-col gap-9 w-1/2 flex-wrap justify-between items-start">
              <h3 className="text-4xl font-bold">🎨Showcase Your Works</h3>
              <p className="text-xl font-bold">Build Your Portfolio, Creative Talents, & Projects</p>
              <p className="text-sm">Start My Portfolio</p>
            </div>
      
            {/* Portfolio Image */}
          <img
            src="../public/section2.1.png"
            alt="Portfolio Screenshot"
            className="rounded-lg mt-4 object-contain w-[460px] h-[400px]"
          />
          </div>
        </div>

        {/* Right blurred card */}
        <div className="w-[523px] h-[350px]  absolute -right-60 rounded-2xl flex items-center justify-center">
          <ArrowRightCircle size={40} className="text-white relative z-10 -right-1/3" />
          <div className="w-[523px] h-[350px] bg-[#8B5CF6]   blur-sm  rounded-2xl flex items-center justify-center">
              <div className="flex  items-center h-[363px]  w-full justify-btween">
                      <div className="text-white flex flex-col gap-9 w-1/2 flex-wrap justify-between items-start">
                        <h3 className="text-4xl font-bold">🎨Showcase Your Works</h3>
                        <p className="text-xl font-bold">Build Your Portfolio, Creative Talents, & Projects</p>
                        <p className="text-sm">Start My Portfolio</p>
                      </div>
                
                      {/* Portfolio Image */}
                    <img
                      src="../public/section2.1.png"
                      alt="Portfolio Screenshot"
                      className="rounded-lg mt-4 object-contain w-[460px] h-[400px]"
                    />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
