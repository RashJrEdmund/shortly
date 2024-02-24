import { Link } from 'react-router-dom';
import { Button, DivCard, TextTag } from '../../atoms';

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

export default function NavBar() {
  return (
    <DivCard as='nav' // nav for schematic html
      use_desktop_mx_w
      width='100%'
      margin='0 auto'
      padding='1.3rem 0 10px'
      justify='space-between'
    >
      <DivCard gap='1rem'>
        <TextTag as={Link} to='/'>
          <TextTag as='h1' weight='700' size='1.75rem'>
            Shortly
          </TextTag>
        </TextTag>

        <DivCard gap='1rem'>
          {
            RIGHT_NAV.map(({ text, route }) => (
              <TextTag to={route} key={text} color='deemed' hover_color='normal'>
                {text}
              </TextTag>
            ))
          }
        </DivCard>
      </DivCard>

      <DivCard gap='1rem'>
        <Button as={Link} to='/login' no_white_space bg='none' radius='15px' padding='7px 15px'>
          Login
        </Button>

        <Button as={Link} to='/sign-up' no_white_space radius='15px' padding='7px 15px' hover_bg='deemed_cyan'>
          Sign Up
        </Button>
      </DivCard>
    </DivCard>
  );
}
