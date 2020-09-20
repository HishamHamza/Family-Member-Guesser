const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Are you a male or female?',
    options: [
      {
        text: 'Male',
        setState: { male: true },
        nextText: 2
      },
      {
        text: 'Female',
        setState:{female: true},
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You are a _____',
    options:[
        {
            text: 'None of the following',
            requiredState: (currentState) => currentState.female,
            nextText: 7
        },
        {
            text: 'School Student',
            requiredState: (currentState) => currentState.male,
            setState: { male: true, schoolboy:true },
            nextText: 3
        },
        {
            text: 'College Student',
            requiredState: (currentState) => currentState.female,
            setState: { female: true, College:true},
            nextText: 4
        },
        {
            text:'College Student',
            requiredState: (currentState) => currentState.male,
            setState: { male: true, College:true},
            nextText: 5
        },
        {
            text: 'Father',
            requiredState: (currentState) => currentState.male,
            setState: { male: true, Father: true},
            nextText: 6
        },
        {
            text: 'Mother',
            requiredState: (currentState) => currentState.female,
            setState: { female: true, Mother: true},
            nextText: 13
        }
    ]
  },
  {
    id: 3,
    text: 'Do you live in Kerala?',
    options:[
        {
            text: 'Yes',
            setState: { schoolboy: true, Kerala: true},
            nextText: 8
        },
        {
            text: 'No',
            nextText: 9
        }
    ]
  },
  {
    id: 4,
    text: 'Your Name Is HANAN!'
  },
  {
    id: 5,
    text: 'Your Name Is NAZIR!'
  },
  {
    id: 6,
    text: 'Do you live in Kerala?',
    options:[
        {
            text: 'Yes',
            setState: {Father: true, Kerala:true},
            nextText: 11
        },
        {
            text: 'No',
            nextText: 12
        }
    ]
  },
  {
    id: 13,
    text: 'Do you live in Kerala?',
    options:[
        {
            text: 'Yes',
            setState: {Mother: true, Kerala: true},
            nextText: 14
        },
        {
            text: 'No',
            nextText: 15
        }
    ]
  },
  {
    id:9,
    text: 'Your name is JUWAIN!'
  },
  {
    id: 8,
    text: 'Do you have a sister?',
    options:[
        {
            text:'Yes',
            setState: {Vettamkutti: true},
            nextText: 17
        },
        {
            text:'No',
            setState: {Pattambi: true},
            nextText: 16
        }
    ]
  },
  {
    id: 12,
    text: 'Your name is JAMAL!'
  },
  {
    id: 11,
    text: 'Are you the eldest among your siblings?',
    options:[
        {
            text:'Yes',
            nextText: 18
        },
        {
            text:'No',
            nextText: 19
        }
    ]
  },
  {
    id: 15,
    text: 'Your name is JASMA!'
  },
  {
    id: 14,
    text: 'Do you have a daughter?',
    options:[
        {
            text:'Yes',
            nextText: 20
        },
        {
            text:'No',
            nextText: 21
        }
    ]
  },
  {
    id: 18,
    text: 'Your name is HAMZA!'
  },
  {
    id: 19,
    text: 'Your name is SAMEER!'
  },
  {
    id: 20,
    text: 'Is your eldest child a boy?'
    options: [
        {
            text: 'Yes',
            nextText: 26
        },
        {
            text: 'No',
            nextText: 27
        }
    ]
  },
  {
    id: 21,
    text: 'Your name is NOORJAHAN!'
  },
  {
    id:16,
    text: 'Do you have a younger brother?',
    options: [
        {
            text:'Yes',
            nextText: 22
        },
        {
            text: 'No',
            nextText: 23
        }
    ]
  },
  {
    id: 17,
    text: 'Do you have a younger brother?',
    options: [
        {
            text:'Yes',
            nextText: 24
        },
        {
            text: 'No',
            nextText: 25
        }
    ]
  },
  {
    id:22,
    text: 'Your name is NAZIM!'
  },
  {
    id:23,
    text: 'Your name is NASIF!'
  }, 
  {
    id:24,
    text: 'Your name is HISHAM!'
  },
  {
    id:25,
    text: 'Your name is HAZIM!'
  },
  {
    id: 7,
    text: 'Your name is JEHAN!'
  }
  {
    id:26,
    text: 'Your name is ZUHARA!'
  },
  {
    id:27,
    text:'Your name is SHYNY!'
  }
]
startGame()
