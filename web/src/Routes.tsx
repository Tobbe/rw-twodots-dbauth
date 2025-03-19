// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import WorkflowLayout from 'src/layouts/WorkflowLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={WorkflowLayout}>
        <Route path="/login" page={LoginPasswordlessPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>
      <PrivateSet unauthenticated="login" roles="Admin">
        <Route path="/access" page={AccessPage} name="access" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
