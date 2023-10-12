"use client";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { Cover } from "components/Cover";
import { theme } from "theme";
import { ImageCustom } from "components/ImageCuston/ImageCustom";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import { MediaText } from "components/MediaText";
import { ButtonPrimary } from "components/ButtonPrimary";
import { ButtonSecondary } from "components/ButtonSecondary";
import { SliderMain } from "components/SliderMain";
import { ContactForm } from "components/ContactForm";
import { SocialIcons } from "components/SocialIcons";
import { Tickitem } from "components/Tickitem";
import { Carousel } from "components/Carousel";
import { Popup } from "components/Popup";
import { MediaCustom } from "components/MediaCustom";
import { SliderFeedback } from "components/SliderFeedback";
import { AccordionBlock } from "components/AccordionBlock";

export const BlockRenderer = ({ blocks }) => {

  const objToArray = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        background: data[`slides_${slideIndex}_slide_background`],
        icon: data[`slides_${slideIndex}_slide_icon`],
        contentColor: data[`slides_${slideIndex}_slide_content_color`],
        title: data[`slides_${slideIndex}_slide_title`],
        titleSize: data[`slides_${slideIndex}_slide_title_size`],
        text: data[`slides_${slideIndex}_slide_text`],
        textSize: data[`slides_${slideIndex}_slide_text_size`],
        buttonBg: data[`slides_${slideIndex}_slide_button_bg`],
        buttonLabelColor: data[`slides_${slideIndex}_slide_button_label_color`],
        buttonLabel: data[`slides_${slideIndex}_slide_button_label`],
        buttonDestination: data[`slides_${slideIndex}_slide_button_destination`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayCarousel = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        image: data[`slides_${slideIndex}_slide_image`],
        alt: data[`slides_${slideIndex}_slide_alt`],
        ratio: data[`slides_${slideIndex}_slide_ratio`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayFeedback = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        name: data[`slides_${slideIndex}_slide_name`],
        review: data[`slides_${slideIndex}_slide_review`],
        date: data[`slides_${slideIndex}_slide_date`],
        place: data[`slides_${slideIndex}_slide_place`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayAccordion = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        question: data[`slides_${slideIndex}_slide_question`],
        answer: data[`slides_${slideIndex}_slide_answer`],
      };
      arr.push(slide);
    }

    return arr;
  };

  return blocks.map(block => {
    switch (block.name) {
      case "acf/mediacustom": {
        // console.log("MEDIA CUSTOM: ", block.attributes);
        return (
          <MediaCustom
            key={block.id}
            image={block.attributes.data.image}
            titleMark={block.attributes.data.title_mark}
            title={block.attributes.data.title}
            description={block.attributes.data.description}
          />
        )
      }
      case "acf/popupbutton": {
        // console.log("POPUP BUTTON: ", block.attributes);
        return (
          <Popup
            key={block.id}
            label={block.attributes.data.label}
            align={block.attributes.data.align}
          />
        )
      }
      case "acf/carousel": {
        const innerBlocks = objToArrayCarousel(block.attributes.data, "slides");
        // console.log("CAROUSEL: ", innerBlocks)
        return (
          <Carousel
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/tickitem": {
        return (
          <Tickitem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Tickitem>
        )
      }
      case "acf/socialicons": {
        // console.log("SOCIAL ICONS: ", block.attributes);
        return (
          <SocialIcons
            key={block.id}
            align={block.attributes.data.align}
          />
        )
      }
      case "acf/contactform": {
        // console.log("CONTACT FORM: ", block.attributes);
        return (
          <ContactForm
            key={block.id}
            buttonText={block.attributes.data.button_text}
          />
        )
      }
      case "acf/buttonprimary": {
        // console.log("BUTTON PRIMARY: ", block.attributes);
        return (
          <ButtonPrimary
            key={block.id}
            text={block.attributes.data.text}
            link={block.attributes.data.link}
          />
        )
      }
      case "acf/buttonsecondary": {
        // console.log("BUTTON SECONDARY: ", block.attributes);
        return (
          <ButtonSecondary
            key={block.id}
            text={block.attributes.data.text}
            link={block.attributes.data.link}
          />
        )
      }
      case "acf/slidermain": {
        const innerBlocks = objToArray(block.attributes.data, "slides");
        // console.log("SLIDER: ", innerBlocks)
        return (
          <SliderMain
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/sliderfeedback": {
        const innerBlocks = objToArrayFeedback(block.attributes.data, "slides");
        // console.log("SLIDER FEEDBACK: ", innerBlocks)
        return (
          <SliderFeedback
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/accordion": {
        const innerBlocks = objToArrayAccordion(block.attributes.data, "slides");
        // console.log("ACCORDION: ", innerBlocks)
        return (
          <AccordionBlock
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "core/paragraph": {
        // console.log("PARAGRAPH: ", block.attributes);
        const marginTop = block.attributes.style?.spacing?.margin?.top || '0px';
        const marginBottom = block.attributes.style?.spacing?.margin?.bottom || '0px';
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            fontSize={block.attributes.fontSize}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            marginTop={marginTop}
            marginBottom={marginBottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
          />
        )
      }
      case "core/post-title":
      case "core/heading": {
        // console.log("HEADING: ", block.attributes);
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          />
        );
      }
      case 'core/cover': {
        // console.log("COVER: ", block.attributes);
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
            overlayColor={block.attributes.overlayColor}
            overlayOpacity={block.attributes.dimRatio}
            minHeight={block.attributes.minHeight}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes.style?.spacing?.padding?.left}
            paddingRight={block.attributes.style?.spacing?.padding?.right}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      case "core/columns": {
        // console.log("COLUMNS:", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            align={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            verticalAlignment={block.attributes.verticalAlignment}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            gap={block.attributes.style?.spacing?.blockGap?.left}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case "core/column": {
        // console.log("COLUMN:", block.attributes);
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes.style?.spacing?.padding?.left}
            paddingRight={block.attributes.style?.spacing?.padding?.right}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        )
      }
      case "core/image": {
        // console.log("IMAGE:", block.attributes);
        return (
          <ImageCustom
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
            align={block.attributes.align}
            href={block.attributes?.href}
          />
        )
      }
      case "core/media-text": {
        // console.log("MEDIA TEXT:", block.attributes);
        return (
          <MediaText
            key={block.id}
            height={block.attributes.height}
            mediaLink={block.attributes.mediaLink}
            verticalAlignment={block.attributes.verticalAlignment}
            mediaPosition={block.attributes.mediaPosition}
            innerBlocks={block.innerBlocks}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </MediaText>
        )
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  })
}