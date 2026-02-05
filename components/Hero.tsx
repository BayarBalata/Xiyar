import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
    title: string;
    subtitle: string;
    description?: string;
    dark?: boolean;
    bgImage?: string; // URL for background image
}

const Hero = ({ title, subtitle, description, dark = false, bgImage }: HeroProps) => {
    return (
        <section 
            className={`relative h-[580px] md:h-[692px] w-full flex flex-col items-center pt-12 md:pt-16 text-center ${dark ? 'bg-black text-white' : 'bg-[#fbfbfd] text-[#1d1d1f]'} overflow-hidden`}
            style={{ 
                backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="z-10 flex flex-col items-center animate-fade-in-up px-4">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-1 md:mb-2">{title}</h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3">{subtitle}</h3>
                {description && <p className="text-lg md:text-xl font-normal text-gray-500 max-w-xl mb-4">{description}</p>}
                
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-2">
                    <Link href="/" className="bg-[#0071e3] text-white rounded-full px-5 py-2 min-w-[100px] text-[17px] hover:bg-[#0077ed] transition-colors">
                        Learn more
                    </Link>
                    <Link href="/" className={`hover:underline flex items-center text-[17px] ${dark ? 'text-[#2997ff]' : 'text-[#0066cc]'}`}>
                        Buy <ChevronRight size={14} className="ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
