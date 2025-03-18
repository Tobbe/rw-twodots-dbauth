# dbAuth Bug Reproduction

Create a dbAuth secret:
```shell
echo "SESSION_SECRET=$(yarn rw g secret --raw)" >> .env
```

And then just run the project with
```shell
yarn rw dev
```

Open the app in your browser at http://localhost:8910 and then open the browser
developer tools.

Sign up as a new user and notice how it gets stuck in a redirect loop when it
tries to go to `/access` after signing up.

Remove the `roles` block on the `Set` that wraps the `/access` route in
`Routes.tsx` and the redirect will work as expected.
