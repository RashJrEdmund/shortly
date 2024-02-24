import LinkCard from './link-card/link-card';
import UrlShortener from './url-shortener/url-shortener';
import { DivCard } from '../../../../ui/components/atoms';
import { useLinkStore } from '../../../../store';

export default function UrlFormAndCards() {
  const { userUrls } = useLinkStore();

  return (
    <>
      {/* PARENT COMPONENT HAS POSITION RELATIVE ATTACHED SOR FOR COULD USE ABSOLUTE POSITIONING */}
      <UrlShortener />

      <DivCard use_desktop_mx_w width='100%' flex_dir='column' justify='start' margin='2.6rem 0 0'>
        {
          userUrls?.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))
        }
      </DivCard>
    </>
  )
}
