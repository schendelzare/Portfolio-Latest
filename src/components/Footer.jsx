import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },

  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/schendelzare",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/raymark-vergara-0a7840295",
  },

  // {
  //   label: "Facebook",
  //   href: "https://www.facebook.com/raymark.s.vergara/",
  // },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            {/* <ButtonPrimary
              href="mailto:raymarksevillavergara@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            /> */}
          </div>

          <div className=" grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="reveal-up">
            <img src="/images/logo.svg" alt="Logo" height={40} width={40} />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <s className="reveal-up">raymarksevillavergara</s>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
