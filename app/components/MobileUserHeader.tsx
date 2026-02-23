import PlaceholderImage from './ui/PlaceholderImage';

export default function MobileUserHeader() {
  return (
    <div className="md:hidden bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <PlaceholderImage
            width={40}
            height={40}
            alt="Dita Nirmala"
            className="rounded-full border-2 border-white"
            backgroundColor="bg-teal-200"
            textColor="text-teal-700"
            text="DN"
          />
          <div>
            <div className="font-medium text-white">Dita Nirmala</div>
            <div className="text-sm text-teal-100 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Kebayoran Baru
            </div>
          </div>
        </div>
        
        <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}