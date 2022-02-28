import { useState } from 'react';

import Hash from './components/hash/Hash'
import Job from './components/job/Job';
import Fields from './components/fields/Fields';

import './css/POWsim.css';

const POWsim = () => {
  const [currentHash, setCurrentHash] = useState<string[]>([
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000"
  ]);
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [currentNumZeroes, setCurrentNumZeroes] = useState<number>(10);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const numZeroesChangeHandler = (numZeroes: number) => {
    setCurrentNumZeroes(numZeroes);
  }

  const messageChangeHandler = (message: string) => {
    setCurrentMessage(message);
  }

  const workChangeHandler = () => {
    if (isWorking) {
      
    } else {

    }
  }

  return (
    <div id='POWsim'>
      <h3 id='title'><span id='name'>POWsim</span> - proof of work simulator</h3>
      <Hash hash={currentHash} />
      <Job 
        numZeroes={currentNumZeroes}
        message={currentMessage}
      />
      <Fields
        numZeroes={currentNumZeroes}
        message={currentMessage}
        onNumZeroesChange={numZeroesChangeHandler}
        onMessageChange={messageChangeHandler}
      />
      <button 
        id='workButton'
        onClick={workChangeHandler}
      >
        Work!
      </button>
    </div>
  );
}

export default POWsim;
