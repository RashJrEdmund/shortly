import { Link } from 'react-router-dom';
import { Button, DivCard, TextTag } from '../../atoms';

const RIGHT_NAV = [
  {
    text: 'Features',
    route: 'features',
  },
  {
    text: 'Pricing',
    route: 'pricing',
  },
  {
    text: 'Resources',
    route: 'resources',
  }
];

export default function NavBar() {
  return (
    <DivCard as='nav' // nav for schematic html
      use_desktop_mx_w
      width='100%'
      margin='0 auto'
      padding='10px 0'
      justify='space-between'
    >
      <DivCard gap='1rem'>
        <TextTag as='h1' weight='700' size='1.5rem'>
          <Link to='/'>
            Shortly
          </Link>
        </TextTag>

        <DivCard gap='1rem'>
          {
            RIGHT_NAV.map(({ text, route }) => (
              <Link to={route} key={text}>
                <TextTag>
                  {text}
                </TextTag>
              </Link>
            ))
          }
        </DivCard>
      </DivCard>

      <DivCard gap='1rem'>
        <Button bg='none' radius='15px' padding='7px 15px'>
          Login
        </Button>

        <Button radius='15px' padding='7px 15px'>
          Sign Up
        </Button>
      </DivCard>
    </DivCard>
  );
}
