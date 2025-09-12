import { FC } from "react";
import { Search, MapPin, DollarSign, Star, SlidersHorizontal } from "lucide-react";

const SearchBar: FC = () => {
  return (
    <div className="bg-white  rounded-xl -mt-10 mx-auto max-w-7xl px-4 py-4">
      {/* Search Input */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search artists by name or specialty..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            <MapPin className="w-4 h-4" /> Location
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            <DollarSign className="w-4 h-4" /> Price Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            <Star className="w-4 h-4" /> Rating
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            <SlidersHorizontal className="w-4 h-4" /> More Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
