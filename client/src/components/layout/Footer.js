import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white p-2 text-center">
      Copyright &copy; {new Date().getFullYear()} SocialChatApp
    </footer>
  );
}

export default Footer;
