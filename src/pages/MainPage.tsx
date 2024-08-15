import { useEffect, useRef, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

import CategoryCarousel from "../components/mainPage/CategoryCarousel";
// import DiscountedItemsCarousel from "../components/mainPage/DiscountedItemsCarousel";
import NewItemInStock from "../components/mainPage/NewItemInStock";
import DiscountedItemsCarousel from "../components/mainPage/DiscountedItemsCarousel";

export default function MainPage() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedAudioState = localStorage.getItem("isAudioPlaying");
    if (storedAudioState) {
      setIsAudioPlaying(JSON.parse(storedAudioState));
    }
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isAudioPlaying) {
        const playAudio = async () => {
          try {
            await audioElement.play();
          } catch (error) {
            console.error("Failed to play audio:", error);
          }
        };
        playAudio();
      } else {
        audioElement.pause();
      }
    }
  }, [isAudioPlaying]);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
        });
      }
      localStorage.setItem("isAudioPlaying", JSON.stringify(!isAudioPlaying));
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  return (
    <div className="bg-white w-full relative overflow-hidden">
      <div className="relative">
        {/* Vimeo video embed */}
        <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/998693391?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Vimeo Video"
          ></iframe>
        </div>

        {/* Audio toggle button */}
        <button
          onClick={handleAudioToggle}
          className="absolute top-[8rem] right-[1.5rem] bg-gray-800 p-2 rounded-full shadow-lg"
        >
          {isAudioPlaying ? (
            <SpeakerWaveIcon className="w-6 h-6 text-white" />
          ) : (
            <SpeakerXMarkIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <audio ref={audioRef} style={{ display: "none" }}>
        <source
          src="/assetsForMainPage/audios/Orpheus-Male.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>

      <section ref={categoriesRef} className="categories_Section">
        <CategoryCarousel />
      </section>
      <div className="mt-8 px-4">
        <div className="w-full my-20"></div>
        <div className="saleCart">
          {" "}
          <DiscountedItemsCarousel />
        </div>
        <div className="px-8">
          <NewItemInStock />
        </div>
      </div>
    </div>
  );
}
