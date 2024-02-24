import { Link } from 'react-router-dom';
import { Button, DivCard, TextTag } from '../../atoms';
import { LegacyRef, useRef, useState } from 'react';
import { StyledNavBar } from './styled-nav';

const RIGHT_NAV = [
  {
    text: 'Features',
    route: '/features',
  },
  {
    text: 'Pricing',
    route: '/pricing',
  },
  {
    text: 'Resources',
    route: '/resources',
  }
];

const MENU_ICONS = {
  open: '/images/icon-menu.svg',
  close: '/images/icon-menu-close.svg',
}

export default function NavBar() {
  const [menuIcon, setMenuIcon] = useState<string>(MENU_ICONS.open);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const bottomNavRef = useRef<HTMLDivElement>();

  const closeNavMenu = () => {
    // function to close nav
    setMenuOpen(false);
    setMenuIcon(MENU_ICONS.open);
  };

  const toggleNavMenu = () => {
    if (isMenuOpen) {
      console.log('closing menu')
      closeNavMenu();
      return;
    }

    console.log('opening menu');
    setMenuOpen(true);
    setMenuIcon(MENU_ICONS.close);

    bottomNavRef.current?.focus();
  };

  return (
    <StyledNavBar isOpen={isMenuOpen}>
      <DivCard className='top'>
        <TextTag as={Link} to='/'>
          <TextTag as='h1' weight='700' size='1.75rem'>
            Shortly
          </TextTag>
        </TextTag>

        <img id='menu-icon' height={40} width={40} src={menuIcon} alt={menuIcon} onClick={toggleNavMenu} />
      </DivCard>

      <DivCard ref={bottomNavRef as unknown as LegacyRef<HTMLDivElement>} tabIndex={2}
        className='bottom' width='100%' justify='space-between' gap='1rem'
        onBlur={closeNavMenu}
      >
        <DivCard gap='1rem'>
          {
            RIGHT_NAV.map(({ text, route }) => (
              <TextTag as={Link} to={route} key={text} color='deemed' hover_color='normal'
                media_color='invert' media_width='100%'
              >
                {text}
              </TextTag>
            ))
          }
        </DivCard>

        <DivCard gap='1rem'>
          <Button as={Link} to='/login' no_white_space bg='none' radius='15px' padding='7px 15px'
            media_width='100%'
          >
            Login
          </Button>

          <Button as={Link} to='/sign-up' no_white_space radius='15px' padding='7px 15px' hover_bg='deemed_cyan'
            media_width='100%'
          >
            Sign Up
          </Button>
        </DivCard>
      </DivCard>
    </StyledNavBar>
  );
}
