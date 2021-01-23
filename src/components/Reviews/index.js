import React, { useState } from "react"
import { Button } from "../../styles/ComponentStyles"
import { H2, H4 } from "../../styles/TextStyles"
import { reviewData } from "./reviewData"
import Dots from "react-carousel-dots"

import {
  ReviewSlider,
  LeftArrow,
  RightArrow,
  Wrapper,
  Review,
  Avatar,
} from "./Reviews.styled"
export const Reviews = () => {
  const [current, setCurrent] = useState(0)
  const length = reviewData.length

  const nextReview = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevReview = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1), 5000)

  console.log(current)

  if (!Array.isArray(reviewData) || reviewData.length <= 0) {
    return null
  }

  return (
    <ReviewSlider>
      <H2>What they've said</H2>

      {reviewData.map((review, index) => {
        return (
          <Review key={review.id}>
            {index === current && (
              <>
                <Avatar src={review.image} alt={review.name} />
                <h4>{review.name}</h4>
                <p>{review.text}</p>

                <Dots length={length} active={index} />
              </>
            )}
          </Review>
        )
      })}
      <Button>Get Started</Button>
    </ReviewSlider>
  )
}
