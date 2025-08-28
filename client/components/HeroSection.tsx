export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2Fc21dac515cdc4a5090590166431634af?format=webp&width=1920"
          alt="Hero Background"
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient Overlay on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:from-white lg:via-white/95 lg:to-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark font-dm-sans leading-tight">
                Singapore's Trusted<br />
                <span className="text-navy">Licensed Money Lender</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-inter max-w-lg mx-auto lg:mx-0">
                Transparent and reliable loan solutions for all your financial needs.
              </p>
            </div>

            {/* Apply Now Button and Logos */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 lg:justify-start justify-center">
              <button className="bg-gold hover:bg-gold-border text-navy-dark px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold font-inter transition-colors shadow-lg hover:shadow-xl">
                Apply Now
              </button>

              {/* Trust Logos */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2Fa5ba9153f92f4acabaeb2a584e001ca2?format=webp&width=120"
                  alt="Trust Badge 1"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2F07d0ae4cb58747efb1366f30c13e2856?format=webp&width=120"
                  alt="Trust Badge 2"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F059469419a6e42e4b9f17b418abfa1f3%2F54354432dbcd4749b96ecff398930598?format=webp&width=120"
                  alt="Trust Badge 3"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* License Info */}
            <p className="text-sm text-gray-500 font-inter">
              Bugis Credit Pte Ltd is a licensed moneylender (License No. 27/2025)
            </p>
          </div>

          {/* Right side - empty to let background image show */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
