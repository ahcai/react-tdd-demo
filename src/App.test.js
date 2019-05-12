import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a div with the id "hello-paraguay"', () => {
    expect(wrapper.find('[id="hello-paraguay"]').length).toBe(1);
  });

  it('renders an input with the id "add-item-input"', () => {
    expect(wrapper.find('input[id="add-task-input"]').length).toBe(1);
  });
});
