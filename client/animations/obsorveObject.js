export default function observeObjectAnimation(element, className) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }else{
            entry.target.classList.remove('fade-in');
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(element);
}