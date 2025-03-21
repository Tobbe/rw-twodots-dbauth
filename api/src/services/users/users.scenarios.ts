import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String1658583', loginToken: 'String' } },
    two: { data: { email: 'String7477305', loginToken: 'String' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
