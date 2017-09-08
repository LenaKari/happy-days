A React project that allows a user to keep track of happy moments in their day in the form of journal entries and media.

#### To add firebase:
- Create project on Firebase
- Select 'Add Firebase to your web app'
- Copy the content of the config object provided by Firebase
- Create `firebase_config.js` in the project's src folder
- Paste the content into `firebase_config.js` as shown in the example.


```javascript
const config= {
	apiKey: "exampleappapikey",
	authDomain: "exampleapp.firebaseapp.com",
	databaseURL: "https://exampleapp.firebaseio.com",
	projectId: "exampleapp",
	storageBucket: "exampleapp.appspot.com"
}

export default config;
```
