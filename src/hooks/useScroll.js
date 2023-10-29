import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > threshold);
    document.documentElement.dataset.scroll = window.scrollY;
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    setScrolled(window.scrollY > threshold);
  }, [onScroll, threshold]);

  return scrolled;
}
