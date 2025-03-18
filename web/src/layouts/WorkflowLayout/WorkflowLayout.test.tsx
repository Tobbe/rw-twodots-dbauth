import { render } from '@redwoodjs/testing/web'

import WorkflowLayout from './WorkflowLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkflowLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkflowLayout />)
    }).not.toThrow()
  })
})
