import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AppCards from '@/components/AppCards';
import HowItWorks from '@/components/HowItWorks';
import TheStack from '@/components/TheStack';
import Philosophy from '@/components/Philosophy';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <TrustBar />
            <AppCards />
            <HowItWorks />
            <TheStack />
            <Philosophy />
            <ContactCTA />
        </main>
    );
}
