import { MoveDown } from 'lucide-react'


const Hero = () => {
  return (
    <div className="w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center  min-h-screen">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start space-y-4">
          {/* Tagline Row */}
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            <li className="text-base sm:text-lg font-bold text-[#068A41]">🎯 Learn Smarter.</li>
            <li className="text-base sm:text-lg font-bold text-[#068A41]">Create Freely.</li>
            <li className="text-base sm:text-lg font-bold text-[#068A41]">Thrive Together.</li>
          </ul>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D15EA] leading-snug">
            🌍 Studomia is your all-in-one platform for learning, collaboration, and real-world growth.
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#272E3D]">
            Join the all-in-one platform that helps learners, creatives, educators, and institutions unlock their potential. Now onboarding early users across Africa.
          </p>

          {/* Email Form */}
          <form className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border w-full sm:w-[300px] px-4 py-3 rounded-full text-black outline-[#9093F5] border-[#9093F5]"
            />
            <button className="text-base sm:text-lg font-semibold text-white rounded-full px-6 sm:px-8 py-3 sm:py-2 bg-[#2BF388] w-full sm:w-[150px] md:w-[194px] h-[45px] sm:h-[50px]">
              Join Free
            </button>
          </form>

          {/* Privacy Note */}
          <small className="font-semibold text-[#272E3D] text-sm sm:text-base">
            By proceeding you agree to our Platform Terms & Privacy Notice.
          </small>

          {/* Explore Section */}
          <div className="flex flex-row items-center gap-1">
            <MoveDown className="text-[#0D15EA] stroke-[5] h-4" />
            <p className="text-[#068A41] text-base sm:text-lg">Explore</p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img 
            src="/Frame.png" 
            alt="Hero Image" 
            className="w-full max-w-md sm:max-w-lg lg:max-w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
