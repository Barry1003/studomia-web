 import { FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F7FFFA]   border-gray-200 px-6 py-10 text-sm text-gray-600">
      {/* Logo & Tagline */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center space-x-2   text-3xl font-bold">
            {/* Placeholder for logo */} 
             <img src="/logo.png" alt="" />
          </div>
          <p className="mt-2 text-sm font-bold text-gray-500">
            Empowering learners, creators, and educators to thrive with purpose.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-2 text-[#3E44F4]">🎯Get Started</h4>
            <ul className="space-y-1 font-bold">
              <li>Join Free</li>
              <li>Take the Quiz</li>
              <li>Build Profile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[#3E44F4]">🧩 Platform</h4>
            <ul className="space-y-1 font-bold">
              <li>For Learners</li>
              <li>For Creators</li>
              <li>For Educators</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[#3E44F4]">🎟 Events & Guild</h4>
            <ul className="space-y-1 font-bold">
              <li>Upcoming Events</li>
              <li>Join the Guild</li>
              <li>Become a Partner</li>
              <li>Host or Sponsor an Event</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[#3E44F4]">🔬 Research & R&D</h4>
            <ul className="space-y-1 font-bold">
              <li>Join R&D Circle</li>
              <li>Submit Feedback</li>
              <li>Become a Contributor</li>
              <li>Join Our L&D Team</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[#3E44F4] ">📚 Resources</h4>
            <ul className="space-y-1 font-bold">
              <li>FAQs</li>
              <li>Research and Insights</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-10   pt-6">
          <h4 className="text-4xl font-light text-[#3E44F4]">Newsletter Signup</h4>
          <p className="mt-1  text-sm font-bold">📩 Get insights, early access, and Guild updates.</p>
          <form className="mt-4 flex flex-col w- sm:flex-row gap-2 sm:items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-1/2 bg-white  px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-[#9093F5]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 flex flex-col  justify-between text-[#0D15EA] items-start text-xs gap-4   pt-4">
          {/* Social Icons */}
          <div className="flex gap-4 text-[#0D15EA]">
            <FaInstagramSquare className="w-5 h-5 hover:scale-110 transition" />
            <FaTwitter className="w-5 h-5 hover:scale-110 transition" />
            <FaLinkedin className="w-5 h-5 hover:scale-110 transition" />
            <FaYoutube className="w-5 h-5 hover:scale-110 transition" />
          </div>
            {/* Policy Links */}
            <div className="flex flex-wrap font-semibold justify-center gap-4 mt-2 sm:mt-0 text-center">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies Preferences</span>
              <span>Data Ethics & R&D Participation Policy</span>
            </div>

            {/* Copyright */}
            <p className="mt-2 sm:mt-0 text-center">
              © {new Date().getFullYear()}, Studomia Guild.
            </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
