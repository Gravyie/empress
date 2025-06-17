import { Mail, Phone, MapPin } from 'lucide-react';

export default function SupportSection() {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <style>{`
        .aston-bg {
          background: linear-gradient(-45deg, #001A0F, #003A1B, #001A0F, #000);
          background-size: 400% 400%;
          animation: gradientShift 18s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="aston-bg backdrop-blur-md bg-black/60 text-white rounded-xl p-10 shadow-xl max-w-7xl mx-auto space-y-10">

        <h2 className="text-3xl font-bold">Need help?</h2>

        <div className="flex flex-col lg:flex-row justify-between gap-16">
         
          <div className="lg:w-1/2">
            <p className="text-gray-200 mb-4">
              If you need assistance, you can start by checking out our FAQ section,
              where we've compiled answers to some of the most commonly asked questions.
            </p>
            <p className="text-gray-200">
              If you don't find the answer you're looking for there, you can also reach
              out to our customer service team via email or phone.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-200" />
              <span>customerhelp@empress.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-200" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-200" />
              <span>123 Business Street, Lucknow, India</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
