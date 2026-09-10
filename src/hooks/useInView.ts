import { useRef, useState, useEffect } from 'react';

/**
 * Fires once when the target element enters the viewport.
 * GPU-friendly — no scroll listeners, pure IntersectionObserver.
 */
export function useInView<T extends Element = HTMLDivElement>(
  threshold = 0.08,
  rootMargin = '0px 0px -60px 0px'
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fires once — no ongoing cost
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView] as const;
}
