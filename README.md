# amp-apps
An example of a react app and a preact app using amp bento components

## React app
The react app is contained in the `my-app` directory.

This was created using instructions from [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
- To start the server, use the `npm start` command.
- To install a new amp component use the following command `npm install @ampproject/amp-fit-text`.  (Replace `amp-fit-text` with the appropriate component name.)
- Then import the component by including this line `import { FitText } from "@ampproject/amp-fit-text/react";`.  (Use the appropriate component name here as well.)  Here is an [example of import in react](https://github.com/krdwan/amp-apps/blob/main/my-app/src/App.js#L3).

This [react example](https://github.com/krdwan/amp-apps/blob/main/my-app/src/App.js) includes an example usage of `FitText` and `DateCountdown` components.


## Preact app
The preact app is contained in the `my-project` directory.

This was created using instructions from [preact cli](https://preactjs.com/guide/v10/getting-started/#best-practices-powered-by-preact-cli).
- To start the server, use the `npm run dev` command.
- To install a new amp component use the following command `npm install @ampproject/amp-fit-text`.  (Replace `amp-fit-text` with the appropriate component name.)
- Then import the component by including this line `import { FitText } from "@ampproject/amp-fit-text";`.  (Use the appropriate component name here as well.)  Here is an [example of import in preact](https://github.com/krdwan/amp-apps/blob/main/my-project/src/routes/home/index.js#L3).

This [preact example](https://github.com/krdwan/amp-apps/blob/main/my-project/src/routes/home/index.js) includes an example usage of `FitText` and `DateCountdown` components.
