export default function observeObjectAnimation(element, className) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); 
          console.log('added hero' );
        }else{
            entry.target.classList.remove('fade-in');
        }
      });
    },
    { threshold: 0.25 } // Trigger when 10% of the element is visible
  );
  observer.observe(element);
}