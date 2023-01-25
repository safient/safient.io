import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../button/button";
import {
  HeaderContainer,
  NavbarContainer,
  MobileMenuContainer,
} from "./navbar.component.styles";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu.
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive]);

  const { pathname } = useRouter();

  return (
    <>
      <HeaderContainer>
        <NavbarContainer>
          <Link href="/">
            <img src="logo.svg" alt="" />
          </Link>
          <ul>
            <li className={pathname === "/about" && "active"}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathname === "/blog" && "active"}>
              <a
                href="https://blog.safient.io"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
            <li className={pathname === "/docs" && "active"}>
              <a
                href="https://docs.safient.io"
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            </li>

            <li className={pathname === "/developers" && "active"}>
              <a
                href="https://code.safient.io"
                target="_blank"
                rel="noreferrer"
              >
                Developers
              </a>
            </li>

            <Link href="/get-started">
              <Button>Try Now</Button>
            </Link>
          </ul>
          {/* mobile nav */}
          <div className="hamburger">
            <div
              className="menu"
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                height: "5rem",
              }}
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </div>
            {isActive && (
              <MobileMenuContainer
                onClick={() => setIsActive(!isActive)}
                ref={ref}
              >
                <ul onClick={() => setIsActive(!isActive)}>
                  <li className={pathname === "/about" && "active"}>
                    <Link href="/roadmap">Roadmap</Link>
                  </li>
                  <li className={pathname === "/blog" && "active"}>
                    <a
                      href="https://blog.safient.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className={pathname === "/docs" && "active"}>
                    <a
                      href="https://docs.safient.io"
                      target="_next"
                      rel="noreferrer"
                    >
                      Docs
                    </a>
                  </li>

                  <li className={pathname === "/developers" && "active"}>
                    <a
                      href="https://code.safient.io"
                      target="_next"
                      rel="noreferrer"
                    >
                      Developers
                    </a>
                  </li>

                  {/* <li className={pathname === '/app' && 'active'}> */}
                  <Link href="/get-started">
                    <Button>Try Now</Button>
                  </Link>
                </ul>
              </MobileMenuContainer>
            )}
          </div>
        </NavbarContainer>
      </HeaderContainer>
    </>
  );
};
