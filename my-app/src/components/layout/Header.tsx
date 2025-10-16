import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  return (
        <header className="fixed top-0 z-50 w-full py-6 border-b border-gray-200 bg-gray-50">
  <nav className="max-w-screen-xl mx-auto flex gap-6 items-center justify-center">
    {/* 👆 nav 클래스에 'flex', 'gap-6', 'items-center'를 추가하여 가로 정렬 */}
    <div className="flex w-full">
      <div className="flex w-1/7 items-center justify-center">
      </div>
      <div className="flex w-4/7 items-center justify-start pl-16 gap-4">
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>메뉴1</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>메뉴2</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>메뉴3</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>메뉴4</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>메뉴5</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>메뉴6</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
</div>
      <div className="flex w-2/7 items-center justify-start gap-4">
      <div className="text-1xl font-bold cursor-pointer transition border-b-2 border-transparent hover:text-sky-500 hover:border-sky-500 pr-4">
  고객지원
</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer transition hover:text-sky-500">
  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer transition hover:text-sky-500">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer transition hover:text-sky-500">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
</svg>

      </div>

</div>
      </nav>
    </header>
  );
};

export default Header;


