import React from "react";

const reviews = [
  {
    name: "Sejal Vakharia",
    company: "ACE Overseas Education Consultants",
    role:" Data Research Analyst, Online Event Management Trainee, Summit Co-ordinator, and Email Marketer.",
    review: "She has made valuable contributions in devising social media research techniques and data collection. She has worked with us in all the departments of our company. The work allocated to her was perfectly implemented. The task given to her was completed before the deadline. We highly recommend her.",
    rating: 5,
  },
  {
    name: "Avinash Tewari",
    role:"Business Development Executive",
    company: "9.0 Career Cafe",
    review: "During the course of internship, she has shown great amount of responsibility, sincerity and a genuine willingness to learn and zeal to take on new assignments & challenges. In particular, her coordination skills and communication skills are par excellence and her attention to details are impressive. ",
    rating: 5,
  },
  {
    name: "Balaji M",
    role:"Software Engineer",
    company: "SmartiApps Technologies",
    review: "During her tenure with us, we found she is hard working and her conduct is good.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="text-white py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            {/* Stars */}
            <div className="flex mb-2 font-semibold">
              {review.role}
            </div>
            <div className="flex mb-2">
              {"⭐".repeat(review.rating)}
            </div>
            
            <p className="text-sm mb-4">{review.review}</p>
            <div className="flex items-center mt-4">
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-xs text-gray-400">{review.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
