## Development

There are two ways in which you can build and run the web app:
* Hot reloading via webpack middlewares:
  * `$ npm start`
  * Point your browser to http://localhost:44300/, page hot reloads automatically when there are changes
  
* Build once for (ready for ***Production***):
  * `$ npm run build`
  * `$ npm run build:serve`

  The last command will boot up HTTP server on `44300` port and serve `/dist` directory in a default browser

### Deploy

Make sure the **zuper-frontend-production** repo is cloned and in `../zuper-frontend-production`
* `npm run build`. This will build the minified dist for production use.
* `npm run build:ssr`. This will build the ssr file.
* `npm run copy`. This will copy the dist to the zuper-frontend-production repo.
* Optional: `npm run serve:prod` to test on `localhost:3000`
* `npm run deploy:staging` or `npm run deploy:prod`. This will ssh into the server's and pull
Note: This uses an ssh key located in `zuper-frontend-production` in order to pull on the server.