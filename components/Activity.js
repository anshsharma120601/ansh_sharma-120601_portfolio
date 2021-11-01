import Navbar from './Navbar';
import classes from './Activity.module.css';
import Link from 'next/dist/client/link';

export default function Activity() {
  return (
    <div className={classes.activity}>
      <pre>
        <Navbar />
      </pre>
      <h1>Activities</h1>
      <h2>Working in NGOs</h2>
      <p>
        I have worked in
        <u>
          <Link href="http://www.eklavyatrust.org/"> Eklavya NGO school </Link>
        </u>
        as a science and maths teacher for classes 9th, 10th and 11th. I have
        worked in this NGO for 2 months and looking forward to work in many
        more.
      </p>
      <label>
        <img src="http://www.eklavyatrust.org/wp-content/uploads/2015/04/222.jpg" />
      </label>

      <h2>Odyssey of Mind</h2>
      <p>
        I participated in ODM competition which took place in my school. At that
        time I took part in this contest to have a broad view on world and
        competition. My team of 5 students won gold medal in this contest.
      </p>
      <o>
        <img src="https://www.odysseyofthemind.com/wp-content/uploads/2021/06/OM-Full-Logo-1.png" />
      </o>

      <h2>Amity Cadet Corps</h2>
      <p>
        Since I belonged to family with Army background, I always wanted to see
        what the hype was about and I got a taste of it in ACC. From parades to
        different kinds of activities and living in tents with your friends for
        a week, everything was adventurous and fun.
      </p>
      <img src="https://avatars.githubusercontent.com/u/81307379?s=400&u=808940eb4ed826e74fa3382e9b76d6e18900b938&v=4" />

      <h2>Playing Guitar</h2>
      <p>
        I was very passionate about playing guitar since my school days. I have
        also cleared level3 grade guitar test from trinity college of London
        which one of the most toughest and professional guitar exams. I have in
        many small bands and functions also.
      </p>
      <img src="https://www.trinitycollege.com/images/news/news_placeholder.png" />

      <h2>Bike Riding</h2>
      <p>
        I fell in love with bikes once I was in college. I formed a small group
        with my friends for bike rides and plans. They say that 4wheels carry
        body and 2wheels carry soul.
      </p>
      <img src="https://lh3.googleusercontent.com/a-/AOh14GgjKEwyvRlxVNQjf-qL3INXAMQiRpIpMXuJ6TYvkw=s288-p-rw-no" />
    </div>
  );
}
