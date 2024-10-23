const container = document.querySelector('#container')

const redParagraph = document.createElement('p')
redParagraph.textContent = 'I am a red paragraph'
redParagraph.style.color = 'red'

const blueHeading = document.createElement('h3')
blueHeading.textContent = 'I’m a blue h3!'
blueHeading.style.color = 'blue'

const divBlackBorder = document.createElement('div')
divBlackBorder.style.border = '2px solid black'
divBlackBorder.style.backgroundColor = 'pink'

const headingOne = document.createElement('h1')
headingOne.textContent = 'I\'m in a div!'

const paragraph = document.createElement('p')
paragraph.textContent = 'ME TOO!'

divBlackBorder.append(headingOne, paragraph)

container.append(redParagraph, blueHeading, divBlackBorder)