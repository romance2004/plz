"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'; 
import { type EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel'; 
import Autoplay from 'embla-carousel-autoplay';

type AutoplayOptionsType = Parameters<typeof Autoplay>[0];


interface Banner {
  id: number;
  color: string;
  text: string;
}

const banners: Banner[] = [
  { id: 1, color: 'bg-indigo-500', text: '상호작용 후 자동 재생 재개 (1)' },
  { id: 2, color: 'bg-teal-500', text: 'settle 로직 복구 (2)' },
  { id: 3, color: 'bg-amber-500', text: '간결한 코드로 회귀 (3)' },
  { id: 4, color: 'bg-red-500', text: '이벤트 핸들러 제거 완료 (4)' },
];

export default function AutoSlider() {
  
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    align: 'center',
    containScroll: 'keepSnaps',
    slidesToScroll: 1,
  };
  
  // 상호작용 후 자동 재생이 영구적으로 멈추는 것을 방지
  const autoplayOptions: AutoplayOptionsType = {
    delay: 3000,
    stopOnInteraction: false, // 영구 정지 방지
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);


  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect(emblaApi);
      
      // 🌟🌟🌟 settle 이벤트 로직 복구: 상호작용 후 자동 재생 재개 🌟🌟🌟
      const autoplay = emblaApi.plugins().autoplay;

      const restartAutoplay = () => {
        if (autoplay) {
          autoplay.play(); // 스크롤 정착 후 자동 재생 재시작
        }
      };

      emblaApi.on('settle', restartAutoplay);
      emblaApi.on('init', restartAutoplay);
      // 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
      
      return () => {
        emblaApi.off('select', onSelect);
        
        // 클린업 시 settle 리스너 제거
        emblaApi.off('settle', restartAutoplay);
        emblaApi.off('init', restartAutoplay);
      };
    }
  }, [emblaApi, onSelect]);


  return (
    <div className="relative overflow-hidden w-full max-w-full mx-auto shadow-2xl mt-8 h-96">

      <div className="embla-viewport h-full" ref={emblaRef}> 

        <div className="embla-container flex h-full">

          {banners.map((banner, index) => (
            
            <div 
              key={banner.id}
              // 높이(h-96=384px) 기준 16:9 비율을 만족하는 고정 너비 (682.66px) 적용
              className="flex-shrink-0 flex-grow-0 min-w-0 mr-[10%] w-[682.66px] h-full" 
            >
              <div
                className={`w-full h-full flex items-center justify-center 
                  transition-opacity duration-300 
                  ${selectedIndex === index ? 'opacity-100' : 'opacity-50'}
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