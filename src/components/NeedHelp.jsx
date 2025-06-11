import { Mail, Phone, MapPin } from 'lucide-react';

export default function SupportSection() {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <h2 className="text-3xl font-bold text-black">Need help?</h2>

        <div className="flex flex-col lg:flex-row justify-between gap-40">
         
          <div className="lg:w-1/2">
            <p className="text-gray-600 mb-4">
              If you need assistance, you can start by checking out our FAQ section,
              where we've compiled answers to some of the most commonly asked questions.
            </p>
            <p className="text-gray-600">
              If you don't find the answer you're looking for there, you can also reach
              out to our customer service team via email or phone.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>customerhelp@empress.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>123 Business Street, Lucknow, India</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
