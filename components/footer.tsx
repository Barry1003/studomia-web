import React from 'react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-10 text-sm text-gray-600">
      {/* Logo & Tagline */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-blue-800 text-3xl font-bold">
            {/* Placeholder for logo */}
            <div className="w-6 h-6 bg-blue-700 rounded-full" />
            <span>Studomia</span>
          </div>
          <p className="mt-2 text-gray-500">
            Empowering learners, creators, and educators to thrive with purpose.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-2">🚀 Get Started</h4>
            <ul className="space-y-1">
              <li>Join Free</li>
              <li>Take the Quiz</li>
              <li>Build Profile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🎯 Platform</h4>
            <ul className="space-y-1">
              <li>For Learners</li>
              <li>For Creators</li>
              <li>For Educators</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🎟 Events & Guild</h4>
            <ul className="space-y-1">
              <li>Upcoming Events</li>
              <li>Join the Guild</li>
              <li>Become a Partner</li>
              <li>Host or Sponsor an Event</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🔬 Research & R&D</h4>
            <ul className="space-y-1">
              <li>Join R&D Circle</li>
              <li>Submit Feedback</li>
              <li>Become a Contributor</li>
              <li>Join Our L&D Team</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">📚 Resources</h4>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Research and Insights</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-10 border-t pt-6">
          <h4 className="text-xl font-semibold text-blue-600">Newsletter Signup</h4>
          <p className="mt-1 text-gray-500">📩 Get insights, early access, and Guild updates.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full sm:w-auto px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-300"
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
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-xs gap-4 text-gray-500 border-t pt-4">
          {/* Social Icons */}
          <div className="flex gap-4 text-blue-600">
            <Instagram className="w-5 h-5 hover:scale-110 transition" />
            <Twitter className="w-5 h-5 hover:scale-110 transition" />
            <Linkedin className="w-5 h-5 hover:scale-110 transition" />
            <Youtube className="w-5 h-5 hover:scale-110 transition" />
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-0 text-center">
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
