import { ChangeEvent, FormEventHandler, useState } from 'react';
import { Button, DivCard, ShortenField, TextTag } from '../../../../../ui/components/atoms';
import { isValidUrl } from '../../../../../utils';
import { shortenUrl } from '../../../../../api';
import { ILink } from '../../../../../interfaces';
import { CLIENT_STORAGE } from '../../../../../store/client-storage';
import { useLinkStore } from '../../../../../store';

export default function UrlShortener() {
  const [url, setUrl] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const localStorage = new CLIENT_STORAGE('local');

  const { setUserUrls } = useLinkStore();

  const saveUserLink = (link: ILink) => {
    const local_links = localStorage.get<ILink[]>('user_links') || [];

    const update = [link, ...local_links];

    localStorage.save('user_links', update);

    setUserUrls(update);
  }

  const handleSubmit: FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (loading) return;

    if (!url.trim()) {
      setUrl('');
      setErrorMsg('Please add a link');
      return;
    }

    if (!isValidUrl(url.trim())) {
      setErrorMsg('Url is invalid');
      return;
    }

    setLoading(true);
    shortenUrl(url)
      .then((res) => {
        const new_link: ILink = {
          id: crypto.randomUUID(),
          short: res.shrtlnk,
          original: res.url,
        };

        saveUserLink(new_link);
      })
      .catch(() => {
        setErrorMsg('An error ocurred, please try again');
      })
      .finally(() => {
        setUrl('');
        setLoading(false);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (errorMsg) setErrorMsg(null);

    setUrl(e.target.value)
  };

  return (
    <DivCard use_desktop_mx_w width='100%'
      bg='dark'
      position='absolute'
      top='0'
      left='50%'
      transform='translate(-50%, -50%)'
      padding='1.4rem 1rem'
      radius='10px'
      media_sx={`
        padding: 10px;
      `}
    >
      <DivCard as='form' width='100%' gap='1rem' padding='10px'
        onSubmit={handleSubmit}
        media_flex_dir='column'
      >
        <DivCard width='100%' position='relative'>
          <ShortenField
            error={!!errorMsg}
            placeholder='Shorten a link here...'
            value={url}
            onChange={handleChange}
          />

          {
            errorMsg && (
              <TextTag color='error' position='absolute' left='0' top='calc(100% + 2px)' size='0.75rem'
                sx='font-style: italic;'
              >
                {errorMsg}
              </TextTag>
            )
          }
        </DivCard>

        <Button padding='14px 15px' no_white_space disabled={loading} bg={loading ? 'deemed_cyan' : 'cyan'}
          media_width='100%'
        >
          Shorten It!
        </Button>
      </DivCard>
    </DivCard>
  )
}
