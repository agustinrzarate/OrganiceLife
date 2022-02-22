import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LogOutSvg = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      d="m22.167 14-3.5-3.5M14 14h8.167H14Zm8.167 0-3.5 3.5 3.5-3.5ZM22.167 7V5.833A2.333 2.333 0 0 0 19.833 3.5H8.167a2.333 2.333 0 0 0-2.334 2.333v16.334A2.333 2.333 0 0 0 8.167 24.5h11.666a2.333 2.333 0 0 0 2.334-2.333V21"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LogOutSvg;
