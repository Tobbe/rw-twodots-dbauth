import type { GenerateLoginTokenMutation } from 'types/graphql'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { routes, Link } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const GENERATE_LOGIN_TOKEN_MUTATION = gql`
  mutation GenerateLoginTokenMutation($email: String!) {
    generateLoginToken(email: $email) {
      message
    }
  }
`

const LoginPasswordlessForm = ({ setWaitingForCode, setEmail }) => {
  const [generateLoginToken] = useMutation<GenerateLoginTokenMutation>(
    GENERATE_LOGIN_TOKEN_MUTATION,
    {
      onCompleted: () => {
        toast.success('Check your email for a login link')
        setWaitingForCode(true)
      },
    }
  )

  const onSubmit = async (data) => {
    setEmail(data.email)

    const response = await generateLoginToken({
      variables: { email: data.email },
      fetchPolicy: 'no-cache',
    })

    if ('error' in response && typeof response.error === 'string') {
      toast.error(response.error)
    }
  }

  return (
    <>
      <Metadata title="Login" />
      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="email"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
                  <TextField
                    name="email"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    }}
                  />

                  <FieldError name="email" className="rw-field-error" />
                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Send Token
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPasswordlessForm
