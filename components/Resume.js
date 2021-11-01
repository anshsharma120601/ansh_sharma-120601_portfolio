import Navbar from './Navbar';
import classes from './Resume.module.css';

function Resume() {
  return (
    <div className={classes.resume}>
      <Navbar />
      <img src="https://media-exp1.licdn.com/media/AAYUAQR3AAgAAQAAAAAAADLCsANNKVoLQaiL1ISLRdmIqw.png" />
    </div>
  );
}

export default Resume;
