import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PromoItemProps {
    title: string;
    description: string;
    dark?: boolean;
    gradient?: string;
}

const PromoItem = ({ title, description, dark, gradient }: PromoItemProps) => (
    <div className={`relative h-[500px] md:h-[580px] w-full flex flex-col items-center pt-8 md:pt-12 text-center ${dark ? 'text-white' : 'text-[#1d1d1f]'} overflow-hidden group`} style={{ background: gradient }}>
        <div className="z-10 transition-transform duration-500 group-hover:scale-105">
            {/* Logo or Title */}
            <h4 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">{title}</h4>
            <p className="text-lg md:text-xl font-normal mb-3">{description}</p>
            <div className="flex items-center justify-center gap-6">
                 <Link href="/" className={`hover:underline flex items-center text-[17px] ${dark ? 'text-[#2997ff]' : 'text-[#0066cc]'}`}>
                    Learn more <ChevronRight size={14} className="ml-1" />
                </Link>
                <Link href="/" className={`hover:underline flex items-center text-[17px] ${dark ? 'text-[#2997ff]' : 'text-[#0066cc]'}`}>
                    Buy <ChevronRight size={14} className="ml-1" />
                </Link>
            </div>
        </div>
    </div>
)

const PromoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white">
            <PromoItem 
                title="Xiyar Watch Ultra 2" 
                description="Next level adventure." 
                dark 
                gradient="radial-gradient(circle at center, #2c2c2e 0%, #000000 100%)" 
            />
            <PromoItem 
                title="XiyarPad Pro" 
                description="Unbelievably thin. Incredibly powerful." 
                dark={false} 
                gradient="linear-gradient(to bottom, #f5f5f7 0%, #e2e2e5 100%)" 
            />
            <PromoItem 
                title="XiyarBook Air" 
                description="Lean. Mean. M3 machine." 
                dark={false} 
                gradient="linear-gradient(135deg, #f5f5f7 0%, #d1d1d6 100%)" 
            />
            <PromoItem 
                title="Xiyar Fitness+" 
                description="From HIIT to Meditation." 
                dark={false} 
                gradient="radial-gradient(circle at top, #ffffff 0%, #a1a1a6 100%)" 
            />
            <PromoItem 
                title="Xiyar Card" 
                description="Get up to 3% Daily Cash back." 
                dark={false} 
                gradient="linear-gradient(to bottom, #f5f5f7, #ffffff)" 
            />
            <PromoItem 
                title="Trade In" 
                description="Upgrade and save." 
                dark={false} 
                gradient="linear-gradient(to top, #f5f5f7, #d2d2d7)" 
            />
        </div>
    )
}

export default PromoGrid;
