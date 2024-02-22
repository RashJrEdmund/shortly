import { DivCard, TextTag } from '../../../../ui/components/atoms';
import { ServiceCardWrapper, StyledServiceCardImage } from './styled-service-card-img';

const APP_SERVICES: {
  img_url: string
  header: string
  content: string
}[] = [
    {
      img_url: '/images/icon-brand-recognition.svg',
      header: 'Brand Recognition',
      content: `Boost your brand recognition with each click. Generic links don't mean a thing.
      Branded links help instil confidence in your content.`
    },
    {
      img_url: '/images/icon-detailed-records.svg',
      header: 'Detailed Records',
      content: `Gain insights into who is clicking your links. Knowing when and where people
      engage with your content helps inform better decisions.`
    },
    {
      img_url: '/images/icon-fully-customizable.svg',
      header: 'Fully Customizable',
      content: `Improve brand awareness and content discoverability through customizable links. supercharging audience
      engagement`
    }
  ]

export default function HomeServices() {
  return (
    <>
      <DivCard width='100%' margin='3rem auto' flex_dir='column' gap='10px' max_width='460px'>
        <TextTag as='h2' weight='700' size='2.25rem' color='normal'>
          Advanced Statistics
        </TextTag>

        <TextTag size='1rem'>
          Track how your links are performing across the web with our
          advanced statistics dashboard
        </TextTag>
      </DivCard>

      <ServiceCardWrapper>
        {
          APP_SERVICES.map(({ img_url, header, content }) => (
            <DivCard width='min(97vw, 270px)' min_height='200px' bg='light'
              flex_dir='column' align='start' justify='start' key={header}
              radius='3px' padding='13px'
            >
              <StyledServiceCardImage
                src={img_url}
                alt='service image'
              />

              <TextTag no_white_space color='normal' weight='600' text_align='left'>
                {header}
              </TextTag>

              <TextTag text_align='left'>
                {content}
              </TextTag>
            </DivCard>
          ))
        }
      </ServiceCardWrapper>
    </>
  )
}