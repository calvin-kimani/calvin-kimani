export function createIntersectionObserver(
  element: HTMLElement,
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
        // Unobserve after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
  return observer;
}
