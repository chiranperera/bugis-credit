import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoanCalculator from '../components/LoanCalculator';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LoanCalculator />
      </main>
    </div>
  );
}
