# init the project based on CRA

npx create-react-app line-notify-boilerplate --template typescript
cd line-notify-boilerplate

# init firebase project

firebase login
firebase init
↓ log

```
✔  Success! Logged in as nbstsh@gmail.com
satoshi@SatoshinoMacBook-puro line-notify-boilerplate % firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/satoshi/Documents/nbstsh/line-notify-boilerplate

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Functi
ons: Configure and deploy Cloud Functions, Hosting: Configure and deploy Firebase Hosting sites, Emulators: Set up local emulators for Firebase
 features

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: playground-387d6 (playground)
i  Using project playground-387d6 (playground)

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use ESLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/.eslintrc.js
✔  Wrote functions/tsconfig.json
✔  Wrote functions/tsconfig.dev.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes

> protobufjs@6.10.2 postinstall /Users/satoshi/Documents/nbstsh/line-notify-boilerplate/functions/node_modules/protobufjs
> node scripts/postinstall

npm notice created a lockfile as package-lock.json. You should commit this file.
added 385 packages from 272 contributors and audited 385 packages in 19.125s

51 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? Yes
? File public/index.html already exists. Overwrite? No
i  Skipping write of public/index.html

i  Detected a .git folder at /Users/satoshi/Documents/nbstsh/line-notify-boilerplate
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=452705883&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

✔  Success! Logged into GitHub as nbstsh

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) nbstsh/line-notify-boilerplate

✔  Created service account github-action-343727518 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_PLAYGROUND_387D6.
i  You can manage your secrets at https://github.com/nbstsh/line-notify-boilerplate/settings/secrets.

? Set up the workflow to run a build script before every deploy? No

✔  Created workflow file /Users/satoshi/Documents/nbstsh/line-notify-boilerplate/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? main

✔  Created workflow file /Users/satoshi/Documents/nbstsh/line-notify-boilerplate/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication Emulator,
 Functions Emulator, Firestore Emulator, Hosting Emulator
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the hosting emulator? 5000
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)?
? Would you like to download the emulators now? No
```
