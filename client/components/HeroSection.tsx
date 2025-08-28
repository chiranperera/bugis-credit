export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2Fa015cec1c09f41dba0b9b85510b152f3?format=webp&width=1920"
          alt="Hero Background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left w-full lg:max-w-[650px]">
            <div className="space-y-6">
              {/* Mobile & Desktop Responsive Heading */}
              <h1 className="font-bold text-navy-dark font-dm-sans">
                <span className="block text-4xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-[3.6rem]" 
                      style={{fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', width: 'auto', maxWidth: '680px'}}>
                  Singapore's Trusted
                </span>
                <span className="text-navy block text-4xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-[3.6rem]" 
                      style={{fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', width: 'auto', maxWidth: '680px'}}>
                  Licensed Money Lender
                </span>
              </h1>

              {/* Mobile & Desktop Responsive Paragraph */}
              <p className="text-gray-600 font-inter mx-auto lg:mx-0 text-lg sm:text-xl lg:text-xl leading-relaxed" 
                 style={{fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: '650px', width: '100%'}}>
                Transparent and reliable loan solutions for all your financial
                needs.
              </p>
            </div>

            {/* Apply Now Button and Logos */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 lg:justify-start justify-center">
              <button className="bg-gold hover:bg-gold-border text-navy-dark px-8 py-4 rounded-full text-lg font-bold font-inter transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto min-w-[180px]">
                Apply Now
              </button>

              {/* Trust Logos - Hidden on mobile */}
              <div className="hidden sm:flex items-center justify-center space-x-4 sm:space-x-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2Fa5ba9153f92f4acabaeb2a584e001ca2?format=webp&width=120"
                  alt="Trust Badge 1"
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2F07d0ae4cb58747efb1366f30c13e2856?format=webp&width=120"
                  alt="Trust Badge 2"
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                />
                <img
                  src="/money-lender-review-logo.png"
                  alt="Money Lender Review"
                  className="h-6 sm:h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            </div>

            {/* License Info - Hidden on mobile */}
            <p className="hidden sm:block text-gray-500 font-inter text-center lg:text-left text-sm lg:text-base leading-relaxed" 
               style={{fontSize: 'clamp(0.875rem, 2vw, 1rem)', maxWidth: '650px', width: '100%'}}>
              Bugis Credit Pte Ltd is a licensed moneylender (License No.
              27/2025)
            </p>
          </div>

          {/* Right side - empty to let background image show */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
