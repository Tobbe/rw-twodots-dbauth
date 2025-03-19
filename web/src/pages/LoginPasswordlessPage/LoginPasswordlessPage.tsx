import { useEffect, useState } from 'react'

import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import LoginPasswordlessForm from 'src/components/LoginPasswordlessForm/LoginPasswordlessForm'
import LoginPasswordlessTokenForm from 'src/components/LoginPasswordlessTokenForm/LoginPasswordlessTokenForm'

const LoginPasswordlessPage = () => {
  const [waitingForCode, setWaitingForCode] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')

  const { search } = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(search)
    const magic = params.get('magic')
    const decoded = window.atob(magic)

    // if magic param exists, set email and waitingForCode
    if (magic) {
      // decoded is email:code
      const [email, code] = decoded.split(':')

      setEmail(email)
      setCode(code)
      setWaitingForCode(true)
    }
  }, [search])

  return (
    <>
      <Metadata
        title="LoginPasswordless"
        description="LoginPasswordless page"
      />

      {waitingForCode ? (
        <LoginPasswordlessTokenForm
          email={email}
          setWaitingForCode={setWaitingForCode}
          code={code}
        />
      ) : (
        <LoginPasswordlessForm
          setWaitingForCode={setWaitingForCode}
          setEmail={setEmail}
        />
      )}
    </>
  )
}

export default LoginPasswordlessPage
