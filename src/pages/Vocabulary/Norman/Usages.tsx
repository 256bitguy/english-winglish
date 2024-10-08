import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Stepper } from '../../../components/Stepper';
import { useState } from 'react';
import Accordion from '../../../components/Accordions';

export const Usages = () => {
  const [current, setCurrent] = useState(1);
  const steps = [
    {
      id: 0,
      title: 'Mission',
      subTitle: "Let's see what to complete",
    },
    {
      id: 1,
      title: 'Descriptions',
      subTitle: 'The words along with the ideas',
    },
    {
      id: 2,
      title: 'usages',
      subTitle: 'The words along with the ideas',
    },
  ];
  let words=10
  const usages = [
    {
      id: 0,
      word: 'An Egoist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "abra ka dabra" },
        { id: 1, question: "Historical Contexts", answers: "abra ka dasdfsabra" },
        { id: 2, question: "Idhar Contexts", answers: "abra kasdfsadf dabra" },
        { id: 3, question: "Udhar Contexts", answers: "abra kaasdfsa dabra" },
        { id: 4, question: "Yahavaha Contexts", answers: "abra ksdfsadfa dabra" },
      ],
    },
    {
      id: 1,
      word: 'An Altruist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "caring for others" },
        { id: 1, question: "Historical Contexts", answers: "acts of kindness in history" },
        { id: 2, question: "Idhar Contexts", answers: "selflessness and compassion" },
        { id: 3, question: "Udhar Contexts", answers: "charitable actions" },
        { id: 4, question: "Yahavaha Contexts", answers: "helping the needy" },
      ],
    },
    {
      id: 2,
      word: 'A Realist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "seeing things as they are" },
        { id: 1, question: "Historical Contexts", answers: "realism in art and literature" },
        { id: 2, question: "Idhar Contexts", answers: "practical approaches" },
        { id: 3, question: "Udhar Contexts", answers: "focusing on reality" },
        { id: 4, question: "Yahavaha Contexts", answers: "pragmatic views" },
      ],
    },
    {
      id: 3,
      word: 'An Optimist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "always looking on the bright side" },
        { id: 1, question: "Historical Contexts", answers: "optimism through challenging times" },
        { id: 2, question: "Idhar Contexts", answers: "hopeful outlooks" },
        { id: 3, question: "Udhar Contexts", answers: "believing in positive outcomes" },
        { id: 4, question: "Yahavaha Contexts", answers: "faith in better futures" },
      ],
    },
    {
      id: 4,
      word: 'A Pessimist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "seeing the glass half empty" },
        { id: 1, question: "Historical Contexts", answers: "pessimism during downturns" },
        { id: 2, question: "Idhar Contexts", answers: "expecting the worst" },
        { id: 3, question: "Udhar Contexts", answers: "cynical views" },
        { id: 4, question: "Yahavaha Contexts", answers: "doubting positive changes" },
      ],
    },
    {
      id: 5,
      word: 'A Skeptic',
      context: [
        { id: 0, question: "Literal Contexts", answers: "questioning everything" },
        { id: 1, question: "Historical Contexts", answers: "skepticism in philosophy" },
        { id: 2, question: "Idhar Contexts", answers: "doubting claims" },
        { id: 3, question: "Udhar Contexts", answers: "critical thinking" },
        { id: 4, question: "Yahavaha Contexts", answers: "not taking things at face value" },
      ],
    },
    {
      id: 6,
      word: 'A Minimalist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "living with less" },
        { id: 1, question: "Historical Contexts", answers: "minimalism in design" },
        { id: 2, question: "Idhar Contexts", answers: "focusing on essentials" },
        { id: 3, question: "Udhar Contexts", answers: "decluttering life" },
        { id: 4, question: "Yahavaha Contexts", answers: "simplicity in living" },
      ],
    },
    {
      id: 7,
      word: 'A Humanist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "valuing human dignity" },
        { id: 1, question: "Historical Contexts", answers: "humanism in history" },
        { id: 2, question: "Idhar Contexts", answers: "promoting human welfare" },
        { id: 3, question: "Udhar Contexts", answers: "emphasizing reason" },
        { id: 4, question: "Yahavaha Contexts", answers: "advocating for social justice" },
      ],
    },
    {
      id: 8,
      word: 'An Idealist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "believing in ideals" },
        { id: 1, question: "Historical Contexts", answers: "idealism in philosophy" },
        { id: 2, question: "Idhar Contexts", answers: "pursuing perfection" },
        { id: 3, question: "Udhar Contexts", answers: "visionary thoughts" },
        { id: 4, question: "Yahavaha Contexts", answers: "aspiring for a better world" },
      ],
    },
    {
      id: 9,
      word: 'A Pragmatist',
      context: [
        { id: 0, question: "Literal Contexts", answers: "focusing on practical results" },
        { id: 1, question: "Historical Contexts", answers: "pragmatism in political theory" },
        { id: 2, question: "Idhar Contexts", answers: "being results-oriented" },
        { id: 3, question: "Udhar Contexts", answers: "adapting to circumstances" },
        { id: 4, question: "Yahavaha Contexts", answers: "making practical decisions" },
      ],
    },
  ];
  
   
  

  const nextWord = () => {
    let sizeOfSteps = words;
    if (current < sizeOfSteps - 1) {
      setCurrent((prev) => prev + 1);
    }
  };
  const previousWord = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div>
        <Stepper steps={steps} />
      </div>
      <div className="mt-14 text-center p-4">
        <h1 className="text-5xl font-semibold text-black font-satoshi">
          How to talk about personality types
        </h1>
      </div>
      
      <div className="flex mt-10 justify-between items-center w-11/12">
        <CircleArrowLeft
          size={40}
          onClick={previousWord}
          className={`${current === 0 ? 'opacity-80  ' : 'text-black '}`}
        />
        {usages?.map((item) => {
        return (
          <div
            className={`${
              item.id === current ? 'block' : 'hidden'
            } w-11/12 shadow-4 p-8`}
          >
            <div>
              <h1 className="text-3xl font-bold text-center m-5">
                {item.word}
              </h1>
              
             <div>
              <Accordion items={item.context}/>
              </div>
            </div>
          </div>
        );
      })}
        <CircleArrowRight
          size={40}
          className={`${current === words- 1 ? 'opacity-80  ' : 'text-black '}`}
          onClick={nextWord}
        />
      </div>
    </div>
  );
};
