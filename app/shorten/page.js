"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  const copyToClipboard = () => {
    if (generated) {
      navigator.clipboard.writeText(generated)
        .then(() => alert('Link copied to clipboard!'))
        .catch((error) => console.error('Error copying link: ', error));
    }
  };

  return (
    <main
      className="min-h-screen bg-black flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/green.jpg')" }} // Background image instead of video
    >
      <section className="relative text-green-400 p-6 shadow-xl w-[50%] h-[60vh] z-10 flex flex-col items-start gap-6">
        
        {/* "Generate Short URLs" text */}
        <h1
          className="absolute left-6 top-0 transform -translate-y-3/4 text-1xl font-semibold text-white"
        >
          Generate Short URLs
        </h1>

        {/* URL Input fields */}
        <div className="flex flex-col gap-4 w-full">
          <input
            type="text"
            value={url}
            className="px-4 py-2 border-2 border-green-600 bg-transparent focus:outline-none focus:border-green-600 rounded-md w-[60%]" 
            placeholder="Enter your URL"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            value={shortUrl}
            className="px-4 py-2 border-2 border-green-600 bg-transparent focus:outline-none focus:border-green-600 rounded-md w-[60%]" 
            placeholder="Enter your preferred short URL text"
            onChange={(e) => setShortUrl(e.target.value)}
          />
          
          {/* "Generate" Button with fixed width */}
          <button
            onClick={generate}
            className="border-2 border-green-600 text-white py-2 px-4 rounded-md font-bold bg-transparent hover:bg-green-600 w-[20%]"
          >
            Generate
          </button>
        </div>

        {/* Display generated short URL */}
        {generated && (
          <div>
            <span className="font-bold text-lg">Your Link: </span>
            <code>
              <Link target="_blank" href={generated} className="text-green-400 hover:text-green-600 transition-colors duration-200">
                {generated}
              </Link>
            </code>

           {/* "Copy" Button */}
<div className="flex justify-center w-full mt-4">
  <button
    onClick={copyToClipboard}
    className="border-2 border-green-600 text-white py-1 px-6 rounded-md font-bold bg-transparent hover:bg-green-600 w-[20%] flex items-center justify-center"
  >
    Copy
  </button>
</div>

        {/* Footer with developer attribution */}
        <div className="absolute bottom-1 w-full flex justify-center">
          <p className="text-center text-lg text-white">
            --Developed by{" "}
            <a
              href="https://www.linkedin.com/in/sanidhyapn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-600 transition-colors duration-200"
            >
              sanidhyapn
            </a>
            --
          </p>
        </div>
      </section>
    </main>
  );
};

export default Shorten;
