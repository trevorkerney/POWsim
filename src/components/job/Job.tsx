import '../../css/Job.css'

const Job = (props: {numZeroes: number, message: string}) => {
  return (
    <div id='job'>
      <div id='labels'>
        <p># of zeroes: </p>
        <p>Message: </p>
      </div>
      <div id='data'>
        <p>{props.numZeroes}</p>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default Job;
