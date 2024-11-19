import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-main-box">
      <div className="footer-boxs">
        <h2 className="footer-nav-logo">The Peanut News</h2>
        <div className="footer-info-box">
          <Link href="/" className="footer-info-link">hakkımızda</Link>
          <Link href="/" className="footer-info-link">iletisim</Link>
          <Link href="/" className="footer-info-link">gizlilik politikası</Link>
        </div>
      </div>
      <div className="footer-boxs">
        <span className="footer-rights-box">
          <span
            style={{
              paddingTop: "0.2rem",
            }}
          >
            <FaRegCopyright />
          </span>{" "}
          <span>2024 The Peanut News. Tüm Haklar saklıdır</span>
        </span>
        <div className="footer-icon-box">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
