import React from 'react';

import styles from './Switch.module.scss';

const Switch = ({ name, isOn, handleToggle, onIcon, offIcon }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={name}
        type="checkbox"
      />
      <label className={styles.switchLabel} htmlFor={name}>
        <span className={styles.switchButton}>{isOn ? onIcon : offIcon}</span>
      </label>
    </>
  );
};

export default Switch;
