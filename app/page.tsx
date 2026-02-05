import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PromoGrid from '@/components/PromoGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Main Content Spacer for Fixed Navbar */}
      <div className="pt-11">
          <Hero 
            title="Xiyar 16 Pro"
            subtitle="Titanium. So strong. So light. So Pro."
            dark={true}
            bgImage="https://images.unsplash.com/photo-1556656793-02715d8dd6f8?q=80&w=2670&auto=format&fit=crop" 
          />
          
          <Hero 
            title="Xiyar 16"
            subtitle="New camera. New design. Newphoria."
            dark={false}
            bgImage="https://images.unsplash.com/photo-1605236453806-6ff36a86fa2e?q=80&w=2557&auto=format&fit=crop" 
          />
          
          <Hero 
            title="Xiyar Watch Ultra 2"
            subtitle="Next level adventure."
            dark={true}
            bgImage="https://images.unsplash.com/photo-1434493789847-2f02ea6ca2cb?q=80&w=2669&auto=format&fit=crop"
          />

          <PromoGrid />
      </div>

      <Footer />
    </main>
  );
}
