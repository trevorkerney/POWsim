import { useEffect, useState } from 'react';

import { SHA256, enc } from 'crypto-js';

import hexToBin from './ts/hexToBin';

import Hash from './components/hash/Hash'
import Job from './components/job/Job';
import Fields from './components/fields/Fields';

import './css/POWsim.css';

const POWsim = () => {

  const [currentHash, setCurrentHash] = useState<string>(
    "".padStart(256, '1')
  );
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [currentNumZeroes, setCurrentNumZeroes] = useState<number>(10);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [currentPOW, setCurrentPOW] = useState<number>(0);

  const numZeroesChangeHandler = (numZeroes: number) => {
    setCurrentNumZeroes(numZeroes);
  }

  const messageChangeHandler = (message: string) => {
    setCurrentMessage(message);
  }

  const workChangeHandler = () => {
    if (isWorking) {
      setIsWorking(false)
    } else {
      if (currentMessage.length > 0) {
        setIsWorking(true)
      } else {
        alert("You must input a message.");
      }
    }
  }

  const testPOW = () => {
    const hash = SHA256(`${currentMessage}---${currentPOW}`);
    const hex = hash.toString(enc.Hex);
    const bin = hexToBin(hex).padStart(256, '0');
    setCurrentHash(bin);
    if ((currentHash as string).startsWith("".padStart(currentNumZeroes, '0'))) {
      setCurrentHash(currentHash);
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (isWorking)
    {
      const timer = setInterval(() => {
        if (testPOW()) {
          return () => clearTimeout(timer);
        }
        setCurrentPOW((prev) => (prev += 1));
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setCurrentPOW(0);
    }
  }, [isWorking, currentPOW])

  return (
    <div id='POWsim'>
      <header>
        <h1 id='title'>POWsim</h1>
        <h3 id='subtitle'>proof of work simulator</h3>
      </header>
      <Hash hash={currentHash} />
      <Job 
        numZeroes={currentNumZeroes} 
        message={currentMessage} 
        pow={currentPOW} 
        isWorking={isWorking} 
      />
      <Fields
        numZeroes={currentNumZeroes} 
        message={currentMessage} 
        onNumZeroesChange={numZeroesChangeHandler} 
        onMessageChange={messageChangeHandler} 
        isWorking={isWorking}
      />
      <button 
        id='workButton'
        onClick={workChangeHandler}
        style={
          (isWorking) 
          ? {
            backgroundColor: '#be4444',
            border: '2px #a03a3a outset'
            
          } : {
            
            backgroundColor: '#25ca56',
            border: '2px #1f9b44 outset'
          }
        }
      >
        {
          (isWorking)
          ? "Stop!"
          : "Work!"
        }
      </button>
    </div>
  );
}

export default POWsim;
