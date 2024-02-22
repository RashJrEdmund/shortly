import { MainTag, DivCard } from '../../ui/components/atoms';
import {
  HomeBanner,
  UrlShortener,
  LinkCard,
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
        padding='5rem 0 2rem'
      >
        <DivCard use_desktop_mx_w width='100%' flex_dir='column' min_height='250px' justify='start'>
          <UrlShortener />

          {
            [1, 2, 3].map((card) => (
              <LinkCard key={card} />
            ))
          }
        </DivCard>

        <HomeServices />
      </DivCard>

    </MainTag>
  );
}
