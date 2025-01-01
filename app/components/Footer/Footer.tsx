'use client'
import React from "react";
import "./Footer.css";
import Link from "next/link";
import useMediaQuery from "../MediaQueryCutomHook";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <footer>
      <div className="footer-first-row">
      <div>
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from Metta Muse.</p>
        <input type="text" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>

      <div>
        <h4>CONTACT US</h4>
        <p>customercare@mettamuse.com</p>
        <h4>Currency</h4>
        <div className="currency-usd">
         <div  className="american-flag">
         <img
            src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000"
            alt="american flag"
           
          />
         </div>
          <p>USD</p>
        </div>
        <p>
          Transactions will be completed in Euros and currency reference is
          available on hover.
        </p>
      </div>
      </div>
<hr />
      {isSmallScreen ? (
        <>
          <details>
            <summary>Metta Muse</summary>
            <h4>metta muse</h4>
            <ol>
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Stories</Link>
              </li>
              <li>
                <Link href="">Artisans</Link>
              </li>
              <li>
                <Link href="">Boutique</Link>
              </li>
              <li>
                <Link href="">Contact Us</Link>
              </li>
              <li>
                <Link href="">EU Compliance Docs</Link>
              </li>
            </ol>
          </details>

          <details>
            <h4>QUICK LINKS</h4>
            <summary>Quick Links</summary>
            <ol>
              <li>
                <Link href="">Order & Shipping</Link>
              </li>
              <li>
                <Link href="">Join/Login as a Seller</Link>
              </li>
              <li>
                <Link href="">Payment & Pricing</Link>
              </li>
              <li>
                <Link href="">Return & Refunds</Link>
              </li>
              <li>
                <Link href="">FAQs</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li>
                <Link href="">Terms and Conditions</Link>
              </li>
            </ol>
          </details>
        </>
      ) : (
        <>
          <ol>
            <h4>metta muse</h4>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Stories</Link>
            </li>
            <li>
              <Link href="">Artisans</Link>
            </li>
            <li>
              <Link href="">Boutique</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
            <li>
              <Link href="">EU Compliance Docs</Link>
            </li>
          </ol>

          <ol>
            <h4>QUICK LINKS</h4>
            <li>
              <Link href="">Order & Shipping</Link>
            </li>
            <li>
              <Link href="">Join/Login as a Seller</Link>
            </li>
            <li>
              <Link href="">Payment & Pricing</Link>
            </li>
            <li>
              <Link href="">Return & Refunds</Link>
            </li>
            <li>
              <Link href="">FAQs</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
            <li>
              <Link href="">Terms and Conditions</Link>
            </li>
          </ol>
        </>
      )}

      <h4>FOLLOW US</h4>
      <div className="social-links">
        <img
          src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
          alt="Facebook"
        />
        <img
          src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
          alt="Instagram"
        />
      </div>

      <div className="payments-imgs">
        <img
          src="https://img.icons8.com/?size=100&id=am4ltuIYDpQ5&format=png&color=000000"
          alt="Visa"
        />
        <img
          src="https://img.icons8.com/?size=100&id=13610&format=png&color=000000"
          alt="MasterCard"
        />
        <img
          src="https://img.icons8.com/?size=100&id=13611&format=png&color=000000"
          alt="PayPal"
        />
        <img
          src="https://img.icons8.com/?size=100&id=13607&format=png&color=000000"
          alt="Apple Pay"
        />
        <img
          src="https://img.icons8.com/?size=100&id=Z4vrAJWLiI4D&format=png&color=000000"
          alt="Stripe"
        />
      </div>
    </footer>
  );
};

export default Footer;
