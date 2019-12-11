require('babel-polyfill');
const {use, expect, assert} = require('chai');
const {matchSnapshot} = require('chai-karma-snapshot');
use(matchSnapshot);

describe('test', () => {
  beforeEach(() => {
    const htmlCodes = document.createElement('div');
    htmlCodes.innerHTML = __html__['test/html/index.html'];
    document.body.appendChild(htmlCodes);
  });
  it('check run snapshot', () =>{
    require('babel-polyfill');
    expect(document.getElementById('test')).to.matchSnapshot();
  })
});
