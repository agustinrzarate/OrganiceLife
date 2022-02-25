import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Statistics = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M21.125 1.625H4.875a3.25 3.25 0 0 0-3.25 3.25v16.25a3.25 3.25 0 0 0 3.25 3.25h16.25a3.25 3.25 0 0 0 3.25-3.25V4.875a3.25 3.25 0 0 0-3.25-3.25ZM16.25 19.5v-8.125M19.5 19.5v-13M6.5 19.5v-3.25M9.75 13v6.5M13 14.625V19.5"
      stroke="#000"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Statistics;
