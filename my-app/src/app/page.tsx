import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="banner-group max-w-full mx-auto flex justify-between gap-4">
  {/* banner-group 클래스를 사용하여 중앙 정렬과 Flex 레이아웃을 설정 */}
  
  <div className="w-1/3">광고 배너 1</div>
  <div className="w-1/3">광고 배너 2</div>
  <div className="w-1/3">광고 배너 3</div>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
