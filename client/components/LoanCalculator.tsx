import { useState, useEffect } from 'react';

interface LoanCalculation {
  monthlyPayment: number;
  totalRepayment: number;
  totalInterest: number;
  effectiveInterestRate: number;
}

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(120000);
  const [loanTerm, setLoanTerm] = useState(60); // in months
  const [interestRate, setInterestRate] = useState(1.99); // annual percentage
  const [calculation, setCalculation] = useState<LoanCalculation>({
    monthlyPayment: 2222,
    totalRepayment: 133320,
    totalInterest: 13320,
    effectiveInterestRate: 3.8
  });

  // Calculate loan payments
  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = loanTerm;
    
    if (monthlyRate === 0) {
      // Handle 0% interest rate
      const monthlyPayment = principal / numPayments;
      setCalculation({
        monthlyPayment: monthlyPayment,
        totalRepayment: principal,
        totalInterest: 0,
        effectiveInterestRate: 0
      });
    } else {
      // Standard loan calculation formula
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                            (Math.pow(1 + monthlyRate, numPayments) - 1);
      const totalRepayment = monthlyPayment * numPayments;
      const totalInterest = totalRepayment - principal;
      const effectiveRate = (totalInterest / principal) * (12 / loanTerm) * 100;
      
      setCalculation({
        monthlyPayment: monthlyPayment,
        totalRepayment: totalRepayment,
        totalInterest: totalInterest,
        effectiveInterestRate: effectiveRate
      });
    }
  }, [loanAmount, loanTerm, interestRate]);

  const formatCurrency = (amount: number) => {
    return `S$${amount.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatPercentage = (rate: number) => {
    return `${rate.toFixed(2)}%`;
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark text-center mb-6 sm:mb-8 font-dm-sans">
              Get a Credible Loan
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Side - Input Controls */}
              <div className="space-y-6">
                {/* Loan Amount */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-600 font-dm-sans">
                    How much do you need?
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full text-2xl lg:text-3xl font-bold text-navy-dark bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-transparent font-inter"
                      min="1000"
                      max="500000"
                      step="1000"
                    />
                  </div>
                </div>

                {/* Loan Term */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-600 font-dm-sans">
                    Months to repay
                  </label>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-navy-light font-inter">
                      {loanTerm} Months
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="3"
                        max="60"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer loan-slider"
                        style={{
                          background: `linear-gradient(to right, hsl(var(--gold)) 0%, hsl(var(--gold)) ${((loanTerm - 3) / (60 - 3)) * 100}%, #e5e7eb ${((loanTerm - 3) / (60 - 3)) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2 font-dm-sans font-semibold">
                        <span>3 Months</span>
                        <span>60 Months</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interest Rate Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-600 font-dm-sans">
                    Choose Your Interest Rate: 1%, 2%, 3%, 4%, 5%
                  </label>
                  <div className="grid grid-cols-5 gap-1 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setInterestRate(rate)}
                        className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                          interestRate === rate
                            ? 'bg-gold text-navy-dark'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Calculation Results */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                {/* Monthly Payment */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-600 font-dm-sans">Monthly repayment</span>
                  <span className="text-sm font-bold text-gray-700 font-dm-sans">
                    {formatCurrency(calculation.monthlyPayment)}
                  </span>
                </div>

                {/* Total Repayment */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-600 font-dm-sans">Total repayment</span>
                  <span className="text-sm font-bold text-gray-700 font-dm-sans">
                    {formatCurrency(calculation.totalRepayment)}
                  </span>
                </div>

                {/* Interest Rate */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-600 font-dm-sans">Interest</span>
                  <span className="text-sm font-bold text-gray-700 font-dm-sans">
                    {formatPercentage(interestRate)}(EIR {formatPercentage(calculation.effectiveInterestRate)} p.a.)
                  </span>
                </div>

                {/* Apply Button */}
                <button className="w-full bg-gold hover:bg-gold-border text-navy-dark py-3 rounded-2xl text-lg font-bold font-inter transition-colors mt-6">
                  Apply Now
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center leading-relaxed font-dm-sans font-semibold mt-4">
                  Bugis Credit Pte Ltd is a licensed moneylender (License No. 27/2025) listed in the
                  [Registry of Moneylenders], under the Ministry of Law in Singapore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .loan-slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #FEDC00;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .loan-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .loan-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #FEDC00;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .loan-slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
