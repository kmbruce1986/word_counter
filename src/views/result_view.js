const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  })
}

ResultView.prototype.updateView = function () {
  const ResultElement = document.querySelector('#result');
  resultElement.textContent = `You entered ${result} words.`
};



module.exports = ResultView;
