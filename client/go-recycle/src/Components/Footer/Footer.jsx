import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>GORecycle | Paper</h2>
      <p>
        &copy; <span>{year}</span> GoRecyclePapers- All Rights 
        Reserved {" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/SamiurRahmanMukul"
        >
          
        </a>
      </p>
    </footer>
  );
}
