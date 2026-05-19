import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import { HERO_BG_IMAGE, HERO_IMAGE, SITE_LOGO_IMAGE, JAPANESE_BADGE_IMAGE } from './constants';

const SignatureDrinks = lazy(() => import('./components/SignatureDrinks'));
const FoodMenu = lazy(() => import('./components/FoodMenu'));
const AnimeWall = lazy(() => import('./components/AnimeWall'));
const Community = lazy(() => import('./components/Community'));
const SocialGallery = lazy(() => import('./components/SocialGallery'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const criticalImages = [
      HERO_BG_IMAGE,
      HERO_IMAGE,
      SITE_LOGO_IMAGE,
      JAPANESE_BADGE_IMAGE,
      '/poster-img.png'
    ];

    let loadedCount = 0;
    const totalImages = criticalImages.length;

    const updateProgress = () => {
      loadedCount++;
      const progress = (loadedCount / totalImages) * 100;
      setLoadingProgress(progress);

      if (loadedCount === totalImages) {
        // Reduced delay for a faster feel
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    };

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

    // Fallback safety timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-primary-orange selection:text-deep-black">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" progress={loadingProgress} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-20" />}>
              <SignatureDrinks />
              <FoodMenu />
              <AnimeWall />
              <Community />
              <SocialGallery />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </div>
  );
}

