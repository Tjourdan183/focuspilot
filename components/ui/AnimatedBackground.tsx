interface AnimatedBackgroundProps {
  colorVariant?: 'default' | 'blue' | 'green' | 'purple' | 'orange' | 'yellow' | 'red' | 'teal';
  isHomePage?: boolean;
}

export default function AnimatedBackground({ colorVariant = 'default', isHomePage = false }: AnimatedBackgroundProps) {
  const getColorScheme = () => {
    // If it's homepage, return simpler color scheme
    if (isHomePage) {
      return {
        primary: 'bg-purple-500/30 animate-pulse-slow',
        secondary: 'bg-pink-500/30 animate-pulse-slower',
        tertiary: 'bg-blue-500/30 animate-pulse-slowest',
        quaternary: 'bg-emerald-500/30 animate-pulse-slow',
        accent1: 'bg-violet-500/20 animate-pulse-slower',
        accent2: 'bg-indigo-400/25 animate-pulse-slowest',
      };
    }

    switch (colorVariant) {
      case 'blue':
        return {
          primary: 'bg-blue-600/25 animate-pulse-slow',
          secondary: 'bg-blue-400/35 animate-pulse-slower',
          tertiary: 'bg-sky-500/30 animate-pulse-slowest',
          quaternary: 'bg-indigo-400/20 animate-pulse-slow',
          accent1: 'bg-cyan-500/15 animate-pulse-slower',
          accent2: 'bg-blue-300/25 animate-pulse-slowest',
          accent3: 'bg-indigo-600/20 animate-pulse-slow',
          accent4: 'bg-sky-400/25 animate-pulse-slower',
          accent5: 'bg-cyan-300/20 animate-pulse-slowest',
          pattern1: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse-slow',
          pattern2: 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20 animate-pulse-slower',
          pattern3: 'bg-gradient-to-r from-sky-500/20 to-indigo-500/20 animate-pulse-slowest',
        };
      case 'green':
        return {
          primary: 'bg-green-600/25 animate-pulse-slow',
          secondary: 'bg-emerald-400/35 animate-pulse-slower',
          tertiary: 'bg-green-500/30 animate-pulse-slowest',
          quaternary: 'bg-teal-400/20 animate-pulse-slow',
          accent1: 'bg-lime-500/15 animate-pulse-slower',
          accent2: 'bg-green-300/25 animate-pulse-slowest',
          accent3: 'bg-emerald-600/20 animate-pulse-slow',
          accent4: 'bg-teal-500/25 animate-pulse-slower',
          accent5: 'bg-lime-400/20 animate-pulse-slowest',
          pattern1: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse-slow',
          pattern2: 'bg-gradient-to-r from-teal-500/20 to-green-500/20 animate-pulse-slower',
          pattern3: 'bg-gradient-to-r from-lime-500/20 to-teal-500/20 animate-pulse-slowest',
        };
      case 'purple':
        return {
          primary: 'bg-purple-600/25 animate-pulse-slow',
          secondary: 'bg-violet-400/35 animate-pulse-slower',
          tertiary: 'bg-purple-500/30 animate-pulse-slowest',
          quaternary: 'bg-fuchsia-400/20 animate-pulse-slow',
          accent1: 'bg-indigo-500/15 animate-pulse-slower',
          accent2: 'bg-purple-300/25 animate-pulse-slowest',
        };
      case 'orange':
        return {
          primary: 'bg-orange-600/25 animate-pulse-slow',
          secondary: 'bg-amber-400/35 animate-pulse-slower',
          tertiary: 'bg-orange-500/30 animate-pulse-slowest',
          quaternary: 'bg-yellow-500/20 animate-pulse-slow',
          accent1: 'bg-red-400/15 animate-pulse-slower',
          accent2: 'bg-orange-300/25 animate-pulse-slowest',
        };
      case 'yellow':
        return {
          primary: 'bg-yellow-600/25 animate-pulse-slow',
          secondary: 'bg-amber-400/35 animate-pulse-slower',
          tertiary: 'bg-yellow-500/30 animate-pulse-slowest',
          quaternary: 'bg-orange-400/20 animate-pulse-slow',
          accent1: 'bg-yellow-300/15 animate-pulse-slower',
          accent2: 'bg-amber-300/25 animate-pulse-slowest',
        };
      case 'red':
        return {
          primary: 'bg-red-600/25 animate-pulse-slow',
          secondary: 'bg-rose-400/35 animate-pulse-slower',
          tertiary: 'bg-red-500/30 animate-pulse-slowest',
          quaternary: 'bg-pink-400/20 animate-pulse-slow',
          accent1: 'bg-orange-500/15 animate-pulse-slower',
          accent2: 'bg-red-300/25 animate-pulse-slowest',
        };
      case 'teal':
        return {
          primary: 'bg-teal-600/25 animate-pulse-slow',
          secondary: 'bg-cyan-400/35 animate-pulse-slower',
          tertiary: 'bg-teal-500/30 animate-pulse-slowest',
          quaternary: 'bg-emerald-400/20 animate-pulse-slow',
          accent1: 'bg-sky-500/15 animate-pulse-slower',
          accent2: 'bg-teal-300/25 animate-pulse-slowest',
        };
      default:
        return {
          primary: 'bg-purple-500/30 animate-pulse-slow',
          secondary: 'bg-pink-500/30 animate-pulse-slower',
          tertiary: 'bg-blue-500/30 animate-pulse-slowest',
          quaternary: 'bg-emerald-500/30 animate-pulse-slow',
          accent1: 'bg-violet-500/20 animate-pulse-slower',
          accent2: 'bg-indigo-400/25 animate-pulse-slowest',
        };
    }
  };

  const colors = getColorScheme();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Primary Color Blur */}
      <div 
        className={`absolute w-[40rem] h-[40rem] ${colors.primary} blur-[120px] rounded-full animate-float`}
        style={{ top: '5%', left: '-15%' }}
      />
      {/* Secondary Color Blur */}
      <div 
        className={`absolute w-[35rem] h-[35rem] ${colors.secondary} blur-[140px] rounded-full animate-float-delayed`}
        style={{ top: '50%', left: '0%' }}
      />
      {/* Tertiary Color Blur */}
      <div 
        className={`absolute w-[30rem] h-[30rem] ${colors.tertiary} blur-[130px] rounded-full animate-float`}
        style={{ top: '15%', right: '-12%' }}
      />
      {/* Quaternary Color Blur */}
      <div 
        className={`absolute w-[32rem] h-[32rem] ${colors.quaternary} blur-[150px] rounded-full animate-float-delayed`}
        style={{ top: '40%', right: '5%' }}
      />
      {/* Additional blended colors */}
      <div 
        className={`absolute w-[28rem] h-[28rem] ${colors.accent1} blur-[160px] rounded-full animate-float`}
        style={{ bottom: '-5%', left: '25%' }}
      />
      <div 
        className={`absolute w-[25rem] h-[25rem] ${colors.accent2} blur-[170px] rounded-full animate-float-delayed`}
        style={{ bottom: '10%', right: '15%' }}
      />
      <div 
        className={`absolute w-[30rem] h-[30rem] ${colors.tertiary} blur-[140px] rounded-full animate-float`}
        style={{ top: '70%', left: '60%' }}
      />
      <div 
        className={`absolute w-[26rem] h-[26rem] ${colors.quaternary} blur-[150px] rounded-full animate-float-delayed`}
        style={{ top: '30%', left: '40%' }}
      />
      
      {/* Additional color variations for non-homepage */}
      {!isHomePage && colors.accent3 && (
        <>
          <div 
            className={`absolute w-[22rem] h-[22rem] ${colors.accent3} blur-[140px] rounded-full animate-float`}
            style={{ top: '25%', left: '35%' }}
          />
          <div 
            className={`absolute w-[24rem] h-[24rem] ${colors.accent4} blur-[160px] rounded-full animate-float-delayed`}
            style={{ bottom: '30%', right: '25%' }}
          />
          <div 
            className={`absolute w-[20rem] h-[20rem] ${colors.accent5} blur-[180px] rounded-full animate-float`}
            style={{ top: '60%', left: '45%' }}
          />
          
          {/* Gradient patterns */}
          {colors.pattern1 && (
            <>
              <div 
                className={`absolute w-[35rem] h-[35rem] ${colors.pattern1} blur-[160px] rounded-full animate-float transform rotate-45`}
                style={{ top: '40%', left: '30%' }}
              />
              <div 
                className={`absolute w-[30rem] h-[30rem] ${colors.pattern2} blur-[170px] rounded-full animate-float-delayed transform -rotate-45`}
                style={{ bottom: '20%', right: '35%' }}
              />
              <div 
                className={`absolute w-[25rem] h-[25rem] ${colors.pattern3} blur-[180px] rounded-full animate-float transform rotate-12`}
                style={{ top: '30%', right: '40%' }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
} 