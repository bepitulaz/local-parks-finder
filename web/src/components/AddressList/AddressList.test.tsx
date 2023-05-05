import { render } from '@redwoodjs/testing/web'

import AddressList from './AddressList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddressList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddressList />)
    }).not.toThrow()
  })
})
