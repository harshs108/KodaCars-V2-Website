import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Plane, 
  Building2, 
  Heart, 
  Truck, 
  ShieldCheck, 
  Smartphone, 
  Bus,
  Menu,
  LogIn
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutions = [
    { name: 'Near-Airport Parking', href: '#near-airport', icon: <Plane size={20} /> },
    { name: 'Hotel Near-Airport Parking', href: '#hotel-parking', icon: <Building2 size={20} /> },
  ];

  const insights = [
    { name: 'Customer Loyalty', href: '#loyalty-insight', icon: <Heart size={20} /> },
    { name: 'Large Vehicle', href: '#large-vehicle', icon: <Truck size={20} /> },
    { name: 'Reputation Management', href: '#reputation', icon: <ShieldCheck size={20} /> },
    { name: 'Self Check In', href: '#self-check-in', icon: <Smartphone size={20} /> },
    { name: 'Shuttle Services', href: '#shuttle', icon: <Bus size={20} /> },
  ];

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-koda-black h-16 border-b border-gray-200 font-sans shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0 mr-8">
          <a href="#" className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/18SLJjdlOxsuWVbWCE7lgtg0VvXh-LsVm" 
              alt="KodaCars Logo" 
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center h-full gap-2 flex-grow justify-start">
          
          {/* Solutions Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`h-full flex items-center px-4 text-base font-semibold border-b-2 transition-all duration-200 gap-1 whitespace-nowrap ${activeDropdown === 'solutions' ? 'border-koda-blue text-koda-blue bg-gray-50' : 'border-transparent text-gray-700 hover:text-koda-blue hover:bg-gray-50'}`}
            >
              Solutions
              <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'solutions' && (
               <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 shadow-2xl py-2 z-50">
                 {solutions.map((item) => (
                   <a 
                     key={item.name} 
                     href={item.href}
                     className="flex items-center px-6 py-5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-koda-blue transition-colors group"
                   >
                     <span className="mr-4 text-koda-blue">
                       {item.icon}
                     </span>
                     {item.name}
                   </a>
                 ))}
               </div>
            )}
          </div>

          <a href="#benefits" className="h-full flex items-center px-4 text-base font-semibold text-gray-700 hover:text-koda-blue hover:bg-gray-50 border-b-2 border-transparent hover:border-koda-blue transition-all whitespace-nowrap">
            Benefits
          </a>

          <a href="#platform" className="h-full flex items-center px-4 text-base font-semibold text-gray-700 hover:text-koda-blue hover:bg-gray-50 border-b-2 border-transparent hover:border-koda-blue transition-all whitespace-nowrap">
            Features
          </a>

          <a href="#team" className="h-full flex items-center px-4 text-base font-semibold text-gray-700 hover:text-koda-blue hover:bg-gray-50 border-b-2 border-transparent hover:border-koda-blue transition-all whitespace-nowrap">
            Team
          </a>

          {/* Insights Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter('insights')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`h-full flex items-center px-4 text-base font-semibold border-b-2 transition-all duration-200 gap-1 whitespace-nowrap ${activeDropdown === 'insights' ? 'border-koda-blue text-koda-blue bg-gray-50' : 'border-transparent text-gray-700 hover:text-koda-blue hover:bg-gray-50'}`}
            >
              Insights
              <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'insights' && (
               <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 shadow-2xl py-2 z-50">
                 <a 
                   href="#insights"
                   className="flex items-center px-6 py-5 text-sm font-bold text-gray-400 border-b border-gray-100 hover:bg-gray-50 uppercase tracking-widest"
                 >
                   View All Insights
                 </a>
                 {insights.map((item) => (
                   <a 
                     key={item.name} 
                     href={item.href}
                     className="flex items-center px-6 py-5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-koda-blue transition-colors group"
                   >
                     <span className="mr-4 text-koda-blue">
                       {item.icon}
                     </span>
                     {item.name}
                   </a>
                 ))}
               </div>
            )}
          </div>
        </div>

        {/* Right: Utilities */}
        <div className="flex items-center gap-2 h-full flex-shrink-0">
          <a 
            href="#contact"
            className="ml-2 flex items-center justify-center h-10 px-6 bg-koda-blue text-white hover:bg-koda-darkblue text-base font-bold transition-colors whitespace-nowrap"
          >
            Contact Sales
          </a>
          <a 
            href="https://providers.kodacars.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 px-6 border border-gray-200 text-koda-black hover:bg-gray-50 text-base font-bold transition-colors whitespace-nowrap gap-2"
          >
            <LogIn size={18} />
            Login
          </a>
          <button className="lg:hidden h-full w-10 flex items-center justify-center hover:bg-gray-100 text-koda-black">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;