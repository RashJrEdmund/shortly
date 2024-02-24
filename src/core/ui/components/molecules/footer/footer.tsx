import { DivCard, TextTag } from '../../atoms';
import { FEATURES, RESOURCES, COMPANY } from '../../../ui-constants';
import { Link } from 'react-router-dom';
import { FooterIcons } from './styled-footer';

const MEDIA_ICONS: string[] = [
  '/images/icon-facebook.svg',
  '/images/icon-twitter.svg',
  '/images/icon-pinterest.svg',
  '/images/icon-instagram.svg',
];

export default function Footer() {
  return (
    <DivCard as='footer' bg='deep_dark' width='100%' padding='4rem 2rem' min_height='350px' align='start'>
      <DivCard
        as='section'
        use_desktop_mx_w
        width='100%'
        bg='deep_dark'
        align='start'
        justify='space-between'
        media_flex_dir='column' // media query
        media_align='center'
        gap='2rem'
      >
        <TextTag as='h1' weight='700' size='1.5rem'>
          Shortly
        </TextTag>

        <DivCard
          as='section'
          width='100%'
          max_width='1000px'
          align='start'
          justify='space-around'
          gap='1rem'
          media_flex_dir='column'
          media_align='center'
        >
          {/* THE MID SECTION WITH 3 DIVS */}
          {[FEATURES, RESOURCES, COMPANY].map(({ header, list }) => (
            <DivCard flex_dir='column' align='start' media_align='center' key={header}>
              <TextTag as='h2' weight='600' color='invert' margin='0 0 1rem'>
                {header}
              </TextTag>

              {list.map(({ text, url }) => (
                <TextTag as={Link} to={url} key={text} hover_color='cyan' cursor='pointer' margin='5px 0' no_white_space>
                  {text}
                </TextTag>
              ))}
            </DivCard>
          ))}
        </DivCard>

        <FooterIcons>
          {
            MEDIA_ICONS.map((icon) => (
              <img src={icon} alt={icon} key={icon} />
            ))
          }
        </FooterIcons>
      </DivCard>
    </DivCard>
  );
}
