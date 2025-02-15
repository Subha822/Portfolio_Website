import React from "react";

const reviews = [
  {
    name: "Liam Bennett",
    company: "CodeCraft",
    review: "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    rating: 5,
  },
  {
    name: "Noah Williams",
    company: "BrightWeb",
    review: "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    rating: 5,
  },
  {
    name: "Ava Thompson",
    company: "TechMosaic",
    review: "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    rating: 5,
  },
  {
    name: "Jonathan Smith",
    company: "Skyline Digital",
    review: "Excellent project with responsive design and great problem-solving skills.",
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
