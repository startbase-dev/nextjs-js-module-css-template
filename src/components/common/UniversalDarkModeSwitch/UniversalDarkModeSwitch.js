'use client';

import React, { useEffect, useState } from 'react';

import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import Switch from './Switch';

const UniversalDarkModeSwitch = ({ hidden }) => {
  const storageKey = 'prefers-color-scheme';
  const [theme, setTheme] = useState('dark');

  const applyPreferredColorScheme = (scheme) => {
    for (let s = 0; s < document.styleSheets.length; s++) {
      for (let i = 0; i < document.styleSheets[s].cssRules.length; i++) {
        const rule = document.styleSheets[s].cssRules[i];

        if (
          rule &&
          rule.media &&
          rule.media.mediaText.includes('prefers-color-scheme')
        ) {
          switch (scheme) {
            case 'light':
              rule.media.appendMedium('original-prefers-color-scheme');
              if (rule.media.mediaText.includes('light'))
                rule.media.deleteMedium('(prefers-color-scheme: light)');
              if (rule.media.mediaText.includes('dark'))
                rule.media.deleteMedium('(prefers-color-scheme: dark)');
              break;
            case 'dark':
              rule.media.appendMedium('(prefers-color-scheme: light)');
              rule.media.appendMedium('(prefers-color-scheme: dark)');
              if (rule.media.mediaText.includes('original'))
                rule.media.deleteMedium('original-prefers-color-scheme');
              break;
            default:
              rule.media.appendMedium('(prefers-color-scheme: dark)');
              if (rule.media.mediaText.includes('light'))
                rule.media.deleteMedium('(prefers-color-scheme: light)');
              if (rule.media.mediaText.includes('original'))
                rule.media.deleteMedium('original-prefers-color-scheme');
              break;
          }
        }
      }
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem(storageKey, 'dark');
      applyPreferredColorScheme('dark');
    } else {
      setTheme('light');
      localStorage.setItem(storageKey, 'light');
      applyPreferredColorScheme('light');
    }
  };

  useEffect(() => {
    setTheme(getColorPreference());
  }, []);

  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        setTheme(isDark ? 'dark' : 'light');
        localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
      });
  }, []);

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  };

  return (
    <>
      {!hidden ? (
        <Switch
          name={storageKey}
          handleToggle={toggleTheme}
          isOn={theme === 'dark'}
          offIcon={<RiSunFill />}
          onIcon={<RiMoonFill />}
        />
      ) : null}
    </>
  );
};

export default UniversalDarkModeSwitch;
