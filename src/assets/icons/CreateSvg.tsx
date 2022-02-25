import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const CreateSvg = ({color = '#000'}: SvgProps) => (
  <Svg width={26} height={26} fill="none">
    <G
      clipPath="url(#a)"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M.723 5.558c0-.88.332-1.723.924-2.344a3.076 3.076 0 0 1 2.229-.971M22.79 5.558c0-.88-.331-1.723-.923-2.344a3.076 3.076 0 0 0-2.229-.971M22.79 22.132c0 .88-.331 1.723-.923 2.345a3.076 3.076 0 0 1-2.229.97M.723 22.132c0 .88.332 1.723.924 2.345.59.621 1.393.97 2.229.97M22.79 15.502v3.315M22.79 8.873v3.315M.723 15.502v3.315M.723 8.873v3.315M10.18 2.243H7.029M16.486 2.243h-3.153M10.18 25.447H7.029M16.486 25.447h-3.153M8.604 13.845h6.305M11.757 10.53v6.63" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CreateSvg;
