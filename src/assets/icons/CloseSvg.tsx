import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CloseSvg = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="m11.175 10 3.583-3.575a.837.837 0 0 0-1.183-1.183L10 8.825 6.425 5.242a.837.837 0 1 0-1.183 1.183L8.825 10l-3.583 3.575a.833.833 0 0 0 0 1.183.833.833 0 0 0 1.183 0L10 11.175l3.575 3.583a.833.833 0 0 0 1.183 0 .832.832 0 0 0 0-1.183L11.175 10Z"
      fill="#6B6B6B"
    />
  </Svg>
);

export default CloseSvg;
