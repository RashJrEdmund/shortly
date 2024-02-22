import { DivCard, TextTag, Button } from '../../../../ui/components/atoms';

export default function HomeBanner() {
  return (
    <DivCard as='section' use_desktop_mx_w
      margin='0 auto'
      width='100%'
      justify='space-between'
      media_flex_dir='column'
      min_height='70vh'
    >
      <DivCard flex_dir='column' align='start' max_width='400px'>
        <TextTag as='h1' weight='700' size='3rem' text_align='left' color='normal'>
          More than Just shorter links
        </TextTag>

        <TextTag text_align='left'>
          Build you brand&apos;s recognition and get detailed
          insights on how your links are performing
        </TextTag>

        <Button radius='15px' margin='1rem 0 0' padding='7px 15px'>
          Get Started
        </Button>
      </DivCard>

      <img src='/images/illustration-working.svg' alt='workign illustration' />
    </DivCard>
  );
}
