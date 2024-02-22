import { ChangeEvent, FormEventHandler, useState } from 'react';
import { Button, DivCard, ShortenField, TextTag } from '../../../../ui/components/atoms';

export default function UrlShortener() {
  const [url, setUrl] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setErrorMsg('Please add a link')
      return;
    }
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
    >
      <DivCard as='form' width='100%' gap='1rem' padding='10px'
        onSubmit={handleSubmit}
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

        <Button padding='14px 15px' no_white_space>
          Shorten It
        </Button>
      </DivCard>
    </DivCard>
  )
}
