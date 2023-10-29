'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import useScroll from '@/hooks/useScroll';

import Logo from '@/assets/logo.svg';

import styles from './Header.module.scss';

const Header = () => {
  const ref = useRef();
  const scrolled = useScroll(64);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, []);

  return (
    <header
      ref={ref}
      className={cx(styles.header, {
        [styles.headerScrolled]: scrolled,
        [styles.headerOpen]: isMenuOpen,
      })}
    >
      <div>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
      </div>
      <button
        className={cx(styles.menuButton, {
          [styles.active]: isMenuOpen,
        })}
        onClick={toggleMenu}
      >
        <span className={styles.hamburger}></span>
      </button>
      <nav
        className={cx(styles.navLinks, {
          [styles.active]: isMenuOpen,
        })}
      >
        {/*  Menu */}
      </nav>

      <nav
        className={`${styles.joinLinks} ${styles.navLinks} ${
          isMenuOpen ? styles.active : ''
        }`}
      >
        <a href="#SignIn">Sign In</a>
        <a href="#SignUp">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
