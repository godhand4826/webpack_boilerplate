import _ from 'lodash';
import './style.scss'
import printMe from './print.js'

function getComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    const btn = document.createElement('button')
    btn.innerHTML = 'click me'
    btn.onclick = printMe
    element.appendChild(btn)
    element.insertAdjacentHTML('beforeend', require('./img.html'))
    return element;
}

document.body.appendChild(getComponent())