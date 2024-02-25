import { DivCard, TextTag, Button } from '../../../../ui/components/atoms';

import { StyledHomeBanner } from './styled-banner'

export default function HomeBanner() {
  return (
    <StyledHomeBanner>
      <DivCard className='top' flex_dir='column' align='start' max_width='400px'>
        <TextTag as='h1' weight='700' size='4rem' text_align='left' color='normal'>
          More than Just shorter links
        </TextTag>

        <TextTag text_align='left' max_width='450px'>
          Build you brand&apos;s recognition and get detailed
          insights on how your links are performing
        </TextTag>

        <Button radius='15px' margin='2rem 0 0' padding='7px 15px' hover_bg='deemed_cyan'>
          Get Started
        </Button>
      </DivCard>

      <img
        src='/images/illustration-working.svg'
        alt='working illustration'

        height={600}
        width={800}
        // srcSet='/images/illustration-working-mobile.svg 650w, /images/illustration-working.svg 1000w'
      />
    </StyledHomeBanner>
  );
}
