import React, { Component } from 'react';
import './styles/app.scss';
import Editor from './Editor';
import Viewer from './Viewer';
import animationsData from './data';

const keyframes = Object.keys(animationsData);
var sheet = document.styleSheets[4];

class App extends Component {
  constructor() {
    super();
    this.state = {
      animations:  JSON.parse(JSON.stringify(animationsData)),
      animation:  JSON.parse(JSON.stringify(animationsData)).slideInX,
      original:  JSON.parse(JSON.stringify(animationsData)).slideInX,
      infoPopup: false
    }
  }

  chooseExample(e) {
    this.setState({
      animation: this.state.animations[e.target.innerText],
      original: JSON.parse(JSON.stringify(this.state.animations[e.target.innerText]))
    })
  }

  componentDidMount() {
    this.loadKeyframes()
    document.querySelector('.slideInX').click()
  }

  updateAnimationProperties = (newAnimation) => {
    this.setState({
      animation: newAnimation
    })
  }

  toggleInfoPopup = (toggle) => {
    this.setState({
      infoPopup: toggle
    })
  }

  reset = () => {
    this.setState({
      original: JSON.parse(JSON.stringify(this.state.original)),
      animation: JSON.parse(JSON.stringify(this.state.original))
    })
    this.resetCSSKeyframesRule()
  }

  resetCSSKeyframesRule() {
    let name = this.state.animation.properties.name  
    let ruleKeys = Object.keys(sheet.cssRules)
    let keyframeToDeleteIndex = ruleKeys.find(rule => {
      return sheet.cssRules[rule].name === name;
    })
    let formattedRule = `@keyframes ${name} 
    ${this.StringifyKeyframes(this.state.original.keyframes)}`;

    sheet.deleteRule(keyframeToDeleteIndex)
    sheet.insertRule(formattedRule, sheet.length)
  }


  ////////INSERTING KEYFRAMES TO CSS

  loadKeyframes() {
    keyframes.forEach( (keyframe) => {
      let key = this.state.animations[keyframe].keyframes;
      sheet.insertRule(`@keyframes ${key.name} 
        ${this.StringifyKeyframes(key)}`, sheet.length)
    })
  }

  updateKeyframesProps = (stageIndex, propIndex, value, newAnimation) => {
    let name = this.state.animation.properties.name  
    let ruleKeys = Object.keys(sheet.cssRules)
    let keyframeToDeleteIndex = ruleKeys.find(rule => {
      return sheet.cssRules[rule].name === name;
    })
    let formattedRule = this.formatKeyframesProps(stageIndex, propIndex, value);

    sheet.deleteRule(keyframeToDeleteIndex)
    sheet.insertRule(formattedRule, sheet.length)
    this.setState({
      animation: newAnimation
    })
  }

  updateKeyframesStages = (stageIndex, value, newAnimation) => {
    let name = this.state.animation.properties.name  
    let ruleKeys = Object.keys(sheet.cssRules)
    let keyframeToDeleteIndex = ruleKeys.find(rule => {
      return sheet.cssRules[rule].name === name;
    })
    let formattedRule = this.formatKeyframesStages(stageIndex, value);

    sheet.deleteRule(keyframeToDeleteIndex);
    sheet.insertRule(formattedRule, sheet.length);
    this.setState({
      animation: newAnimation
    })
  }

  formatKeyframesStages(stageIndex, value) {
    let name = this.state.animation.properties.name
    let updatedRule = this.state.animations[name].keyframes;

    updatedRule.sections[stageIndex].label = value;
    
    let formattedRule = `@keyframes ${updatedRule.name} 
    ${this.StringifyKeyframes(updatedRule)}`;
    return formattedRule
  }


  formatKeyframesProps(stageIndex, propIndex, value) {
    let name = this.state.animation.properties.name
    let updatedRule = this.state.animations[name].keyframes;

    updatedRule.sections[stageIndex].properties[propIndex].value = value;
    
    let formattedRule = `@keyframes ${updatedRule.name} 
    ${this.StringifyKeyframes(updatedRule)}`;
    return formattedRule
  }

  

  StringifyKeyframes(keyframe) {
    var obj = keyframe.sections.reduce( (stages, section, i) => {
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
    return obj
  }

  ///////////////////////////////////////

  reset = () => {
    this.setState({
      original: JSON.parse(JSON.stringify(this.state.original)),
      animation: this.state.original
    })
  }

  resetRule() {
    let name = this.state.animation.properties.name  
    let ruleKeys = Object.keys(sheet.cssRules)
    let keyframeToDeleteIndex = ruleKeys.find(rule => {
      return sheet.cssRules[rule].name === name;
    })
    sheet.deleteRule(keyframeToDeleteIndex)
    sheet.insertRule(this.state.animation.keyframes, sheet.length)
  }

  render() {
    return (
      <div className="App">
        <header>
          <button className='questions-btn'
          onClick={() => this.toggleInfoPopup(true)}>Instructions</button>
          <h1 className='main-title'>CSS ani<span>Mate</span></h1>
          <div className='header-btn-container'>
            <button className='load-example-btn'>Load Examples
              <i className="fas fa-caret-right"></i>
            </button>
            <ul className='examples-list'>
              {
                keyframes.map( (keyframe, i) => {
                  return (
                    <li className={`keyframe-ex ${keyframe}`} 
                        key={i}
                        onClick={e => this.chooseExample(e)}>{keyframe}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <InfoPopup display={this.state.infoPopup}
            toggleOff={this.toggleInfoPopup}/>
        </header>
        <main>
          <Editor animation={this.state.animation}
            updateKeyframes={this.updateKeyframesProps}
            updateKeyframesStages={this.updateKeyframesStages}
            updateAnimationProperties={this.updateAnimationProperties}
            reset={this.reset}/>
          <Viewer animation={this.state.animation.properties}/>
        </main>
      </div>
    );
  }
}

export default App;

