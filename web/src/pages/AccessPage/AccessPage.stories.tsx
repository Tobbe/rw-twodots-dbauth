import type { Meta, StoryObj } from '@storybook/react'

import AccessPage from './AccessPage'

const meta: Meta<typeof AccessPage> = {
  component: AccessPage,
}

export default meta

type Story = StoryObj<typeof AccessPage>

export const Primary: Story = {}
