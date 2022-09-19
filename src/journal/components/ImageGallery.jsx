import { ImageList, ImageListItem } from "@mui/material"

export const ImageGallery = ({ images }) => {

  const srcset = (image, size, rows = 1, cols = 1) => ({
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  })


  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            {...srcset(image, 164, 2, 2)}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
