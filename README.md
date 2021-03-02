# Line Notify Boilerplate

This boilerplate project shows how to use [Line Notify API](https://notify-bot.line.me/doc/ja/) with firebase functions.
The client side is a super simple react app which only has a button to call firebase functions.

## Getting Started

### Prepare Line Notify API Token

Generate access token for Line Notify Api. [This](https://engineering.linecorp.com/en/blog/using-line-notify-to-send-messages-to-line-from-the-command-line/#:~:text=Generating%20personal%20access%20tokens&text=Use%20an%20easily%20recognizable%20name,message%20to%20the%20selected%20group.) article will help.

The app expects the access token through firebase functions config. You should set the access token like this:

```
firebase functions:config:set line_notify.token=YOUR_TOKEN_COMES_HERE
```

If you want to test the functionality in dev env, set the access token in `functions/.runtimeconfig.json` (which is used by firebase functions emulator) like this:

```json
{
	"line_notify": {
		"token": "YOUR TOKEN COMES HERE"
	}
}
```

Make sure you only take this approach in dev env or some sucure manner. You DO NOT push token to public repo.

### Setup firebase project

Before you run dev server, follow the steps below to set up your firebase project with this boilerplate app.

1. Update `.firebaserc`

[Find your project id](https://firebase.google.com/docs/projects/learn-more#:~:text=Find%20the%20project%20ID,projects%20associated%20with%20your%20account.) and replace the value of `project.default` inside `.firebaserc` with your project id like this:

```
{
  "projects": {
    "default": "your-project-id"
  }
}

```

2. Update firebase config in `/src/lib/firebase.ts`

[Get your firebase prject config object](https://support.google.com/firebase/answer/7015592?hl=en) and replace firebaseConfig object with yours.

```ts
//TODO: repalce with your firebase config
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
};
```

Now you're ready to test out !

### Start dev server

Run the command below and startup firebase functions emulator and react dev server.

```
yarn dev
```

Access http://localhost:3000 and push the button to send a message to line.
(You need to set access token in `.runtimeconfig.json` to test in dev env. Please refer to **Prepare Line Notify API Token** section.)
