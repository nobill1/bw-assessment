import { useState, useEffect } from 'react';
import Image from "next/image";
import localFont from "next/font/local";
import VictoryModal from '@/components/VictoryModal';

const myFont = localFont({ src: '../../public/nKKF-GM_FYFRJvXzVXaAPe97P1KHynJFP716qNl5yoKZiA.woff2' });

export default function Home() {
  const [currentImage, setCurrentImage] = useState('/0.webp');
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);
  const [showVictoryModal, setShowVictoryModal] = useState(false);

  const images = ['/blur1.webp', '/blur2.webp', '/blur3.webp'];
  const finalImages = ['/1.webp', '/2.png', '/3.png'];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (currentImage === '/3.png') {
      timeout = setTimeout(() => {
        setShowVictoryModal(true);
      }, 1200); // Delay of 1 seconds
    } else {
      setShowVictoryModal(false);
    }
    return () => clearTimeout(timeout);
  }, [currentImage]);

  const handleClick = () => {
    if (isAnimating) return; // Prevent multiple clicks while animating

    setIsAnimating(true);

    let counter = 0;
    const interval = setInterval(() => {
      setCurrentImage(images[counter % images.length]);
      counter++;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      const finalImage = finalImages[clickCounter % finalImages.length];
      setCurrentImage(finalImage);
      setClickCounter(clickCounter + 1);
      setIsAnimating(false);
    }, 1500); // Run the animation for 1 second
  };
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between md:justify-center ${myFont.className} bg-star-pattern bg-cover bg-center overflow-hidden`}
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 pt-20 md:pt-0 px-3 z-20 md:h-auto">
        {/* game card */}
        <div className="relative flex bg-game-pattern bg-cover border-4 border-[#fe5071] rounded-3xl md:mx-auto">
          <div className="flex justify-evenly items-center absolute top-0 right-0 left-0 bottom-0">
            <Image
              src="/game-seperator.png"
              alt="game-seperator"
              className="h-full"
              width={4}
              height={353}
              priority
            />
            <Image
              src="/game-seperator.png"
              alt="game-seperator"
              className="h-full"
              width={4}
              height={353}
              priority
            />
          </div>
          <div className="flex justify-center items-center absolute top-0 right-0 left-0 -translate-y-1/2 px-6 z-20">
            <Image
              src="/vegasplus.webp"
              alt="vegasplus"
              width={398}
              height={194}
              priority
            />
          </div>
          {showVictoryModal && <VictoryModal />}
          <div className={`flex px-6 w-full h-auto ${isAnimating ? 'slide-up' : ''}`}>
            <Image
              src={currentImage}
              alt="0"
              style={{ objectFit: 'cover' }}
              // className="w-full h-auto"
              width={511}
              height={347}
              priority
            />
          </div>
        </div>

        {/* buttons */}
        {currentImage == "/3.png" ? null : <button onClick={handleClick} className="self-center bg-[#fe5071] py-2 px-14 rounded-xl text-3xl lg:text-5xl animate-shrinkGrow">SPIN NOW</button>}
        {currentImage == "/3.png" && <a href='https://wvgconn.com/en/registration?' target='_blank' rel='noopener' className="self-center bg-[#fe5071] py-2 px-14 rounded-xl text-3xl lg:text-5xl animate-shrinkGrow">CLAIM NOW</a>}
      </div>

      <div className="flex relative translate-y-4 2xl:translate-y-0 justify-center md:absolute md:top-0 md:left-0 md:right-0 md:bottom-0 md:justify-between">
        {/* small screen image disposition */}
        <div className="flex justify-stretch opacity-40 md:hidden">
          <div className="flex self-end translate-y-16 opacity-30">
            <Image
              src="/shield.webp"
              alt="shield"
              width={176}
              height={270}
              priority
            />
          </div>
          <div className="flex self-end -translate-y-10">
            <Image
              src="/dragon.webp"
              alt="dragon"
              width={222}
              height={286}
              priority
            />
          </div>
          <div className="flex self-end opacity-30">
            <Image
              src="/star.webp"
              alt="star"
              width={213}
              height={213}
              priority
            />
          </div>
        </div>
        <div className="flex justify-stretch absolute top-0 bottom-0 left-0 right-0 z-10 md:hidden">
          <div className="flex justify-center items-center translate-x-16">
            <Image
              src="/zeus.webp"
              alt="zeus"
              width={258}
              height={508}
              priority
            />
          </div>
          <div className="flex self-end z-10">
            <Image
              src="/spinata.webp"
              alt="spinata"
              width={254}
              height={212}
              priority
            />
          </div>
          <div className="flex justify-center items-center -translate-x-16 -translate-y-5">
            <Image
              src="/riche.webp"
              alt="riche"
              width={268}
              height={555}
              priority
            />
          </div>
        </div>

        {/* large screen image disposition */}
        <div className="container mx-auto flex justify-between xl:justify-evenly w-full self-stretch">
          <div className="relative md:flex flex-col justify-center items-center xl:-translate-x-20 hidden">
            <div className="absolute bottom-0 flex -translate-y-60 -translate-x-28 -rotate-12">
              <Image
                src="/yellow.webp"
                alt="yellow"
                width={67}
                height={67}
                priority
              />
            </div>
            <div className="absolute bottom-0 flex -translate-y-80 -translate-x-48 rotate-12">
              <Image
                src="/blue.webp"
                alt="blue"
                width={108}
                height={108}
                priority
              />
            </div>
            <div className="absolute top-0 xl:top-64 flex translate-y-10 translate-x-32 scale-[75%] rotate-6">
              <Image
                src="/red.webp"
                alt="red"
                width={108}
                height={108}
                priority
              />
            </div>
            <div className="absolute top-0 xl:top-64 flex self-end justify-end translate-y-24 -translate-x-36 rotate-6">
              <Image
                src="/green.webp"
                alt="green"
                width={54}
                height={54}
                priority
              />
            </div>
            <div className="flex self-end justify-end translate-y-[330px] -translate-x-28 opacity-40 ">
              <Image
                src="/shield.webp"
                alt="shield"
                width={176}
                height={270}
                priority
              />
            </div>
            <div className="flex justify-center items-center z-10">
              <Image
                src="/zeus.webp"
                alt="zeus"
                width={258}
                height={508}
                priority
              />
            </div>
            <div className="flex self-end -translate-y-44 -translate-x-[26px] z-20">
              <Image
                src="/dragon.webp"
                alt="dragon"
                width={222}
                height={286}
                priority
              />
            </div>
          </div>
          <div className="md:flex flex-col justify-center items-center xl:translate-x-20 -translate-y-9 hidden">
            <div className="absolute top-0 xl:top-72 flex translate-y-32 translate-x-5 rotate-12 scale-[80%]">
              <Image
                src="/yellow.webp"
                alt="yellow"
                width={67}
                height={67}
                priority
              />
            </div>
            <div className="absolute top flex -translate-y-72 -translate-x-48 scale-[80%] rotate-12">
              <Image
                src="/purple.webp"
                alt="purple"
                width={108}
                height={108}
                priority
              />
            </div>
            <div className="absolute bottom-0 flex -translate-y-80 translate-x-48">
              <Image
                src="/red.webp"
                alt="red"
                width={108}
                height={108}
                priority
              />
            </div>
            <div className="absolute bottom-0 flex -translate-y-52 translate-x-14 rotate-6">
              <Image
                src="/green.webp"
                alt="green"
                width={54}
                height={54}
                priority
              />
            </div>
            <div className="flex self-end justify-end translate-y-[450px] opacity-40">
              <Image
                src="/star.webp"
                alt="star"
                width={213}
                height={213}
                priority
              />
            </div>
            <div className="flex justify-center items-center z-10">
              <Image
                src="/riche.webp"
                alt="riche"
                width={268}
                height={555}
                priority
              />
            </div>
            <div className="flex self-end -translate-y-28 -translate-x-2 z-10">
              <Image
                src="/spinata.webp"
                alt="spinata"
                width={254}
                height={212}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
