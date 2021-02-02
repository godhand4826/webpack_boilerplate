const obj = require('./data.json')
export default function printMe() {
    import ('./style.css')
    console.log(obj)
    document.body.insertAdjacentHTML('beforeend', require('./img.html'))
    import ('rambda').then(R => {
        console.log('I get called from print.js!');
        console.log(R)
    })
}