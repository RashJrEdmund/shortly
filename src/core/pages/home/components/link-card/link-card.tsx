import { DivCard, TextTag, Button } from "../../../../ui/components/atoms";

export default function LinkCard() {
  return (
    <DivCard bg='light' width='100%' justify='space-between' radius='4px' padding='10px' margin='5px auto'>
      <TextTag>
        https://www.frontendmentor.io
      </TextTag>

      <DivCard gap='10px'>
        <TextTag color='cyan'>
          https://www.frontendmentor.io
        </TextTag>

        <Button padding='7px 15px'>Copy</Button>
      </DivCard>
    </DivCard>
  )
}