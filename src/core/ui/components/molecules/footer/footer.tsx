import { DivCard, TextTag } from '../../atoms';
import { FEATURES, RESOURCES, COMPANY } from '../../../ui-constants';

export default function Footer() {
  return (
    <DivCard as='footer'
      bg='deep_dark'
      width='100%'
      padding='4rem 2rem'
    >
      <DivCard as='section' use_desktop_mx_w
        width='100%'
        bg='deep_dark'
        align='start'
        justify='space-between'
        media_flex_dir='column' // media query
        gap='2rem'
      >
        <TextTag as='h1' weight='700' size='1.5rem'>
          Shortly
        </TextTag>

        <DivCard as='section' width='100%' max_width='1000px' align='start' justify='space-around' gap='1rem' media_flex_dir='column'> {/* THE MID SECTION WITH 3 DIVS */}
          {
            [FEATURES, RESOURCES, COMPANY].map(({ header, list }) => (
              <DivCard flex_dir='column' align='start' key={header}>
                <TextTag as='h2' weight='600' color='invert'>
                  {header}
                </TextTag>

                {
                  list.map(({ text }) => (
                    <TextTag key={text}>
                      {text}
                    </TextTag>
                  ))
                }
              </DivCard>
            ))
          }
        </DivCard>

        <DivCard>
          Media Icons
        </DivCard>
      </DivCard>
    </DivCard>
  );
}
