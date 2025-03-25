import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Extract Instagram captions in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">
              1
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100">
              <Image
                src="https://i.imgur.com/Tl2qTD2.png"
                alt="IExtract - Free Instagram Caption Extractor"
                height={160}
                width={160}
                loading="lazy"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Copy Instagram URL
              </h3>
              <p className="text-gray-600">
                Find the Instagram post you want to extract the caption from and
                copy its URL from the address bar.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">
              2
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100">
              <Image
                src="https://i.imgur.com/amPliF8.png"
                alt="Copy Instagram Captions Instantly with IExtract"
                height={160}
                width={160}
                loading="lazy"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Paste URL & Extract
              </h3>
              <p className="text-gray-600">
                Paste the URL into our tool and click the "Extract Caption"
                button to process the Instagram post.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">
              3
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100">
              <Image
                src="https://i.imgur.com/PN4hjC5.png"
                alt="Best Instagram Caption Grabber - No Ads, No Tracking"
                height={160}
                width={160}
                loading="lazy"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Copy & Use Caption
              </h3>
              <p className="text-gray-600">
                Copy the extracted caption with a single click and use it
                anywhere you want - no formatting needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
