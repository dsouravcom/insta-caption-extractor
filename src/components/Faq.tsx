export default function Faq() {
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Have a question? We've got answers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Is IExtract free to use?
            </h3>
            <p className="text-gray-600">
              Yes! Iextract is completely free to use, and we offer a fresh,
              clean UI with no annoying ads. Our goal is to keep it simple and
              accessible for everyone.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How can I support IExtract?
            </h3>
            <p className="text-gray-600">
              If you find this tool helpful and want to support us, you can buy
              me a coffee here:{" "}
              <a
                href="https://ko-fi.com/souravdotdev"
                className="text-blue-400"
              >
                Buy me a ☕{" "}
              </a>{" "}
              Your support helps keep this tool running smoothly!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I extract captions from private accounts?
            </h3>
            <p className="text-gray-600">
              No, our tool only works with public Instagram posts. You can't
              extract captions from private accounts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Is IExtract secure?
            </h3>
            <p className="text-gray-600">
              No, we do not store any data or track any links you enter.
              Everything happens in real-time without saving anything on our
              servers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I use the extracted captions anywhere?
            </h3>
            <p className="text-gray-600">
              Absolutely! You can copy the extracted captions and use them
              anywhere you want - no formatting needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
