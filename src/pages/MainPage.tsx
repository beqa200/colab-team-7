import React, { useEffect, useRef, useState } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import Card from "../components/CardCarousel";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import NewItemInStock from "../components/NewItemInStock";

export default function MainPage() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const playAudio = async () => {
        try {
          await audioElement.play();
          setIsAudioPlaying(true);
        } catch (error) {
          console.error("Failed to play audio on mount:", error);
        }
      };

      playAudio();
    }
  }, []);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
        });
        setIsAudioPlaying(true);
      }
    }
  };

  return (
    <div className="bg-[white] relative overflow-hidden">
      <div className="relative">
        <video className="w-full h-[70vh] object-cover" autoPlay loop muted>
          <source
            src="/assets/vecteezy_ai-face-artificial-intelligence-network-ai-line-circuit_21922497.mp4"
            type="video/mp4"
          />
        </video>
        <button
          onClick={handleAudioToggle}
          className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full shadow-lg"
        >
          {isAudioPlaying ? (
            <SpeakerWaveIcon className="w-6 h-6 text-white" />
          ) : (
            <SpeakerXMarkIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      <audio ref={audioRef} style={{ display: "none" }}>
        <source src="/assets/Orpheus-Male.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <section ref={categoriesRef} className="categories_Section">
        <CategoryCarousel />
      </section>
      <div className="mt-8 px-4">
        <div className="w-full  my-[5rem]"></div>
        <div className=" saleCart ">
          <Card />
        </div>
        <div className="px-[2rem]">
          <NewItemInStock />
        </div>
      </div>
    </div>
  );
}
