import classes from './Projects.module.css';
import Navbar from './Navbar';

export default function Project() {
  return (
    <div className={classes.project}>
      <p>
        <Navbar />
      </p>
      <h1>The projects will be updated soon!</h1>
    </div>
  );
}
