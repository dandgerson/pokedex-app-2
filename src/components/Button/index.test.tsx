/**
 * @jest-environment jsdom
 */
import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Button from './index'

describe('Button', () => {
  let container: Element | null = null

  beforeEach(() => {
    container = window.document.createElement('div')
    window.document.body.appendChild(container)
  })

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container)
      container.remove()
      container = null
    }
  })

  it('render', () => {
    act(() => {
      render(<Button text='Button' handleClick={() => console.log('click')} />, container)
    })

    expect(container?.innerHTML).toBeDefined()
  })

  it('render with text from prop text', () => {
    const text = 'Button'

    act(() => {
      render(<Button text={text} handleClick={() => console.log('click')} />, container)
    })

    expect(container?.textContent).toBe(text)
  })

})
