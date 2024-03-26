import { ClassicImage } from "./classic_image/classicImage";
import { TitleTextContent } from "./title_text_content/titleTextContent";

const layouts = {
  'classic_image': ClassicImage,
  'title_text_content': TitleTextContent
} as const

export default function LayoutsFactory({ name, ...props }: { name: keyof typeof layouts }) {
  const Component = layouts[name]
  if (Component !== undefined) {
    return <Component {...props} />
  }
  return null
}