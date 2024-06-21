import { useEffect } from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Experience from '../components/Experience';

const Homepage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add('animate');
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start box-border">
      <Header currentPage="home" jeffreychenhaColor="text-blue" />
      <section className="w-full flex flex-col items-start justify-start py-8 px-16 box-border gap-16 max-w-screen-lg">
        <Welcome />
        <Experience />
      </section>
    </div>
  );
};

export default Homepage;
