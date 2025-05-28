import { useState } from "react";
import { CircleUserRound } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 1000;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const comment = testimonial?.comment || "";
  const isLong = comment.length > maxLength;
  const displayedComment = isExpanded ? comment : comment.slice(0, maxLength);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-2xl p-8 text-text-primary h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-bg-card opacity-10 transform -skew-x-12"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          {/* <img
            src={testimonial?.authorSrc}
            alt="Avatar"
            className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"
          /> */}
          <CircleUserRound
            className="w-12 h-12 rounded-full text-white"
            strokeWidth={1.2}
          />
          <div>
            <h4 className="para-md font-semibold text-white">
              {testimonial?.authorTitle}
            </h4>
            <p className="para-sm text-white">{testimonial?.authorSubtitle}</p>
          </div>
        </div>
        <svg
          className="w-12 h-12 mt-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="para-md mt-4 text-white">
          {displayedComment}
          {isLong && (
            <span
              onClick={toggleReadMore}
              className="ml-2 text-sm underline cursor-pointer text-purple-200"
            >
              {isExpanded ? "Read less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
