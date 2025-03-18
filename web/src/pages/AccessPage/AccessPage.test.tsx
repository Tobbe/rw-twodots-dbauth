import { render } from '@redwoodjs/testing/web'

import AccessPage from './AccessPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AccessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccessPage />)
    }).not.toThrow()
  })
})
