// import { Component } from 'react';

import { Notification } from './notification/Notification';

import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './static/Static';
import { Section } from './section/Section';
import { useState } from "react";

export const App = () => {

  const initialFeedbeck = {good: 0, neutral: 0,bad: 0};

  const [feedbeck, setFeedbeck]  = useState(initialFeedbeck);


  const changeOneClick = (option) => {
    setFeedbeck((prevFeedback) => ({
         ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }))
  };
  
 const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbeck; 

    return good + neutral + bad

    // return this.state.good + this.state.bad + this.state.neutral
  };


const  countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : (feedbeck.good / total) * 100;
  };



  const renderFedbeck = () =>{
       const { good, neutral, bad } = feedbeck;
    return (

        <Section >
        {countTotalFeedback() === 0 ? (
         <Notification message="There is no feedback !" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            count={countPositiveFeedbackPercentage()}
          />
          )}
        </Section>
          

          )
          }
          return (
      <Section title="Please leave feedback">
        <FeedbackOptions  option={feedbeck}
                onLeaveFeedback={changeOneClick} />
              <Section title="Statistics">

                {renderFedbeck()}
              </Section>
        </Section>)
    
  };
