import { RiNpmjsLine, RiTwitterXLine } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';

import Logo from '@/assets/logo.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Logo className={styles.logo} />
          <h2>
            <span className={styles.colorful}>Templates</span> and{' '}
            <span className={styles.colorful}>Boilerplates</span>,
          </h2>
          <h3>Effortless code, Modern practices.</h3>
          <br />
          <p>
            12 Arcadia Avenue, Dephna House #123, London, United Kingdom, N3 JKB
          </p>
          <p>Registered in England and Wales No: 12345 </p>
        </div>
        <div className={styles.content}>
          <div>
            <h3>Links</h3>
            <ul>
              <li>Boilerplates</li>
              <li>Templates</li>
              <li>OSS</li>
              <li>Log In</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>License</li>
              <li>Disclaimer</li>
              <li>Term of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li>
                <VscGithub />
                @startbase-dev
              </li>
              <li>
                <RiNpmjsLine />
                @start-base
              </li>
              <li>
                <RiTwitterXLine />
                @start_base_dev
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.rights}>
        © {new Date().getFullYear()} StartBase - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
