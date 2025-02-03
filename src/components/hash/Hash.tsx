import { ReactElement } from 'react';

import './Hash.scss'

const Hash = (props: {hash: string|null}) => {

  const getWordArray = (): string[] => {
    let wordArray: string[] = [];

    if (props.hash === null) {
      for (let _i = 0; _i < 8; _i++) {
        wordArray.push("".padStart(32, '0'));
      }
    }

    for (let _i = 0; _i < (props.hash as string).length; _i += 32) {
      wordArray.push((props.hash as string).slice(_i, _i + 32));
    }
    return wordArray;
  }

  return (
    <div id='hash'>
      {
        getWordArray().map((index: string): ReactElement<null> => (
          <p className='hashLine' key={Math.random()}>
            {index}
          </p>
        ))
      }
    </div>
  );
}

export default Hash;
