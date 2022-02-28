import { ReactElement } from 'react';
import '../../css/Hash.css'

const Hash = (props: {hash: string[]}) => {
  return (
    <div id='hash'>
      {
        props.hash.map((index: string): ReactElement<null> => (
          <p className='hashLine'>
            {index}
          </p>
        ))
      }
    </div>
  );
}

export default Hash;
