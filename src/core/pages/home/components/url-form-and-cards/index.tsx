/* eslint-disable react-hooks/exhaustive-deps */
import LinkCard from './link-card/link-card';
import UrlShortener from './url-shortener/url-shortener';
import { DivCard } from '../../../../ui/components/atoms';
import { useLinkStore } from '../../../../store';
import { useEffect, useState } from 'react';
import { CLIENT_STORAGE } from '../../../../store/client-storage';
import { ILink } from '../../../../interfaces';

export default function UrlFormAndCards() {
  const [copiedLinks, setCopiedLinks] = useState<string[]>(['']);
  const { userUrls, setUserUrls } = useLinkStore();
  const localStorage = new CLIENT_STORAGE('local');

  useEffect(() => {
    const local_links = localStorage.get<ILink[]>('user_links') || [];

    if (local_links) setUserUrls(local_links);
  }, []);

  return (
    <>
      {/* PARENT COMPONENT HAS POSITION RELATIVE ATTACHED SOR FOR COULD USE ABSOLUTE POSITIONING */}
      <UrlShortener />

      <DivCard use_desktop_mx_w width='100%' flex_dir='column' justify='start' margin='2.6rem 0 0' media_sx='margin: 3.4rem 0 0'>
        {
          userUrls?.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              copiedLinks={copiedLinks}
              setCopiedLinks={setCopiedLinks}
            />
          ))
        }
      </DivCard>
    </>
  )
}
