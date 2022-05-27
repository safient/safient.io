import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../button/button';
import { HeaderContainer, NavbarContainer, MobileMenuContainer } from './navbar.component.styles';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const { pathname } = useRouter();
  console.log(pathname)

  return (
    <HeaderContainer>
      <NavbarContainer>
        {' '}
        <Link href='/'>
          <img src='logo.svg' alt=''/>
        </Link>
        <ul>
          <li className={pathname === '/about' && 'active'}>
            <Link href='/roadmap'>Raoadmap</Link>
          </li>
          <li className={pathname === '/blog' && 'active'}>
            <a href='https://blog.safient.io' target="_blank" rel="noreferrer">Blog</a>
          </li>
          <li className={pathname === '/docs' && 'active'}>
            <a href='https://docs.safient.io' target="_blank" rel="noreferrer">Docs</a>
          </li>

          <li className={pathname === '/developers' && 'active'}>
            <a href='https://code.safient.io' target="_blank" rel="noreferrer">Developers</a>
          </li>

          {/* <li className={pathname === '/app' && 'active'}> */}
            <Link href='/get-started'>
              <Button>Try Now</Button>
            </Link>
          {/* </li> */}
        </ul>
        {/* mobile nav */}
        <div className='hamburger'>
          <div onClick={() => setIsActive((active) => !active)}>
            {isActive ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars'></i>}
          </div>
          {isActive && (
            <MobileMenuContainer>
              <ul onClick={() => setIsActive(!isActive)}>
                <li className={pathname === '/about' && 'active'}>
                  <Link href='/about'>About Us</Link>
                </li>
                <li className={pathname === '/blog' && 'active'}>
                  <Link href='https://blog.safient.io'>Blog</Link>
                </li>
                <li className={pathname === '/docs' && 'active'}>
                  <Link href='https://docs.safient.io'>Docs</Link>
                </li>

                <li className={pathname === '/developers' && 'active'}>
                  <Link href='https://docs.safient.io/dev-overview'>Developers</Link>
                </li>

                <li className={pathname === '/app' && 'active'}>
                  <Link href='https://try.safient.io'>
                    <Button>App</Button>
                  </Link>
                </li>
              </ul>
            </MobileMenuContainer>
          )}
        </div>
      </NavbarContainer>
    </HeaderContainer>
  );
};
