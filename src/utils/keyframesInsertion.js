const sheet = document.styleSheets[document.styleSheets.length - 1];

export const updateKeyframes = (newKeyframes) => {
  let ruleKeys = Object.keys(sheet.cssRules)
  let keyframeToDeleteIndex = ruleKeys.find(rule => {
    return sheet.cssRules[rule].name === newKeyframes.name;
  })
  sheet.deleteRule(keyframeToDeleteIndex);
  sheet.insertRule(`@keyframes ${newKeyframes.name} 
    ${StringifyKeyframes(newKeyframes)}`, sheet.cssRules.length);
}

export const StringifyKeyframes = (keyframe) => {
  const stringified = keyframe.sections.reduce( (stages, section, i) => {
    let sectionProps = section.properties.reduce( (propsObj, prop, i) => {
      if (i === section.properties.length - 1) {
        return `${propsObj} ${prop.name}: ${prop.value};}`
      }
      return `${propsObj} ${prop.name}: ${prop.value};` ;
    }, `{`)
    if (i === keyframe.sections.length - 1) {
      return stages + section.label + sectionProps + "}"
    }
    return stages + section.label + sectionProps
  }, "{")
  return stringified
}