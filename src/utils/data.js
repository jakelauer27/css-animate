const animationsData = {
  'slideInX': {
    'properties': {
      'name': 'slideInX',
      'duration': '1.5s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'slideInX',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(-300px)'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(0px)'
            }
          ]
        },
      ]
    }
  },
  'slideInY': {
    'properties': {
      'name': 'slideInY',
      'duration': '1.5s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'slideInY',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(-400px)'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(0px)'
            }
          ]
        },
      ]
    }
  },
  'fadeIn': {
    'properties': {
      'name': 'fadeIn',
      'duration': '.9s',
      'timingFunction': 'linear',
      'delay': '0s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'fadeIn',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'opacity',
              'value': '0'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'opacity',
              'value': '1'
            }
          ]
        },
      ]
    }
  },

  'rotateIn': {
    'properties': {
      'name': 'rotateIn',
      'duration': '1.8s',
      'timingFunction': 'ease',
      'delay': '.5s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'rotateIn',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(400px) rotate(900deg)'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(0px) rotate(0deg)'
            }
          ]
        },
      ]
    }
  },
  'zoomIn': {
    'properties': {
      'name': 'zoomIn',
      'duration': '.5s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'zoomIn',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(400px) skewX(-15deg)'
            }
          ]
        },
        {
          'name': '90%',
          'label': '90%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(0px) skew(0deg)'
            }
          ]
        },
        {
          'name': '95%',
          'label': '95%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(-2px) skew(2deg)'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(0px) skew(0deg)'
            }
          ]
        },
      ]
    }
  },

  'dropDown': {
    'properties': {
      'name': 'dropDown',
      'duration': '.5s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'dropDown',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'height',
              'value': '0px'
            },
            {
              'name': 'display',
              'value': 'none'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'height',
              'value': '100px'
            },
            {
              'name': 'display',
              'value': 'block'
            }
          ]
        },
      ]
    }
  },

  'ySpinLoad': {
    'properties': {
      'name': 'ySpinLoad',
      'duration': '2.6s',
      'timingFunction': 'linear',
      'delay': '0s',
      'iterationCount': 'infinite',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'ySpinLoad',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotateY(0deg)'
            },
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotateY(360deg)'
            },
          ]
        },
      ]
    }
  },

  'cardFlip': {
    'properties': {
      'name': 'cardFlip',
      'duration': '.9s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': '1',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'cardFlip',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotateY(0deg) scale(1)'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotateY(-180deg) scale(1.2)'
            }
          ]
        },
      ]
    }
  },

  'bounceAppear': {
    'properties': {
      'name': 'bounceAppear',
      'duration': '450ms',
      'timingFunction': 'linear',
      'delay': '.7s',
      'iterationCount': 1,
      'direction': 'normal',
      'fill-mode': 'both'
    },
    'keyframes': {
      'name': 'bounceAppear',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'opacity',
              'value': '0'
            },
            {
              'name': 'transform',
              'value': 'scale(0.3)'
            },
          ]
        },
        {
          'name': '50%',
          'label': '50%',
          'properties': [
            {
              'name': 'opacity',
              'value': '0.9'
            },
            {
              'name': 'transform',
              'value': 'scale(1.1)'
            },
          ]
        },
        {
          'name': '80%',
          'label': '80%',
          'properties': [
            {
              'name': 'opacity',
              'value': '1'
            },
            {
              'name': 'transform',
              'value': 'scale(.89)'
            },
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'opacity',
              'value': '1'
            },
            {
              'name': 'transform',
              'value': 'scale(1)'
            },
          ]
        }
      ]
    }
  },

  'bounceDrop': {
    'properties': {
      'name': 'bounceDrop',
      'duration': '650ms',
      'timingFunction': 'linear',
      'delay': '.2s',
      'iterationCount': 1,
      'direction': 'normal',
      'fill-mode': 'both'
    },
    'keyframes': {
      'name': 'bounceDrop',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(-400px)'
            },
          ]
        },
        {
          'name': '49%',
          'label': '49%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(0px) scaleY(1)'
            },
          ]
        },
        {
          'name': '50%',
          'label': '50%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(0px) scaleY(0.95)'
            },
          ]
        },
        {
          'name': '70%',
          'label': '70%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(-10px) scaleY(1)'
            },
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(0px)'
            },
          ]
        }
      ]
    }
  },

  'wiggle': {
    'properties': {
      'name': 'wiggle',
      'duration': '.2s',
      'timingFunction': 'linear',
      'delay': '0s',
      'iterationCount': 3,
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'wiggle',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotate(0deg)'
            },
          ]
        },
        {
          'name': '30%',
          'label': '30%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotate(7deg)'
            },
          ]
        },
        {
          'name': '70%',
          'label': '70%',
          'properties': [
            {
              'name': 'transform',
              'value': 'rotate(-7deg)'
            },
          ]
        },
      ]
    }
  },

  'color': {
    'properties': {
      'name': 'color',
      'duration': '4s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': 'infinite',
      'direction': 'alternate',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'color',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'background-color',
              'value': 'rgb(59, 74, 129)'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
          ]
        },
        {
          'name': '33%',
          'label': '33%',
          'properties': [
            {
              'name': 'background-color',
              'value': '#26B177'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
          ]
        },
        {
          'name': '66%',
          'label': '66%',
          'properties': [
            {
              'name': 'background-color',
              'value': 'rgb(69, 163, 235)'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'background-color',
              'value': 'rgb(59, 74, 129)'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
          ]
        }
      ]
    }
  },

  'path': {
    'properties': {
      'name': 'path',
      'duration': '6.5s',
      'timingFunction': 'linear',
      'delay': '0s',
      'iterationCount': 'infinite',
      'direction': 'normal',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'path',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translate(0px)'
            }
          ]
        },
        {
          'name': '25%',
          'label': '25%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateX(100px)'
            }
          ]
        },
        {
          'name': '45%',
          'label': '45%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translate(-150px, -70px)'
            }
          ]
        },
        {
          'name': '65%',
          'label': '65%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translate(-100px, -80px)'
            }
          ]
        },
        {
          'name': '75%',
          'label': '75%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translateY(105px)'
            }
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'transform',
              'value': 'translate(0px)'
            }
          ]
        },
      ]
    }
  },

  'abstract': {
    'properties': {
      'name': 'abstract',
      'duration': '4s',
      'timingFunction': 'ease',
      'delay': '0s',
      'iterationCount': 'infinite',
      'direction': 'alternate',
      'fillMode': 'forwards'
    },
    'keyframes': {
      'name': 'abstract',
      'sections': [
        {
          'name': '0%',
          'label': '0%',
          'properties': [
            {
              'name': 'height',
              'value': '0'
            },
            {
              'name': 'background-color',
              'value': '#26B177'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
            {
              'name': 'transform',
              'value': 'rotate(-180deg)'
            },
          ]
        },
        {
          'name': '50%',
          'label': '50%',
          'properties': [
            {
              'name': 'height',
              'value': '110px'
            },
            {
              'name': 'background-color',
              'value': '#26C077'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
            {
              'name': 'transform',
              'value': 'rotate(180deg)'
            },
          ]
        },
        {
          'name': '100%',
          'label': '100%',
          'properties': [
            {
              'name': 'height',
              'value': '100px'
            },
            {
              'name': 'background-color',
              'value': '#21B177'
            },
            {
              'name': 'background-image',
              'value': 'none'
            },
            {
              'name': 'transform',
              'value': 'rotate(-90deg)'
            },
          ]
        },
      ]
    }
  },
}



export default animationsData;