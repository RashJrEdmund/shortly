import { useState } from "react";
import { ILink } from "../../../../../interfaces";
import { DivCard, TextTag, Button } from "../../../../../ui/components/atoms";

interface Props {
  link: ILink;
}

export default function LinkCard({ link }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied((prev) => !prev);
  };

  return (
    <DivCard bg='light' width='100%' justify='space-between' radius='4px' padding='10px' margin='5px auto'>
      <TextTag text_align='left'>
        {link.original}
      </TextTag>

      <DivCard gap='10px'>
        <TextTag color='cyan' text_align='left'>
          {link.short}
        </TextTag>

        <Button
          padding='7px 15px'
          bg={isCopied ? 'dark' : 'cyan'}
          onClick={handleCopy}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </Button>
      </DivCard>
    </DivCard>
  )
}