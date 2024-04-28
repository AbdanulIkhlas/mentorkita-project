import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRating from "../Elements/starRating";
import MentorReview from "./MentorReview";
import mentors from "../../data/mentors";

const MyMentorCard = ({ name, status, photo, rating, course, ratingBadge }) => {
  const ratingInNumber = Number(rating);
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  
  const toggleReviewVisibility = () => {
    setIsReviewVisible(!isReviewVisible);
  };

  return (
    <main
      className={`font-poppins mb-4 w-full shadow-cardShadow py-[10px] px-5 rounded-lg bg-[#ECF1FF] ${
        status === "not my mentor" ? "hidden" : "block"
      }`}
    >
      <section className="flex gap-6 py-2">
        {/* photo */}
        <div className="flex">
          {ratingBadge}
          <img
            src={photo}
            alt={name}
            className="rounded-[10px] w-[100px] object-cover self-center"
          />
        </div>
        <div className="flex flex-col justify-center gap-1 text-left">
          {/* nama */}
          <p className="text-base font-bold">{name}</p>
          {/* course */}
          <p className="text-[10px] font-normal mb-1">{course}</p>
          {/* Rating */}
          <div className={` ${status === "Done" ? "block" : "hidden"} mb-2`}>
            <StarRating rating={ratingInNumber} />
          </div>
          {/* status */}
          <div
            className={`${
              status === "Done" ? "hover:bg-[#081C87]" : "hover:bg-[#27B2DD]"
            }
            bg-[#081C87] text-white text-base font-bold w-36 py-2 text-center rounded-[10px] duration-300`}
            onClick={toggleReviewVisibility}
          >
            {status}
          </div>
          {isReviewVisible && status === "Review" && (
            <MentorReview
              mentor={mentors.find((mentor) => mentor.status === "Review")}
              onClose={() => setIsReviewVisible(false)}
            />
          )}
        </div>
      </section>
    </main>
  );
};

MyMentorCard.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  photo: PropTypes.string,
  rating: PropTypes.string,
  course: PropTypes.string,
};

export default MyMentorCard;
