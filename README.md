# dbAuth Bug Reproduction

Create a dbAuth secret:
```shell
echo "SESSION_SECRET=$(yarn rw g secret --raw)" >> .env
```

And then just run the project with
```shell
yarn rw dev
```

Open the app in your browser at http://localhost:8910 and sign up as a new user.
Log out using the button on the `/access` page, and then log back in.
You'll be asked for your email address, enter it, and then look at the api side
server logs. It should have printed the OTP you should use to log in. Copy the
OTP and paste it into the token field on the login page.
