import React, { Component } from 'react';
import Animation from './Animation'
import CopyPopup from './CopyPopop';
import './styles/app.scss';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      animation: 'selected',
      keyframes: false,
      animationEx: null,
      popup: false
    }
  }

  selectKeyframes(select) {
    if (select) {
      this.setState({
        animation: false,
        keyframes: 'selected'
      })      
    } else {
      this.setState({
        animation: 'selected',
        keyframes: false
      })
    }
  }

  renderPopup() {
    this.setState({
      popup: true
    })
  }

  closePopup = () => {
    this.setState({
      popup: false
    })
  }

  componentDidMount() {
    this.setState({
      animationEx: this.props.animation
    })
  }

  componentDidUpdate(prevProp) {
    if (prevProp.animation !== this.props.animation) {
      this.setState({
        animationEx: this.props.animation
      })
    }
  }
  
  render() {
    const { reset, updateKeyframes, updateKeyframesStages, updateAnimationProperties} = this.props;
    const { keyframes, animation, animationEx, popup } = this.state;
    if (!this.state.animationEx) {
      return <div></div>
    }
    return (
      <div className='editor-component'>
        <div className='editor-container'>
          <div className='editor-options'>
            <button className={`animation-btn ${animation}`}
              onClick={() => this.selectKeyframes(false)}>
              animation
            </button>
            <button className={`keyframes-btn ${keyframes}`}
              onClick={() => this.selectKeyframes(true)}>
              keyframes
            </button>
          </div>
          <div className='editor'>
            <Animation animation={animation} 
              animationEx={animationEx}
              updateKeyframes={(stageIndex, propIndex, value, newAnimation) => updateKeyframes(stageIndex, propIndex, value, newAnimation)}
              updateKeyframesStages={(stageIndex, value, newAnimation) => updateKeyframesStages(stageIndex, value, newAnimation)}
              updateAnimationProperties={(newAnimation) => updateAnimationProperties(newAnimation)}/>
          </div>
        </div>
        <div className='editor-bottom-btns-container'>
          <CopyPopup animation={animationEx}
              active={popup}
              closePopup={this.closePopup}/>
          <button className={`lower-btn copy-btn`} onClick={() => this.renderPopup()}>
            copy code
          </button>
          <button className={`lower-btn reset-btn`} onClick={() => reset()}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

export default Editor;