// Copyright 2024 Administrator
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Reviews",
    //   link: "#reviews",
    //   className: "nav-link",
    // },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar + ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
