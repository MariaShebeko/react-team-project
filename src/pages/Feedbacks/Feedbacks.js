import React from 'react';
// import PropTypes from 'prop-types';
import Container from '../../components/base/Container/Container';
import styled from 'styled-components';
import FeedbacksItem from './FeedbacksItem';
// import filledStar from '../../img/svg/starfilled.svg';
// import emptyStar from '../../img/svg/starempty.svg';

const FeedbacksSection = styled.section`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Heading = styled.h2`
  margin-bottom: 8px;

  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 1.68;

  color: #22343d;
`;

const FeedbacksDescription = styled.p`
  margin-bottom: 50px;

  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.2px;

  color: #737373;
`;

const FeedbacksList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

function Feedbacks(props) {
    return (
        <FeedbacksSection>
            <Container>
                <Heading>What Clients Say</Heading>
                <FeedbacksDescription>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics
                </FeedbacksDescription>
                <FeedbacksList>
                    <FeedbacksItem></FeedbacksItem>
                    <FeedbacksItem></FeedbacksItem>
                    <FeedbacksItem></FeedbacksItem>
                </FeedbacksList>
            </Container>
        </FeedbacksSection>
    );
}

export default Feedbacks;