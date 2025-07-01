// FAQSignupSection.tsx
import React, { useState } from "react";
import {
  Mail,
  Link as LinkIcon,
  Instagram,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is the Studomia Academy, and how does it work?",
    answer: "The Studomia Academy is ... [your detailed answer here].",
  },
  {
    question: "How can I enroll in a specific course or program?",
    answer: "To enroll, first ... [your detailed answer here].",
  },
  {
    question:
      "How are the courses taught? Is it all online, or are there in-person components?",
    answer: "Our courses are ... [your detailed answer here].",
  },
];

export default function FAQSignupSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQs */}
        <div>
          <p className="text-sm font-semibold text-green-600">FAQs</p>
          <h2 className="mt-2 text-3xl font-extrabold text-indigo-600">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-700">
            Discover How Studomia Supports Your Amazing Learning Journey!
          </p>

          <div className="mt-6 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center w-full text-left text-indigo-700 font-medium"
                >
                  {faq.question}
                  <span className="ml-4">
                    {openIdx === i ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openIdx === i && (
                  <p className="mt-2 text-gray-800 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sign-Up Form */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Join Studomia Now
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full border border-indigo-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                className="mt-1 block w-full border border-indigo-500 rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option>Educator</option>
                <option>Administrator</option>
                <option>Student</option>
                <option>Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-indigo-600 text-white font-semibold rounded-full px-6 py-3 hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 pt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Mail className="w-6 h-6 text-indigo-600" />
            <LinkIcon className="w-6 h-6 text-indigo-600" />
            <Instagram className="w-6 h-6 text-indigo-600" />
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-indigo-600">
              Educators Guild
            </a>
            <a href="#" className="hover:text-indigo-600">
              Partner With Us
            </a>
            <a href="#" className="hover:text-indigo-600">
              Terms & Privacy
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-6 md:mt-0 text-sm text-gray-500">
            © 2024 Studomia
          </p>
        </div>
      </footer>
    </section>
  );
}
