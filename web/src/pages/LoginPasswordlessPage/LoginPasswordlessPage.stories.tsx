import type { Meta, StoryObj } from '@storybook/react'

import LoginPasswordlessPage from './LoginPasswordlessPage'

const meta: Meta<typeof LoginPasswordlessPage> = {
  component: LoginPasswordlessPage,
}

export default meta

type Story = StoryObj<typeof LoginPasswordlessPage>

export const Primary: Story = {}
