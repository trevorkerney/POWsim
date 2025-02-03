import './Fields.scss'

const Fields = (props: {
  numZeroes: number, 
  message: string, 
  onNumZeroesChange: (numZeroes: number) => void, 
  onMessageChange: (message: string) => void
  isWorking: boolean
}) => {

  const handleNumZeroesChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onNumZeroesChange(parseInt(event.target.value));
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    props.onMessageChange(event.target.value);
  }
  
  return (
    <div
      id='fields'
      style={
        props.isWorking ? {
          display: 'none'
        } : {
          display: 'flex'
        }
      }
    >

      <p id='numZeroesText'># of zeroes</p>
      <input 
        type='number'
        id='numZeroes'
        min='0'
        max='256'
        defaultValue={props.numZeroes}
        onChange={handleNumZeroesChange}
        
      />

      <p id='messageText'>Message</p>
      <textarea 
        id='message'
        placeholder='Message'
        defaultValue={props.message}
        onChange={handleMessageChange}
      />

    </div>
  );
}

export default Fields;
