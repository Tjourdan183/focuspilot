import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  colorVariant?: 'default' | 'blue' | 'green' | 'purple' | 'orange';
}

export default function AnimatedBackground({ colorVariant = 'default' }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getColorScheme = () => {
    switch (colorVariant) {
      case 'blue':
        return {
          primary: 'bg-blue-500/30',
          secondary: 'bg-cyan-500/30',
          tertiary: 'bg-indigo-500/30',
          quaternary: 'bg-sky-500/30',
        };
      case 'green':
        return {
          primary: 'bg-emerald-500/30',
          secondary: 'bg-green-500/30',
          tertiary: 'bg-teal-500/30',
          quaternary: 'bg-lime-500/30',
        };
      case 'purple':
        return {
          primary: 'bg-purple-500/30',
          secondary: 'bg-violet-500/30',
          tertiary: 'bg-fuchsia-500/30',
          quaternary: 'bg-pink-500/30',
        };
      case 'orange':
        return {
          primary: 'bg-orange-500/30',
          secondary: 'bg-amber-500/30',
          tertiary: 'bg-yellow-500/30',
          quaternary: 'bg-rose-500/30',
        };
      default:
        return {
          primary: 'bg-purple-500/30',
          secondary: 'bg-pink-500/30',
          tertiary: 'bg-blue-500/30',
          quaternary: 'bg-emerald-500/30',
        };
    }
  };

  const colors = getColorScheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Primary Color Blur */}
      <div 
        className={`absolute w-[40rem] h-[40rem] ${colors.primary} blur-[128px] rounded-full animate-float`}
        style={{ top: '5%', left: '-15%' }}
      />
      {/* Secondary Color Blur */}
      <div 
        className={`absolute w-[35rem] h-[35rem] ${colors.secondary} blur-[128px] rounded-full animate-float-delayed`}
        style={{ top: '50%', left: '0%' }}
      />
      {/* Tertiary Color Blur */}
      <div 
        className={`absolute w-[30rem] h-[30rem] ${colors.tertiary} blur-[128px] rounded-full animate-float`}
        style={{ top: '15%', right: '-12%' }}
      />
      {/* Quaternary Color Blur */}
      <div 
        className={`absolute w-[32rem] h-[32rem] ${colors.quaternary} blur-[128px] rounded-full animate-float-delayed`}
        style={{ top: '40%', right: '5%' }}
      />
      {/* Additional blended colors */}
      <div 
        className={`absolute w-[28rem] h-[28rem] ${colors.primary} blur-[128px] rounded-full animate-float`}
        style={{ bottom: '-5%', left: '25%' }}
      />
      <div 
        className={`absolute w-[25rem] h-[25rem] ${colors.secondary} blur-[128px] rounded-full animate-float-delayed`}
        style={{ bottom: '10%', right: '15%' }}
      />
      <div 
        className={`absolute w-[30rem] h-[30rem] ${colors.tertiary} blur-[128px] rounded-full animate-float`}
        style={{ top: '70%', left: '60%' }}
      />
      <div 
        className={`absolute w-[26rem] h-[26rem] ${colors.quaternary} blur-[128px] rounded-full animate-float-delayed`}
        style={{ top: '30%', left: '40%' }}
      />
    </div>
  );
} 