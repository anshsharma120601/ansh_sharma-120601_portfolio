import classes from './Details.module.css';
import Link from 'next/dist/client/link';

function Details() {
  return (
    <div className={classes.details}>
      <marquee direction="right" behaviour="scroll" width="1400">
        <h1>Ansh Sharma Portfolio</h1>
      </marquee>
      <img src="https://instagram.fdel27-3.fna.fbcdn.net/v/t51.2885-15/e15/p640x640/252579930_4473469059433976_1180141849341548555_n.jpg?_nc_ht=instagram.fdel27-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=q3kZ60Z49pkAX_Cr9hC&edm=ABJHkxYAAAAA&ccb=7-4&oh=efa373174bdff2b376b96d9b046c72e4&oe=6188FBFD&_nc_sid=fa978c&ig_cache_key=MjY5ODA0NjAwNTIwMjIyNzkzOA%3D%3D.2-ccb7-4" />
      <h3>
          <p>
            I have completed (2019)my Schooling / Undergraduation in science and
            maths (PCM) from
            <Link href="https://www.amity.edu/ais/pushpvihar/">
              <u>Amity International School</u>
            </Link>
            Pushp Vihar, Delhi, India.
          </p>
          <p>
            <b>Graduation (2019-2024):</b> Netaji Subhash University of
            Technology
            <Link href="http://aiactr.ac.in/">
              <u>(NSUT), East Campus</u>
            </Link>
            , New Delhi with specialization in Electronics and Communication.
          </p>
          <p>
            <b>Coding Languages :</b>
            <ul>
              <li>Python- Intermediate Level</li>
              <li>Javascript- Intermediate Level</li>
              <li>Html- Expert Level</li>
              <li>CSS- Expert Level</li>
              <li>Reactjs- Intermediate Level</li>
              <li>Nextjs- Intermediate Level</li>
              <li>Matlab- Beginner Level</li>
              <li>Django- Novice/Learning</li>
            </ul>
          </p>
          <p>
            I live in Gurugram, Haryana, India and am fluent in English & Hindi.
          </p>
          <p>
            <b>Area Of Interest:</b> Software Programming / Coding & Business
            Analytics. Looking forward to working as a software engineer and web
            based development programming with an IT company of repute. I am an
            expert in creating codes for automated tests.
          </p>
          <p>
            <b>Further Interests:</b> Looking forward to also learn AI , ML and
            subsequently explore possibilities in research and data science
            based analytics and programming.
          </p>
          <p>
            Finally also would learn about the other side of the net which is
            Database Management Systems (DBMS). Thus learning on the Backend Arm
            of the IT Structure post perfecting my Frontend Skills.
          </p>
          <p>
            <b>Projects:</b> Currently working on developing my personal
            portfolio based on NextJS.
          </p>
      </h3>
    </div>
  );
}

export default Details;
