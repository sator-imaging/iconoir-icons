import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UserLove extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UserLove({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 17.2798C22 17.8812 21.7625 18.4588 21.3383 18.8861C20.3619 19.8701 19.415 20.8961 18.4021 21.8443C18.17 22.0585 17.8017 22.0507 17.5795 21.8268L14.6615 18.8861C13.7795 17.9972 13.7795 16.5623 14.6615 15.6734C15.5522 14.7758 17.0032 14.7758 17.8938 15.6734L17.9999 15.7803L18.1059 15.6734C18.533 15.2429 19.1146 15 19.7221 15C20.3297 15 20.9113 15.2428 21.3383 15.6734C21.7625 16.1007 22 16.6784 22 17.2798Z" stroke="currentColor" stroke-linejoin="round"/>
<path d="M5 20V19C5 15.134 8.13401 12 12 12C13.0736 12 14.0907 12.2417 15 12.6736" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}