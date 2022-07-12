import styles from './Stars.module.scss'

import React from 'react'
import Flex from '../../containers/Flex/Flex'
import { SVG } from './../../../utils/const';

function Stars({ rating, stars, changeStars,  feedback}) {
  const rootClasses = [styles.stars_wrapper, feedback && styles._feedback]

  const obj = {
    'undefined': '',
  }

  // theme && rootClasses.push(obj[theme])

  const getStars = (rating) => {
    const starCount = 5
    const halfStar = rating % Math.floor(rating)
    let stars = []

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<img key={`one-stars-${i}`} src={SVG.star.fill} />)      
    }

    if (halfStar > 0)  
      halfStar >= 0.5 ? 
        stars.push(<img key={`two-stars-${1}`} src={SVG.star.half} />)
        :
        stars.push(<img key={`two-stars-${2}`} src={SVG.star.empty} />)

    for (let i = 0; i < Math.floor(starCount - rating); i++) {
      stars.push(<img key={`three-stars-${i}`} src={SVG.star.empty} />)      
    }

    stars.push(<p>{rating.toFixed(1)}</p>)

    return stars
  }

  const getFeedbackStars = (stars) => {
    const starCount = 5
    let constent = []

    for (let i = 0; i < stars; i++) {
      constent.push(<img key={`one-feedback-stars-${i}`} src={SVG.star.fill} onClick={() => changeStars({rate: i+1})} />)
    }

    for (let i = stars; i < starCount; i++) {
      constent.push(<img key={`two-feedback-stars-${i}`} src={SVG.star.empty} onClick={() => changeStars({rate: i+1})} />)  
    }

    constent.push(<p>{stars}</p>)

    return constent
  }

  return (
    <div className={rootClasses.join(' ')}>
      <Flex gap={4}>
        {
          feedback ? 
            getFeedbackStars(stars)
            :
            rating ? getStars(rating) : <span>Нет отзывов</span>
        }
      </Flex>
    </div>
  )
}

export default Stars