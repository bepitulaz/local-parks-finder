import { render } from '@redwoodjs/testing/web'

import MapView from './MapView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MapView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapView />)
    }).not.toThrow()
  })
})
