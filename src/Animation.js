import React, { Component } from 'react';
import './styles/app.scss';
import { animationPropValidator, 
  keyframeStageValidator, 
  keyframeValueValidator,
  transformValidator } from './FormValidators';


const aniProps = ['duration', 'timing-function', 'delay', 'iteration-count', 'direction', 'fill-mode']

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      squares: ['a'],
      animation: null
    }
  }

  componentDidMount() {
    this.setState({
      animation: this.props.animationEx
    })
  }

  componentDidUpdate(prevProp) {
    if (prevProp.animationEx !== this.props.animationEx) {
      this.setState({
        animation: this.props.animationEx
      })
    }
  }

  validateAnimationProp(target, inputValue) {
    if (!animationPropValidator[target.classList[1]].test(inputValue)) {
      target.classList.add('red');
      document.querySelector('.play-btn').setAttribute('disabled', 'disabled');
    } 
    target.classList.remove('red');
    document.querySelector('.play-btn').removeAttribute('disabled');
  }

  validateKeyframeStage(target, inputValue) {
    if (!keyframeStageValidator.test(inputValue)) {
      target.classList.add('red');
      document.querySelector('.play-btn').setAttribute('disabled', true);
    } else {
      target.classList.remove('red');
      document.querySelector('.play-btn').removeAttribute('disabled');
    }
  }

  validateKeyframeValue(target, inputValue) {
    if (!keyframeValueValidator[target.classList[1]].test(inputValue)) {
      target.classList.add('red');
      document.querySelector('.play-btn').setAttribute('disabled', true);
    } 
    target.classList.remove('red');
    document.querySelector('.play-btn').removeAttribute('disabled');
  }
  

  saveForm(e) {
    this.validateAnimationProp(e.target, e.target.value)
    document.querySelector('.stop-btn').click();
    let newAnimation = JSON.parse(JSON.stringify(this.state.animation));
    newAnimation.properties[e.target.classList[1]] = e.target.value;
    this.props.updateAnimationProperties(newAnimation);
    this.setState({
      animation: newAnimation
    })
  }

  saveKeyframesStages(e) {
    this.validateKeyframeStage(e.target, e.target.value);
    document.querySelector('.stop-btn').click();
    let newAnimation = JSON.parse(JSON.stringify(this.state.animation));
    let stageLabel = e.target.classList[1];
    let stageIndex = '';
    newAnimation.keyframes.sections.forEach( (stage, i) => {
       if (stage.name === stageLabel) {
         stageIndex = i;
       }
    })
    newAnimation.keyframes.sections[stageIndex].label = e.target.value || '%';
    this.setState({
      animation: newAnimation
    })
    this.props.updateKeyframesStages(stageIndex, e.target.value, newAnimation)
  }

  saveKeyframesProps(e) {
    this.validateKeyframeValue(e.target, e.target.value)
    document.querySelector('.stop-btn').click();
    let newAnimation = Object.assign(this.state.animation);
    let stageLabel = e.target.parentElement.parentElement.childNodes[0].classList[1];
    let propLabel = e.target.classList[1];
    let stageIndex = '';
    let propIndex = '';
    newAnimation.keyframes.sections.forEach( (stage, i) => {
       if (stage.name === stageLabel) {
         stageIndex = i;
       }
    })
    newAnimation.keyframes.sections[stageIndex].properties.forEach( (prop, i) => {
       if (prop.name === propLabel) {
         propIndex = i;
       }
    })
    newAnimation.keyframes.sections[stageIndex].properties[propIndex].value = e.target.value;
    this.setState({
      animation: newAnimation
    })
    this.props.updateKeyframes(stageIndex, propIndex, e.target.value, newAnimation)
  }

  render() {
    if (!this.state.animation) {
      return <div></div>
    }
    if (this.props.animation) {
      return (
        <div className='animation-container'>
          {
            this.state.squares.map( (square, i) => {
              return (
                <div className='class-container' key={i}>
                  <p className='class-selector'>.square-{square} <span>{'{'}</span></p>
                  <div className='props-container' key={i}>
                    <p className='ani-prop name'>name<span>:</span></p>
                    <p className='prop-input name' id='name'>{this.state.animation.properties.name}</p>
                  </div>
                  {
                    aniProps.map( (prop, i) => {
                      return (
                        <div className='props-container' key={i}>
                          <p className={`ani-prop ${prop}`}>{prop}<span>:</span></p>
                          <input className={`prop-input ${prop}`} 
                            type='text' 
                            value={this.state.animation.properties[prop]}
                            onChange={e => this.saveForm(e)}></input>
                        </div>
                      )
                    })
                  }
                  <p className='close-curly'>{'}'}</p>
                </div>
              )
            })
          }
        </div>
      )
    }
    return (
      <div className='keyframes-container'>
        <div className='keyframe'>
          <p className='keyframes-name'><span>@keyframes </span>{this.state.animation.keyframes.name} <span> {'{'}</span></p>
          {
            this.state.animation.keyframes.sections.map( (section, i) => {
              return (
                <div className='keyframes-section' key={i}>
                  <input className={`keyframes-label ${section.name}`} 
                    value={section.label} 
                    type='text'
                    onChange={e => this.saveKeyframesStages(e)}/> 
                    <span> {'{'}</span>
                  {
                    section.properties.map( (prop, i) => {
                      return (
                        <div className='props-container' key={i}>
                          <p className='keyframe-property'>{prop.name}<span>:</span></p>
                          <input className={`keyframe-prop-value ${prop.name}`} 
                            type='text' 
                            value={prop.value}
                            onChange={e => this.saveKeyframesProps(e)}></input>
                        </div>                   
                        )
                      })
                    }
                  <p className='close-curly'>{'}'}</p>
                </div>
              )
            }) 
          }
          <p className='close-curly'>{'}'}</p>
        </div>
      </div>
    )
  }
}

export default Animation;