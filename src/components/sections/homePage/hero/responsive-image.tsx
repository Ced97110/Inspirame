import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import cld from '@components/utils/cloudinary';
import Image from 'next/image';
import { auto } from "@cloudinary/url-gen/qualifiers/quality";



interface imageProps {
  priority:boolean
  className?:string;
  alt:string
  height?:number
  width?:number
  fill?:boolean
  src:string

}

function ResponsiveImage({priority, className, alt,width,height,fill,src}:imageProps) {
    
  return (
    <picture>
      <source 
        media="(min-width: 1024px)" 
        srcSet={src}
      />
      <source 
        media="(min-width: 768px)" 
        srcSet={src}
      />
      <Image 
        src={src} 
        alt={alt}
        className={className}
        height={height}
        width={width}
        fill={fill}
        style={{ transform: "translate3d(0, 0, 0)"}}
        priority={priority}
      />
    </picture>
  );
}

export default ResponsiveImage