import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} ALX Listing App. All rights reserved.
    </footer>
  );
};

export default Footer;
