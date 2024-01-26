"use client";

import { FormEvent, useState } from "react";

function isValidAmazonProductURL(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    )
      return true;
    else return false;
  } catch (error) {
    return false;
  }
}

function Searchbar() {
  const [searchPrompt, setSearchPrompt] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);
    alert(isValidLink ? "Valid link" : "Invalid link");
  }

  return (
    <form className="mt-12 flex flex-wrap gap-4 " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
