import Image from "next/image";
import AutoSlider from '@/components/ui/AutoSlider';
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        최신 배너 슬라이더
      </h1>
      
      {/* 🌟 AutoSlider 컴포넌트를 페이지에 배치 */}
      <AutoSlider /> 
      
      <div className="mt-12 text-center text-gray-600">
        <p>페이지의 다른 콘텐츠는 여기에 표시됩니다.</p>
      </div>
      
    </main>
  );

}
