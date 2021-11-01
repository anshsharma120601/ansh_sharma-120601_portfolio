import Link from 'next/link';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <div className={classes.navbar}>
      <p>
        <label>
          <Link href="/">
            <b>Home</b>
          </Link>
        </label>
        <label>
          <Link href="/resume">
            <b>Resume</b>
          </Link>
        </label>
        <label>
          <Link href="/certificates">
            <b>Certificates</b>
          </Link>
        </label>
        <label>
          <Link href="/my_projects">
            <b>My Projects</b>
          </Link>
        </label>
        <label>
          <Link href="/activities">
            <c><b>Co-curricular Activities</b></c>
          </Link>
        </label>
        <label>
          <Link href="mailto:anshsharma120601@gmail.com">
            <b>Email Me</b>
          </Link>
        </label>
      </p>
    </div>
  );
}

export default Navbar;
