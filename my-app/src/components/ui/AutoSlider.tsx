"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'; 
import { type EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel'; 
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

type AutoplayOptionsType = Parameters<typeof Autoplay>[0];


interface Banner {
  id: number;
  // 텍스트 속성 제거
  imageUrl: string; 
}

const banners: Banner[] = [
  // 텍스트 필드 제거, 절대 경로('/') 유지
  { id: 1, imageUrl: '/image/banner1.webp' },
  { id: 2, imageUrl: '/image/banner2.webp' },
  { id: 3, imageUrl: '/image/banner3.webp' },
  { id: 4, imageUrl: '/image/banner4.webp' },
];

export default function AutoSlider() {
  
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    align: 'center',
    containScroll: 'keepSnaps',
    slidesToScroll: 1,
  };
  
  const autoplayOptions: AutoplayOptionsType = {
    delay: 3000,
    stopOnInteraction: false,
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
      
      const autoplay = emblaApi.plugins().autoplay;

      const restartAutoplay = () => {
        if (autoplay) {
          autoplay.play();
        }
      };

      emblaApi.on('settle', restartAutoplay);
      emblaApi.on('init', restartAutoplay);
      
      return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('settle', restartAutoplay);
        emblaApi.off('init', restartAutoplay);
      };
    }
  }, [emblaApi, onSelect]);


  return (
    // 배너 슬라이더의 전체 컨테이너
    <div className="relative overflow-hidden w-full max-w-full mx-auto h-96 bg-gray-50">

      {/* Embla Viewport */}
      <div className="embla-viewport h-full bg-gray-50" ref={emblaRef}> 

        <div className="embla-container flex h-full">

          {banners.map((banner, index) => (
            
            <div 
              key={banner.id}
              className="flex-shrink-0 flex-grow-0 min-w-0 mr-[10%] w-[682.66px] h-full" 
            >
              <div
                // 이미지가 로드되지 않을 때 대비하여 bg-gray-200을 fallback으로 유지
                className={`relative w-full h-full flex items-center justify-center rounded-xl 
                  transition-opacity duration-300 shadow-lg bg-gray-200 
                  ${selectedIndex === index ? 'opacity-100' : 'opacity-50'}
                  cursor-grab active:cursor-grabbing
                `}
              >
                {/* next/image 컴포넌트를 사용하여 이미지 렌더링 (이미지만) */}
                <Image
                  src={banner.imageUrl}
                  alt={`Banner Image ${banner.id}`} // 최소한의 alt 텍스트 유지 (접근성)
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover rounded-xl"
                  priority={index === 0}
                  // 이미지 로딩 실패 시 로그 출력 코드는 유지 (디버깅 편의성)
                  onError={(e) => console.error(`Image failed to load: ${banner.imageUrl}`, e)}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
