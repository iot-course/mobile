import 'react-native';
import React from 'react'
import App from '../src/App'
import {cucumber as _} from 'gherkin-jest'
import renderer from 'react-test-renderer'

_.When('the user presses button with text {string}', (_, msg)=>{
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
})
