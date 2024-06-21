import { useEffect } from 'react';
import Header from '../components/Header';
import AboutMeContent from '../components/MeContent';

const AboutMe = () => {
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
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start box-border">
      <Header currentPage="about" jeffreychenhaColor="text-darkslategray" />
      <main className="flex-1 overflow-hidden flex flex-col items-start justify-center pt-9 pb-32 pr-24 pl-24 box-border gap-20 max-w-full">
        <AboutMeContent />
      </main>
    </div>
  );
};

export default AboutMe;
