"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { type EmblaOptionsType } from 'embla-carousel';

import Autoplay from 'embla-carousel-autoplay';
// Autoplay 플러그인에서 옵션 타입을 추출하여 안정성을 확보합니다.
type AutoplayOptionsType = Parameters<typeof Autoplay>[0];


interface Banner {
  id: number;
  color: string;
  text: string;
}

const banners: Banner[] = [
  { id: 1, color: 'bg-indigo-500', text: 'U+00A0 제거된 클린 코드 (1)' },
  { id: 2, color: 'bg-teal-500', text: '이제 오류 없이 작동합니다 (2)' },
  { id: 3, color: 'bg-amber-500', text: '안정적인 Next.js 캐러셀 (3)' },
];

export default function AutoSlider() {

  const emblaOptions: EmblaOptionsType = {
    loop: true,
  };

  const autoplayOptions: AutoplayOptionsType = {
    delay: 3000,
    stopOnInteraction: true,
  };

  const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay(autoplayOptions)]);

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto rounded-xl shadow-2xl mt-8">

      <div className="embla-viewport" ref={emblaRef}>

        <div className="embla-container flex touch-pan-y">

          {banners.map((banner) => (

            <div
              key={banner.id}
              className="flex-shrink-0 flex-grow-0 basis-full min-w-0"
            >

              <div
                className={`w-full h-48 flex items-center justify-center
                            text-white text-xl font-semibold ${banner.color}
                            cursor-grab active:cursor-grabbing`}
              >
                {banner.text}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}