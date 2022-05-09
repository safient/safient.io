import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../button/button';
import { HeaderContainer, NavbarContainer } from './navbar.component.styles';

export const Navbar = () => {
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
      </NavbarContainer>
    </HeaderContainer>
  );
};
