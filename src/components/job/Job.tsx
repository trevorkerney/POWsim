import './Job.scss'

const Job = (props: {numZeroes: number, message: string, pow: number, isWorking: boolean, isPOWFound: boolean}) => {
  return (
    <div
      id='job'
      style={
        props.isWorking ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }
    >
        <p id='powLabel'>Proof of work:</p>
        <p 
          id='pow' 
          style={
            (props.isPOWFound)
            ? {
              color: '#25ca56'
            } : {
              color: 'inherit'
            }
          }
        >
          {props.pow}
        </p>
        <p id='zeroesLabel'># of zeroes:</p>
        <p id='zeroes'>{props.numZeroes}</p>
        <p id='messageLabel'>Message:</p>
        <p id='message'>{props.message}</p>
    </div>
  );
}

export default Job;
