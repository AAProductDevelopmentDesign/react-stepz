import React from 'react';

import { useStepProgress, StepProgressBar } from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import './index.css';
import './App.css';

const step1Content = <h1>Step 1</h1>;
const step2Content = <h1>Step 2</h1>;
const step3Content = <h1>Step 3</h1>;
const step4Content = <h1>Step 4</h1>;

function step2Validator() {
  return true;
}

function step3Validator() {
  return false;
}

function App() {

  const steps = [
    {
      label: 'Step 1',
      name: 'step 1',
      content: step1Content
    },
    {
      label: 'Step 2',
      name: 'step 2',
      content: step2Content,
      validator: step2Validator
    },
    {
      label: 'Step 3',
      name: 'step 3',
      content: step3Content,
      validator: step3Validator,
    },
    {
      label: 'Step 4',
      name: 'step 4',
      content: step4Content
    }
  ];

  const { stepForward, stepBackwards, getBarProps, currentIndex } = useStepProgress({
    steps,
    startingStep: 0,
  });

  return (
    <div class="app">
      <StepProgressBar {...getBarProps}/>
      <div className="step-buttons">
        <a
          className={`
            step-action-btn
            action-btn-secondary
            ${currentIndex === 0 && 'disabled'}
          `}
          onClick={() => stepBackwards()}>
          Previous
        </a>
        <a
          className={`
            step-action-btn
            action-btn-primary
            ${currentIndex === steps.length - 1 && 'disabled'}
          `}
          onClick={() => stepForward()}>
          Next
        </a>
      </div>
    </div>
  );
}

export default App;
