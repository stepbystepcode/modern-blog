import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <style>{".st0{fill:none}"}</style>
    <path
      d="M6.5 4.9H17c1 0 2.4.5 3.2 1.3.9.8 1.3 1.9 1.3 3.2v6.3c0 1.3-.5 2.4-1.3 3.2-.9.9-1.9 1.3-3.2 1.3H5.7c-1.3 0-2.4-.5-3.2-1.3-.9-.9-1.3-1.9-1.3-3.2V9.4c0-1.3.5-2.4 1.3-3.2.9-.8 1.9-1.3 3.2-1.3h.8m.8 5.3c.4 0 .7.1.9.4.2.2.4.6.4 1v1.2c0 .4-.1.7-.4 1-.2.1-.5.2-.9.2s-.7-.1-.9-.4c-.2-.2-.4-.6-.4-1v-1.2c0-.4.1-.7.4-.9.3-.2.6-.3.9-.3zm8 0c.4 0 .7.1.9.4.2.2.4.6.4 1v1.2c0 .4-.1.7-.4 1-.2.1-.5.2-.9.2s-.7-.1-.9-.4c-.2-.2-.4-.6-.4-1v-1.2c0-.4.1-.7.4-1 .3-.1.6-.2.9-.2zM6.6 2.5l1.5 2.4-1.5-2.4zM16.1 2.5l-1.5 2.4"
      className="st0"
    />
  </svg>
)
export default SvgComponent