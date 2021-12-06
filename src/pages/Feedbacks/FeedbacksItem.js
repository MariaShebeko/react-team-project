import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackItemCard = styled.li`
  width: 327px;
  height: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 26px;
  border: 1px solid #dedede;
  border-radius: 5px;
  
  :nth-of-type(1) div {
  background-image: url(${require('../../img/feedbacks/feedback1.jpg').default});
  }
  :nth-of-type(2) div {
  background-image: url(${require('../../img/feedbacks/feedback2.jpg').default});
  }
  :nth-of-type(3) div {
  background-image: url(${require('../../img/feedbacks/feedback3.jpg').default});
  }
`;

const FeedbackRating = styled.ul`
  height: 18px;
  display: flex;
`;

const RatingFilled = styled.li`
  height: 20px;
  width: 20px;
  padding: 2px;
  background-image: url(${require('../../img/svg/starfilled.svg').default});
`;

const RatingEmpty = styled.li`
  height: 20px;
  width: 20px;
  padding: 2px;
  background-image: url(${require('../../img/svg/starempty.svg').default});
`;

const FeedbackText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.75;
`;

const FeedbackAuthor = styled.div`
  height: 50px;
  padding-left: 64px;
  background-repeat: no-repeat;
  background-size: 50px;
`;

const AuthorName = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #02897A;
`;

const AuthorCareer = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.2px;

  color: #252B42;
`;

function FeedbacksItem(props) {
    return (
        <FeedbackItemCard>
            <FeedbackRating>
                <RatingFilled />
                <RatingFilled />
                <RatingFilled />
                <RatingFilled />
                <RatingEmpty />
            </FeedbackRating>
            <FeedbackText>
                Product helps you see how many
                more days you need to work to
                reach your financial goal.
            </FeedbackText>
            <FeedbackAuthor>
                <AuthorName>Wahid Ari</AuthorName>
                <AuthorCareer>Designer</AuthorCareer>
            </FeedbackAuthor>
        </FeedbackItemCard>
    );
}

export default FeedbacksItem;