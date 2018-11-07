const animationPropValidator = {
  'duration': RegExp('(?<!.)(\\.)?[1-9](\\.)?[0-9]{3}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9]{2}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9](s|ms)(?!.)|(?<!.)(\\.)?[0-9](s|ms)(?!.)'),
  'timing-function': RegExp('(?<!.)linear(?!.)|(?<!.)ease(?!.)|(?<!.)ease-in(?!.)|(?<!.)ease-out(?!.)|(?<!.)ease-in-out(?!.)'),
  'delay': RegExp('(?<!.)(\\.)?[1-9](\\.)?[0-9]{3}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9]{2}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9](s|ms)(?!.)|(?<!.)(\\.)?[0-9](s|ms)(?!.)'),
  'iteration-count': RegExp('(?<!.)infinite(?!.)|(?<!.)[0-9](?!.)|(?<!.)[1-9][0-9](?!.)'),
  'direction': RegExp('(?<!.)normal(?!.)|(?<!.)reverse(?!.)|(?<!.)alternate(?!.)|(?<!.)alternate-reverse(?!.)'),
  'fill-mode': RegExp('(?<!.)forwards(?!.)|(?<!.)none(?!.)|(?<!.)backwards(?!.)|(?<!.)both(?!.)')
}

const keyframeStageValidator = RegExp('(?<!.)[1-9][0-9]{2}%(?!.)|(?<!.)[1-9][0-9]%(?!.)|(?<!.)[0-9]%(?!.)')

const keyframeValueValidator = {
  'opacity': RegExp('(?<!.)[0-1](\.)[0-9]([0-9])?(?!.)'),
  'height': RegExp('(?<!.)[1-9][0-9]{3}(px|%|em)(?!.)|(?<!.)[1-9][0-9]{2}(px|%|em)(?!.)|(?<!.)[1-9][0-9](px|%|em)(?!.)|(?<!.)[0-9](px|%|em)(?!.)'),
  'display': RegExp('(?<!.)none(?!.)|(?<!.)block(?!.)|(?<!.)inline(?!.)|(?<!.)inline-block(?!.)'),
  'background-color': RegExp(),
  'background-image': RegExp('(?<!.)none(?!.)'),
}

const transformValidator = {
  rotate: RegExp('rotate(X|Y)?[(]((\-)?[0-9]|(\-)?[1-9][0-9]|(\-)?[1-9][0-9][0-9]|(\-)?[1-9][0-9][0-9][0-9])deg(,((\-)?[0-9]|(\-)?[1-9][0-9]|(\-)?[1-9][0-9][0-9]|(\-)?[1-9][0-9][0-9][0-9])deg)?[)]'),
  translate: RegExp('translate(X|Y)?[(](\-)?([0-9]|(\-)?[1-9][0-9]|(\-)?[1-9][0-9][0-9])(%|px)(,((\-)?[0-9]|(\-)?[1-9]([0-9]|(\-)?[1-9][0-9][0-9])(%|px)))?[)]'),
  skew: RegExp('skew(X|Y)?[(]((\-)?[0-9]|(\-)?[1-9][0-9]|(\-)?[1-9][0-9][0-9]|(\-)?[1-9][0-9][0-9][0-9])deg(,((\-)?[0-9]|(\-)?[1-9][0-9]|(\-)?[1-9][0-9][0-9]|(\-)?[1-9][0-9][0-9][0-9])deg)?[)]'),
  scale: RegExp('scale(X|Y)?[(]((\-)?(\.)?[0-9]|(\-)?[1-9](\.)?[0-9]|(\-)?[1-9](\.)?[0-9](\.)?[0-9])(%)?(,((\-)?(\.)?[0-9]|(\-)?[1-9](\.)?[0-9]|(\-)?[1-9](\.)?[0-9](\.)?[0-9])(%)?)?[)]'),
  none: RegExp('(?<!.)none(?!.)'),
  initial: RegExp('(?<!.)initial(?!.)'),
  inherit: RegExp('(?<!.)inherit(?!.)'),
}

export {animationPropValidator, keyframeStageValidator, keyframeValueValidator, transformValidator} ;