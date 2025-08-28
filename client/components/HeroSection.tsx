export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
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

            {/* Apply Now Button */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 lg:justify-start justify-center">
              <button className="bg-gold hover:bg-gold-border text-navy-dark px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold font-inter transition-colors shadow-lg hover:shadow-xl">
                Apply Now
              </button>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Singapore Enterprise Badge */}
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">SE</span>
                  </div>
                  <div className="text-xs text-gray-500 hidden sm:block">
                    <div className="font-bold">SINGAPORE'S</div>
                    <div>ENTERPRISE</div>
                  </div>
                </div>

                {/* Review Badge */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-5 sm:w-8 sm:h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ML</span>
                  </div>
                  <div className="text-xs hidden sm:block">
                    <div className="font-bold text-blue-600">Moneylender</div>
                    <div className="text-green-500">Review</div>
                  </div>
                </div>
              </div>
            </div>

            {/* License Info */}
            <p className="text-sm text-gray-500 font-inter">
              Bugis Credit Pte Ltd is a licensed moneylender (License No. 27/2025)
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 rounded-3xl h-full flex items-end justify-center overflow-hidden">
              {/* Placeholder for person image - using a styled div for now */}
              <div className="w-40 h-48 sm:w-56 sm:h-64 lg:w-64 lg:h-80 bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-t-full opacity-70 relative">
                <div className="absolute top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-200 rounded-full"></div>
                <div className="absolute top-12 sm:top-16 lg:top-20 left-1/2 transform -translate-x-1/2 w-10 h-14 sm:w-11 sm:h-16 lg:w-12 lg:h-20 bg-yellow-300 rounded-lg"></div>
                <div className="absolute top-20 sm:top-26 lg:top-32 left-1/2 transform -translate-x-1/2 w-14 h-8 sm:w-16 sm:h-10 lg:w-20 lg:h-12 bg-white rounded-lg opacity-80"></div>
              </div>

              {/* City skyline background */}
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-blue-200 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
