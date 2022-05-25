import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../button/button';
import { HeaderContainer, NavbarContainer, MobileMenuContainer } from './navbar.component.styles';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <NavbarContainer>
        {' '}
        <Link href='/'>
          <img src='logo.svg' alt='' />
        </Link>
        <ul>
          <li className={pathname === '/about' && 'active'}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={pathname === '/blog' && 'active'}>
            <a href='https://medium.com/safient' target='_next'>
              Blog
            </a>
          </li>
          <li className={pathname === '/docs' && 'active'}>
            <a href='https://docs.safient.io/' target='_next'>
              Docs
            </a>
          </li>

          <li className={pathname === '/developers' && 'active'}>
            <a href='https://docs.safient.io/dev-overview' target='_next'>
              Developers
            </a>
          </li>
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
                  <a href='https://medium.com/safient' target='_next'>
                    Blog
                  </a>
                </li>
                <li className={pathname === '/docs' && 'active'}>
                  <a href='https://docs.safient.io/' target='_next'>
                    Docs
                  </a>
                </li>

                <li className={pathname === '/developers' && 'active'}>
                  <a href='https://docs.safient.io/dev-overview' target='_next'>
                    Developers
                  </a>
                </li>
              </ul>
            </MobileMenuContainer>
          )}
        </div>
      </NavbarContainer>
    </HeaderContainer>
  );
};
