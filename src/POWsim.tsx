import { useEffect, useState } from 'react';
import { SHA256, enc } from 'crypto-js';

import './POWsim.scss';

import Hash from './components/hash/Hash'
import Job from './components/job/Job';
import Fields from './components/fields/Fields';
import Info from './components/info/Info';

const POWsim = () => {
  const workingSpeed: number = 4; // milliseconds

  const [currentHash, setCurrentHash] = useState<string>(
    "".padStart(256, '1')
  );
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [currentNumZeroes, setCurrentNumZeroes] = useState<number>(10);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [currentPOW, setCurrentPOW] = useState<number>(0);
  const [isPOWFound, setIsPOWFound] = useState<boolean>(false);

  const numZeroesChangeHandler = (numZeroes: number) => {
    setCurrentNumZeroes(numZeroes);
  }

  const messageChangeHandler = (message: string) => {
    setCurrentMessage(message);
  }

  const workChangeHandler = (): void => {
    if (isWorking) {
      setIsPOWFound(false);
      setIsWorking(false);
      const timer = setTimeout(() => {
        setCurrentHash("".padStart(256, '1'));
        return () => clearTimeout(timer);
      }, workingSpeed);
    } else {
      if (currentMessage.length > 0) {
        setCurrentPOW(0);
        setIsWorking(true);
      } else {
        alert("You must input a message.");
      }
    }
  }

  useEffect(() => {

    const testPOW = () => {
      const hash = SHA256(`${currentMessage}---${currentPOW}`);
      const hex = hash.toString(enc.Hex);
      const bin = BigInt('0x' + hex).toString(2).padStart(256, '0');
      setCurrentHash(bin);
      if (bin.startsWith("".padStart(currentNumZeroes, '0'))) {
        setCurrentHash(bin);
        setIsPOWFound(true);
        return true;
      }
      return false;
    }

    if (isWorking && !isPOWFound)
    {
      const timer = setInterval(() => {
        if (testPOW()) {
          return () => clearTimeout(timer);
        }
        setCurrentPOW((prev) => (prev += 1));
      }, workingSpeed);
      return () => clearTimeout(timer);
    }
    
  }, [isWorking, currentPOW, isPOWFound, currentMessage, currentNumZeroes])

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
        isPOWFound={isPOWFound}
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
          ? (isPOWFound)
            ? {
              backgroundColor: '#25ca56',
              border: '2px #1f9b44 outset'
            } : {
              backgroundColor: '#be4444',
              border: '2px #a03a3a outset'
            }
          : {
            backgroundColor: '#25ca56',
            border: '2px #1f9b44 outset'
          }
        }
      >
        {
          (isWorking)
          ? (isPOWFound)
            ? "Reset!"
            : "Stop!"
          : "Work!"
        }
      </button>
      <Info />
    </div>
  );
}

export default POWsim;
