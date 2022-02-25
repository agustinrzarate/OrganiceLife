import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BookSvg = ({color = '#000'}: SvgProps) => (
  <Svg width={26} height={26} fill="none">
    <Path
      d="M22.75 24.375H6.5M3.25 21.125a3.25 3.25 0 0 0 3.25 3.25M3.25 21.125a3.25 3.25 0 0 1 3.25-3.25M22.75 17.875H6.5M3.25 4.876a3.25 3.25 0 0 1 3.25-3.25M22.75 1.626H6.5M3.25 4.876v16.25M6.5 17.875V1.625M22.75 1.626v16.25M22.75 17.875c-1.023 2.134-1.079 4.299 0 6.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BookSvg;
