import crypto from 'node:crypto'

import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'
import { UserInputError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const generateLoginToken = async ({ email }) => {
  try {
    // look up if the user exists
    const lookupUser = await db.user.findFirst({ where: { email } })

    if (!lookupUser) {
      console.debug('User not found')
      return { message: 'Login Request received' }
    }

    // here we're going to generate a random password of 6 numbers
    const randomNumber = crypto
      .randomInt(0, 1_000_000)
      .toString()
      .padStart(6, '0')
    console.log('OTP:', randomNumber) // email the user this number

    const [loginToken, salt] = hashPassword(randomNumber)

    const loginTokenExpiresAt = new Date()
    loginTokenExpiresAt.setMinutes(loginTokenExpiresAt.getMinutes() + 15)

    // now we'll update the user with the new salt and loginToken
    await db.user.update({
      where: { id: lookupUser.id },
      data: {
        salt,
        loginToken,
        loginTokenExpiresAt,
      },
    })

    return { message: 'Login Request received' }
  } catch (error) {
    console.log({ error })
    throw new UserInputError(error.message)
  }
}
