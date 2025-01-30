import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

// Import the Poppins font as before
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

// Add a new font for the "Welcome to LinkLite" text
const welcomeFont = localFont({
  src: "./fonts/Poppins-ExtraLight.ttf", // Change this to the correct font path
  variable: "--font-welcome",
  weight: "400",
});

export default function Home() {
  return (
    <main
      className="min-h-screen bg-black flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/green.jpg')" }} // Background image instead of video
    >
      {/* Main content section */}
      <section className="relative text-green-400 p-6 shadow-xl w-[50%] h-[60vh] z-10 flex flex-col items-start gap-6">
        
        {/* "Welcome to LinkLite" text above the tagline with a different font and smaller size */}
        <h1
          className={`absolute left-6 top-0 transform -translate-y-3/4 text-1xl font-semibold text-white ${welcomeFont.className}`}
        >
          Welcome to LinkLite
        </h1>

        {/* Tagline positioned on the left side, centered vertically */}
        <h2
          className={`absolute left-6 top-3 transform -translate-y-1 text-3xl font-bold text-white ${poppins.className}`}
        >
          Shrink Links, Share Faster!
        </h2>

        {/* "Try Now" Button below the tagline */}
        <div className="absolute left-6 top-[20%]">
          <Link href="/shorten">
            <button className="border-2 border-green-700 text-white font-bold py-2 px-4 rounded-none hover:bg-green-600 hover:border-green-600 transition-colors duration-200">
              Try Now
            </button>
          </Link>
        </div>

        {/* "Developed by SanidhyaPN" at the bottom center with LinkedIn link */}
        <div className="absolute bottom-1 w-full flex justify-center">
          <p className="text-center text-lg text-white">
            -- Developed by{" "}
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"  // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-6 top-0 transform -translate-y-3/4 text-1xl font-semibold text-white ${welcomeFont.className} "
            >
              sanidhyapn  
            </a>
            {" --"}
          </p>
        </div>
      </section>
    </main>
  );
}
