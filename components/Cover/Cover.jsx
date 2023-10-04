import { getOverlayColor, getOverlayOpacity, getMarginBottom } from "utils/layout"
import Image from "next/image"

export const Cover = ({ children, background, overlayColor, overlayOpacity, minHeight, marginBottom }) => {

  return (
    <div
      className="h-screen relative min-h-[400px] flex justify-center items-center"
      style={{
        height: minHeight,
        marginBottom: getMarginBottom(marginBottom),
        position: 'relative',
        backgroundImage: `url(${background})`, // Устанавливаем изображение как фон
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Псевдоэлемент ::before для создания накладываемого фона */}
      <div
        className="overlay"
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: getOverlayOpacity(overlayOpacity),
          background: getOverlayColor(overlayColor),
        }}
      ></div>

      <div className="z-10">{children}</div>
    </div>
  );
}