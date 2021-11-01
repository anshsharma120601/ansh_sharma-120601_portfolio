import classes from './Copyright.module.css';
import Link from 'next/dist/client/link';

export default function Copyright() {
  return (
    <div className={classes.copyright}>
      <label>Copyright @Ansh Sharma. All rights reserved.</label>
      <p>
        <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" />
        7011061359
      </p>
      <p>
        <g>
          <img src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png" />
        </g>
        <Link href="<https://github.com/anshsharma120601">
          My Github Account
        </Link>
      </p>
      <p>
        <i>
          <img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-app/instagram.jpg?itok=Pyl371sg" />
        </i>
        <Link href="https://www.instagram.com/anshsharma1206/">
          My Instagram Account
        </Link>
      </p>
    </div>
  );
}
