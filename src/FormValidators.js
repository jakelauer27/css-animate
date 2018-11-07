const animationPropValidator = {
  'duration': RegExp('(?<!.)(\\.)?[1-9](\\.)?[0-9]{3}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9]{2}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9](s|ms)(?!.)|(?<!.)(\\.)?[0-9](s|ms)(?!.)'),
  'timing-function': RegExp('(?<!.)linear(?!.)|(?<!.)ease(?!.)|(?<!.)ease-in(?!.)|(?<!.)ease-out(?!.)|(?<!.)ease-in-out(?!.)'),
  'delay': RegExp('(?<!.)(\\.)?[1-9](\\.)?[0-9]{3}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9]{2}(s|ms)(?!.)|(?<!.)(\\.)?[1-9](\\.)?[0-9](s|ms)(?!.)|(?<!.)(\\.)?[0-9](s|ms)(?!.)'),
  'iteration-count': RegExp('(?<!.)infinite(?!.)|(?<!.)[0-9](?!.)|(?<!.)[1-9][0-9](?!.)'),
  'direction': RegExp('(?<!.)normal(?!.)|(?<!.)reverse(?!.)|(?<!.)alternate(?!.)|(?<!.)alternate-reverse(?!.)'),
  'fill-mode': RegExp('(?<!.)forwards(?!.)|(?<!.)none(?!.)|(?<!.)backwards(?!.)|(?<!.)both(?!.)')
}

const keyframeStageValidator = RegExp('(?<!.)[1-9][0-9]{2}%(?!.)|(?<!.)[1-9][0-9]%(?!.)|(?<!.)[0-9]%(?!.)')


// const keyframeValueValidator = {
//   'transform': RegExp(),
//   'opacity': RegExp('(?<!.)[0-1](\.)?[0-9](?!.)'),
//   'height': RegExp('(?<!.)[1-9][0-9]{3}(px|%|em)(?!.)|(?<!.)[1-9][0-9]{2}(px|%|em)(?!.)|(?<!.)[1-9][0-9](px|%|em)(?!.)|(?<!.)[0-9](px|%|em)(?!.)'),
//   'display': RegExp('(?<!.)none(?!.)|(?<!.)block(?!.)|(?<!.)inline(?!.)|(?<!.)inline-block(?!.)'),
//   'background-color': RegExp('/(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i'),
//   'background-image': RegExp('(?<!.)none(?!.)'),
// }

// const transformValidator = {
//   rotate: RegExp('rotate(X|Y)?[(]([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])deg(,\s([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])deg)?[)]'),
//   translate: RegExp('translate(X|Y)?[(]([0-9]|[1-9][0-9]|[1-9][0-9][0-9])(%|px)(,\s([0-9]|[1-9]([0-9]|[1-9][0-9][0-9])(%|px)))?[)]'),
//   skew: RegExp('skew(X|Y)?[(]([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])deg(,\s([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])deg)?[)]'),
//   scale: RegExp('scale(X|Y)?[(]((\.)?[0-9]|[1-9](\.)?[0-9]|[1-9](\.)?[0-9](\.)?[0-9])(%)?(,\s((\.)?[0-9]|[1-9](\.)?[0-9]|[1-9](\.)?[0-9](\.)?[0-9])(%)?)?[)]'),
//   matrix: RegExp(),
//   perspective: RegExp(),
//   other: RegExp('(?<!.)none(?!.)|(?<!.)initial(?!.)|(?<!.)inherit(?!.)'),
// }

export {animationPropValidator, keyframeStageValidator} ;