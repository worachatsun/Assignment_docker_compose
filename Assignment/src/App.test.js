import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dropdown from '../src/commons/Dropdown'
import configureStore from 'redux-mock-store'
import * as actions from './actions'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import SigninPage from '../src/components/Authentication/SigninPage'
import SignupPage from '../src/components/Authentication/SignupPage'
import EditPreferencesComponent from '../src/components/EditPreferencesComponent'
import TopBar from '../src/commons/TopBar'
import LeftMenu from '../src/commons/LeftMenu'
import { languages, timezones, currencies } from './assets/resource'

describe('Testing ReassignLocationMenu component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Dropdown displayValue={timezones[0]} value={timezones} setData={jest.fn()} />
    )
    expect(wrapper.find('div').length).to.equal(1)
  })
})

describe('TopBar Component', () => {
  const initialState = {}

  const mockStore = configureStore()
  const store = mockStore(initialState)
  it('should have search input', () => {
    expect(mount(<TopBar store={store} />).find('input[placeholder="Search Fancy"]').length).to.equal(1)
  })
})

describe('SigninPage Component', () => {
  const initialState = {
    user: {},
    isLoggedIn: false
  }

  const mockStore = configureStore()
  const store = mockStore(initialState)

  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <SigninPage />
      </Router>
    </Provider>
  )

  it('has a username input field', () => {
    expect(wrapper.containsMatchingElement(<input type="text" />)).to.be.true
  })

  it('has a password input field', () => {
    expect(wrapper.containsMatchingElement(<input type="password" />)).to.be.true
  })
})

describe('SignupPage Component', () => {
  const initialState = {
    user: {},
    isLoggedIn: false
  }

  const mockStore = configureStore()
  const store = mockStore(initialState)

  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <SignupPage />
      </Router>
    </Provider>
  )

  it('has a username input field', () => {
    expect(wrapper.containsMatchingElement(<input type="text" />)).to.be.true
  })

  it('has a email input field', () => {
    expect(wrapper.containsMatchingElement(<input type="email" />)).to.be.true
  })

  it('has a password input field', () => {
    expect(wrapper.containsMatchingElement(<input type="password" />)).to.be.true
  })
})