import { SvgXml } from 'react-native-svg'

const svgXmlContent = `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" />
<g clip-path="url(#clip0_160_712)">
<path d="M19 19L33 33M19 33L33 19" stroke="#FF2972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_160_712">
<rect width="24" height="24" fill="white" transform="translate(14 14)"/>
</clipPath>
</defs>
</svg>`

const SvgComponent = (props) => {
  return (
    <SvgXml
      xml={svgXmlContent}
      width={props?.width}
      height={props?.height}
      fill={props.fill}
    />
  )
}

export default SvgComponent
