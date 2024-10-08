import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Stepper } from '../../../components/Stepper';
import { useState } from 'react';

export const Descriptions = () => {
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
  ];
  const words = [
    {
      id: 0,
      word: 'An Egoist',
      idea: 'Me First',
      explain: 'Your attitude to life is simple, direct, and above board.',
    },
    {
      id: 1,
      word: 'Altruist',
      idea: 'Others First',
      explain: 'You prioritize the needs and welfare of others above your own.',
    },
    {
      id: 2,
      word: 'Realist',
      idea: 'Facing Reality',
      explain:
        'You deal with situations as they are, not as you wish them to be.',
    },
    {
      id: 3,
      word: 'Idealist',
      idea: 'Dream Big',
      explain: 'You believe in and strive for high ideals and principles.',
    },
    {
      id: 4,
      word: 'Nihilist',
      idea: 'Nothing Matters',
      explain:
        'You hold the view that life is without objective meaning or purpose.',
    },
    {
      id: 5,
      word: 'Pessimist',
      idea: 'Negative Outlook',
      explain:
        'You tend to see the worst aspect of things or believe that the worst will happen.',
    },
    {
      id: 6,
      word: 'Optimist',
      idea: 'Positive Outlook',
      explain:
        'You tend to see the positive side of things and expect good outcomes.',
    },
    {
      id: 7,
      word: 'Pragmatist',
      idea: 'Practical Approach',
      explain:
        'You focus on practical solutions and results rather than theories.',
    },
    {
      id: 8,
      word: 'Skeptic',
      idea: 'Question Everything',
      explain:
        'You doubt and question the validity or authenticity of something.',
    },
    {
      id: 9,
      word: 'Introvert',
      idea: 'Recharge Alone',
      explain:
        'You feel more comfortable and energized by spending time alone or in small groups.',
    },
    {
      id: 10,
      word: 'Extrovert',
      idea: 'Energized by Others',
      explain:
        'You gain energy from being around other people and socializing.',
    },
    {
      id: 11,
      word: 'Ambivert',
      idea: 'Balance of Both',
      explain:
        'You exhibit qualities of both introversion and extroversion, depending on the situation.',
    },
  ];

  const nextWord = () => {
    let sizeOfSteps = words.length;
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
      {words?.map((item) => {
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
              <h1 className="text-xl font-semi-bold m-5 text-center">
                {item.idea}
              </h1>
              <div className="shadow-2 p-10 text-center w-full">
                <p className="m-5 font-thin text-lg">{item.explain}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex mt-10 justify-between w-11/12">
        <CircleArrowLeft
          size={40}
          onClick={previousWord}
          className={`${current === 0 ? 'opacity-80  ' : 'text-black '}`}
        />
        <CircleArrowRight
          size={40}
          className={`${current === words.length - 1 ? 'opacity-80  ' : 'text-black '}`}
          onClick={nextWord}
        />
      </div>
    </div>
  );
};
