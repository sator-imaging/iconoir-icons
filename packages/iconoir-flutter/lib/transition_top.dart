import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TransitionTop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TransitionTop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 22H6C4.34315 22 3 20.6569 3 19L3 17C3 15.3431 4.34315 14 6 14H18C19.6569 14 21 15.3431 21 17V19C21 20.6569 19.6569 22 18 22Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M3 8V6C3 3.79086 4.79086 2 7 2L17 2C19.2091 2 21 3.79086 21 6V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V6M12 6L9 9M12 6L15 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}