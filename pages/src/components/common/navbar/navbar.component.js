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
          <li className={pathname === '/blog' && 'active'}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={pathname === '/docs' && 'active'}>
            <Link href='/docs'>Docs</Link>
          </li>

          <li className={pathname === '/developers' && 'active'}>
            <Link href='/timeline'>Developers</Link>
          </li>
          <li className={pathname === '/app' && 'active'}>
            <Link href='/contact'>
              <Button>App</Button>
            </Link>
          </li>
        </ul>
        {/* mobile nav */}
        <div className='hamburger'>
          <div onClick={() => setIsActive((active) => !active)}>
            {isActive ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars'></i>}
          </div>
          {isActive && (
            <MobileMenuContainer>
              <ul>
                <li className={pathname === '/blog' && 'active'}>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li className={pathname === '/docs' && 'active'}>
                  <Link href='/docs'>Docs</Link>
                </li>

                <li className={pathname === '/developers' && 'active'}>
                  <Link href='/timeline'>Developers</Link>
                </li>
                <li className={pathname === '/app' && 'active'}>
                  <Link href='/contact'>
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
