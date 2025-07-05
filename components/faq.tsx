import  { useState } from "react";

import { IoIosPlayCircle } from "react-icons/io";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "❓ What is Studomia, really?",
    answer: `
Studomia is a learner-first, creator-powered education and career platform. It’s where you can learn smarter, showcase your creativity, build your teaching practice, and connect with schools and mentors — all in one connected experience.

🎯 From portfolio building to data-informed leadership tools, Studomia brings together learning, creativity, and opportunity.
    `,
  },
  {
    question: "❓ Who is Studomia for?",
    answer: `
Studomia is built for:

👩‍🎓 Learners and students discovering their strengths and future paths  
🎨 Creatives and professionals showcasing work and monetizing talent  
🧑‍🏫 Educators, mentors, and trainers designing impact-driven lessons  
🏫 Institutions managing schools and fostering cultural innovation  

💡 Not sure where you fit? Take our 1-minute quiz to find out where to start.`,
  },
  {
    question: "❓ What can I do on Studomia right now?",
    answer: `
You can:  

• Build your learner or creative profile\n  
• Apply to join our upcoming events and pilot programs\n  
• Participate in research to shape the platform\n  
• Get invited to early-access product experiences\n  
• Contribute to the Guild as a mentor, exhibitor, or co-designer\n  

🚀 Join the platform waitlist now and claim your early supporter benefits.`,
  },
  {
    question: "❓ What is the Studomia Guild?",
    answer: `
The Studomia Guild is our community engine — it powers events, co-creation labs, exhibitions, summits, and executive sessions where real collaboration happens.

🤝 When you join the Guild, you’re not just attending — you're building the future of learning and creativity with us.

📝 Apply for a Guild Event or R&D Circle`,
  },
  {
    question: "❓ How does Studomia personalize learning?",
    answer: `
Through our platform’s smart learning insights, we help you:  

• Discover your unique learning style  
• Track skills and progress  
• Get AI-powered content recommendations  
• Build a learning path from school to career  

🧠 It's like a digital mentor that grows with you.`,
  },
  {
    question: "❓ Is Studomia free?",
    answer: `
Yes — signing up is free. You’ll get access to learning tools, profile setup, and events.  

💡 In the future, premium features may be added with flexible pricing — and early users will get lifetime discounts and perks.  

🎁 Get early access & perks`,
  },
  {
    question: "❓ How can I contribute or collaborate?",
    answer: `
We’re inviting educators, creators, students, organizations, and schools to:  

• Join our R&D pilot programs\n  
• Submit feedback\n  
• Host workshops\n  
• Sponsor events\n  
• Share your teaching resources or learning innovations\n  

🌟 Become a Guild Contributor or Partner`,
  },
  {
    question: "❓ When is Studomia launching?",
    answer: `
We’re currently in pre-launch and onboarding select users into our waitlist, pilot programs, and Guild events.  

🚀 Our first Guild experiences begin rolling out in the next 2–3 months — platform tools will follow in stages based on feedback and pilot results.

👀 Want in early? Join the waitlist & co-create with us.`,
  },
];


export default function FAQSignupSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="bg-[#F7FFFA] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
        {/* FAQs */}
        <div> 
          <h2 className="my-2 text-3xl font-extrabold text-[#455A64]">
           🎯 Still Curious? Let’s Clear Things Up.
          </h2> 

          <div className="mt-6  space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b cursor-pointer border-gray-200 pb-4">
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between cursor-pointer items-center w-full text-left text-indigo-700 font-medium"
                >
                  {faq.question}
                  <span className="ml-4">
                    <IoIosPlayCircle
                      className={`w-5 h-5 transform cursor-pointer text-[#0D15EA] transition-transform duration-300 ${
                        openIdx === i ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>
                {openIdx === i && (
                  <p className="mt-2 text-gray-800 font-bold text-sm whitespace-pre-line">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sign-Up Form */}
        <div className="bg-transparent p-8 rounded-2xl  flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#455A64] mb-6 text-center">
            Join Studomia Now
          </h3>
          <form className="space-y-6">
            <div> 
              <input
                type="email"
                placeholder="Email Address"
                className="block w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2B32F3] focus:border-[#2B32F3]  transition"
              />
            </div>

            <div> 
              <select
                className="block w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2B32F3] focus:border-[#2B32F3]  transition"
              >
                <option>Educator</option>
                <option>Administrator</option>
                <option>Student</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B32F3] text-white font-semibold rounded-full px-6 py-4 hover:bg-[#2B32F3] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
