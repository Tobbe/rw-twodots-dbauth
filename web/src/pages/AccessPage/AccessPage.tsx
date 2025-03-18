import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const AccessPage = () => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <Metadata title="Access" description="Access page" />

      <h1>AccessPage</h1>

      <p>
        You need to be authenticated to access this page. And you also need the
        &quot;Admin&quot; role.
      </p>

      {isAuthenticated ? (
        <p>You are authenticated</p>
      ) : (
        <p>You are not authenticated</p>
      )}
      {isAuthenticated && (
        <p>
          <button onClick={() => logOut()}>Logout</button>
        </p>
      )}
    </>
  )
}

export default AccessPage
