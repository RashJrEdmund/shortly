import { MainTag, DivCard, TextTag, Button } from '../../ui/components/atoms';
import {
  HomeBanner,
  UrlFormAndCards,
  HomeServices
} from './components';

export default function HomePage() {
  return (
    <MainTag>
      <HomeBanner />

      <DivCard as='section'
        width='100%'
        position='relative'
        flex_dir='column'
        justify='start'
        bg='light_grayed'
        min_height='70vh'
        padding='2rem 0'
      >
        <UrlFormAndCards />

        <HomeServices />
      </DivCard>

      <DivCard as='section'
        width='100%'
        bg='dark'
        flex_dir='column'
        gap='1.2rem'
        padding='4rem 10px'
      >
        <TextTag as='h2' weight='600' size='2rem' color='invert'>
          Boost your links today
        </TextTag>

        <Button hover_bg='deemed_cyan' padding='7px 15px' radius='15px' no_white_space>
          Get Started
        </Button>
      </DivCard>
    </MainTag>
  );
}
