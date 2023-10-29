import UniversalDarkModeSwitch from '@/components/common/UniversalDarkModeSwitch';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.root}>
      <UniversalDarkModeSwitch />
    </main>
  );
}
