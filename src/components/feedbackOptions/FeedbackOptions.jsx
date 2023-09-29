import { nanoid } from 'nanoid';

import { ButtonsStyle } from './FeedbackOption.styled';

export const FeedbackOptions  = ({ onLeaveFeedback, option }) => {
  return ( 
    <ButtonsStyle>
    {Object.keys(option).map(feedback => (
          <button
            className="button"
            type="button"
            key={nanoid()}
            onClick={() => onLeaveFeedback(feedback)}
          >
            {feedback}
          </button>
        ))}
    </ButtonsStyle>
  );
};
// Это предотвратит вызов map на option, если option не является массивом, и избежит ошибки.





