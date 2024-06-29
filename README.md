# A Basic Website and API Template

Uses ExpressJS for the API with just HTML, CSS and JS for the Website

## Directory Layout

`api/` is where all the code is for the API. To locally test run the command: `npm run test`, it will then be available on `http://localhost:3000`
`website/` is where all the code, assets, etc for the website can be found, to test this, either open the `index.html` file directly or use Five Server, or another Live Server

For further information on how the API works, see the `README.md` file within the `api/` directory.

## Alternative Ways

### Hosting the pages through the API

ExpressJS allows you to "render" or send HTML Files through a route or path such as /home, /about, or even /api routes for the backend services.
This approach does mean you need an extra layer of security to prevent the users accessing the api routes, however it also means you can use a templating engine (e.g. pug, ejs, jade) to render unique content as an alternative to Frontend Frameworks such as React.
