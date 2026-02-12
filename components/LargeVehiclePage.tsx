import React, { useState } from 'react';
import { ArrowLeft, Truck, Check, Download, ArrowRight, Loader2 } from 'lucide-react';

const LargeVehiclePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate enterprise backend processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans antialiased animate-fade-in">
      {/* IBM-style Breadcrumb / Navigation Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-16 py-6">
          <a 
            href="#" 
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-koda-blue transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Whitepaper Overview (Content) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-koda-blue mb-8">
              <div className="p-2.5 bg-gray-50 border border-gray-100">
                <Truck size={22} />
              </div>
              <span className="uppercase tracking-[0.25em] text-xs font-bold">White Paper</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-normal text-koda-black leading-[1.05] mb-10 tracking-tight">
              <span className="font-bold">Large Vehicle:</span> Capturing Lost Revenue from Large Vehicles in Off-Airport Parking
            </h1>

            <div className="space-y-8 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl lg:text-2xl text-koda-black">
                The off-airport parking sector is systematically under-monetizing a growing segment of its inventory: oversized vehicles. SUVs, large trucks, and vans consistently occupy more space and increase operational friction, yet they are often charged the same standard rate as a compact sedan.
              </p>
              
              <p className="text-xl lg:text-2xl">
                This represents a significant missed revenue opportunity and an inefficient use of premium parking assets. A specialized digital platform can implement a mandatory oversized vehicle surcharge to turn overlooked square footage into a source of increased revenue.
              </p>

              <div className="mt-16">
                <h2 className="text-2xl font-bold text-koda-black mb-10 border-b border-gray-100 pb-4">In this white paper, you can find:</h2>
                
                <div className="space-y-10">
                  {[
                    "Insights into the financial and logistical costs of oversized vehicles, which frequently encroach upon adjacent spaces and increase operator liability exposure.",
                    "The missing revenue opportunity, where most reservations are priced solely on duration, failing to account for the actual 1.2 – 1.5 spaces oversized vehicles consume.",
                    "The blueprint for the Digital Upcharge Workflow, where the customer is required to input their vehicle details and the system automatically flags it as Oversized.",
                    "How the platform achieves Guaranteed Revenue Capture by converting a manual, inconsistent process into a mandatory digital payment.",
                    "Strategies to implement a surcharge before arrival on the customer's mobile device, ensuring no staff conflict and eliminating stressful counter arguments."
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="mt-2 w-2 h-2 rounded-full bg-koda-blue shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <p className="text-lg lg:text-xl text-gray-800 leading-snug">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 py-8 px-10 bg-gray-50 border-l-4 border-koda-blue">
                <p className="text-xl font-bold text-koda-black italic">
                  Access the full report by filling out the form below.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: PDF Download Lead Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              {!submitted ? (
                <div className="bg-white border border-gray-200 p-8 lg:p-12 shadow-sm relative overflow-hidden">
                  {/* IBM Visual Accent Stripe */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-koda-blue"></div>
                  
                  <h3 className="text-2xl font-bold text-koda-black mb-10">Download Whitepaper</h3>
                  
                  <form onSubmit={handleDownload} className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                        <input required type="text" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-koda-blue outline-none transition-colors font-semibold text-lg" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                        <input required type="text" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-koda-blue outline-none transition-colors font-semibold text-lg" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Business Email</label>
                      <input required type="email" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-koda-blue outline-none transition-colors font-semibold text-lg" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company Name</label>
                      <input required type="text" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-koda-blue outline-none transition-colors font-semibold text-lg" />
                    </div>

                    <div className="pt-4">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="relative mt-1">
                          <input required type="checkbox" className="peer h-5 w-5 appearance-none border-2 border-gray-200 checked:bg-koda-blue checked:border-koda-blue transition-all cursor-pointer" />
                          <Check className="absolute top-0.5 left-0.5 text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none" size={16} strokeWidth={4} />
                        </div>
                        <span className="text-sm text-gray-600 font-medium leading-relaxed">
                          By supplying your contact details, you agree to receive occasional emails related to services and industry trends from KodaCars. To know more, please refer to our <a href="#" className="text-koda-blue underline underline-offset-4 hover:text-koda-darkblue font-bold">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <button 
                      disabled={loading}
                      type="submit" 
                      className="w-full bg-koda-blue text-white py-6 px-8 font-bold text-xl flex items-center justify-between group hover:bg-koda-darkblue transition-all shadow-md active:scale-[0.98]"
                    >
                      {loading ? (
                        <>
                          <span>Authorizing...</span>
                          <Loader2 className="animate-spin" size={24} />
                        </>
                      ) : (
                        <>
                          <span>Download Whitepaper</span>
                          <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={24} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 p-12 text-center shadow-xl animate-fade-in-up">
                  <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                    <Check size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-koda-black mb-4">Verification Successful</h3>
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    Your large vehicle optimization framework is now available for download.
                  </p>
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center w-full bg-koda-blue text-white py-6 px-8 font-bold text-xl gap-3 hover:bg-koda-darkblue transition-all shadow-lg"
                  >
                    <Download size={24} />
                    Download PDF (2.6 MB)
                  </a>
                  <p className="mt-8 text-sm text-gray-400 font-bold uppercase tracking-widest">A copy has been sent to your inbox</p>
                </div>
              )}

              {/* IBM Style Quote / Social Proof */}
              <div className="mt-12 p-8 border border-gray-100 bg-gray-50/40 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=200" alt="Executive" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-600 italic font-medium leading-relaxed text-sm">
                    "We were losing thousands monthly by not accounting for SUVs. This digital surcharge fixed it overnight."
                  </p>
                  <p className="text-xs font-bold text-koda-black mt-2 uppercase tracking-widest">— General Manager, Premier Parking</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LargeVehiclePage;