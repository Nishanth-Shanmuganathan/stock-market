This app is developed in MEAN Stack.

Use ng serve command to build frontend

Unfortunately I ve used every secret variable as environment variables so you cannot build backend as such.
Please follow instructions

Install env-cmd using npm i -s env-cmd
Create "config" folder inside backend folder
In "config" folder create env.dev file
In "env.dev" file can define the environment variables
1.PORT
2.DB_LINK
3.JWT_STRING are the three environment variables.

For ex: PORT=3000 (without any whitespace)

Deployed URL = https://stock-market-nish.herokuapp.com/
