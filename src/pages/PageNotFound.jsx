import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="relative mt-10 flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-900 via-slate-800 to-black px-3 py-10">
      <div className="film-strip film-strip-left" aria-hidden="true"></div>
      <div className="film-strip film-strip-right" aria-hidden="true"></div>
      <div className="absolute inset-x-8 top-12 h-24 rounded-full bg-red-600/15 blur-3xl animate-marquee-glow" aria-hidden="true"></div>

      <div className="max-w-md w-full text-center z-10">
        {/* Error Code */}
        <div className="mb-8 animate-fade-up">
          <h1 className="animate-soft-pulse text-9xl font-bold bg-linear-to-r from-red-600 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Movie theater curtain effect */}
        <div className="mb-8 relative animate-fade-up animation-delay-150">
          <div className="bg-red-700 h-2 rounded-full"></div>
          <div className="relative mt-4 overflow-hidden rounded-lg border-2 border-red-700 bg-slate-800 px-6 py-8 shadow-2xl">
            <div className="curtain-shine" aria-hidden="true"></div>
            <h2 className="text-3xl font-bold text-white mb-3">Scene Not Found</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              It looks like the movie you're looking for has been cut from the final scene. The page doesn't exist in our cinema database.
            </p>
          </div>
          <div className="bg-red-700 h-2 rounded-full mt-4"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up animation-delay-300">
          <Link to="/"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Back to Home
          </Link>
          <Link to="/movies/popular"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-slate-500 inline-block"
          >
            Browse Movies
          </Link>
        </div>

        {/* Footer text */}
        <p className="mt-8 text-gray-400 text-sm">
          Error Code: 404 | Page Not Found in CineMate Database
        </p>
      </div>
    </div>
  );
}
