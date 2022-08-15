import * as React from "react";
import { SVGProps } from "react";

const AudioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path d="M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14Zm1-14s4 4 4 14-4 14-4 14m6-26s3 4 3 12-3 12-3 12" />
  </svg>
);

export default AudioIcon;
