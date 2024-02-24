import { useEffect, useState } from 'react';
import { ILink } from '../../../../../interfaces';
import { DivCard, TextTag, Button } from '../../../../../ui/components/atoms';
import { copyToClipBoard } from '../../../../../utils';

interface Props {
  link: ILink;
  copiedLinks: string[],
  setCopiedLinks: React.Dispatch<React.SetStateAction<string[]>>,
}

export default function LinkCard({ link, copiedLinks, setCopiedLinks }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    await copyToClipBoard(link.short); // copying to clipboard returns a promise.
    setCopiedLinks([link.id]); // keeping track of does copied.
  };

  useEffect(() => {
    if (copiedLinks.includes(link.id)) setIsCopied(true);
    else setIsCopied(false);
  }, [copiedLinks, link.id]);

  return (
    <DivCard bg='light' width='100%' justify='space-between' radius='4px' padding='10px' margin='5px auto' gap='14px'
      media_flex_dir='column'
      media_align='start'
    >
      <TextTag text_align='left'>
        {link.original}
      </TextTag>

      <DivCard gap='14px'
        media_width='100%'
        media_flex_dir='column'
        media_align='start'
      >
        <TextTag color='cyan' text_align='left'>
          {link.short}
        </TextTag>

        <Button
          padding='7px 15px'
          min_width='95px'
          bg={isCopied ? 'dark' : 'cyan'}
          onClick={handleCopy}
          media_width='100%'
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </Button>
      </DivCard>
    </DivCard>
  )
}