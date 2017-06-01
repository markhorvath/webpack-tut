//require('./login');
import {login} from "./login";

login('admin', 'whatever');

document.write('Welcome to Big Sur!  Register below.  Have a nice day!');

document.body.innerHTML += '<br><p>Hello</p>';

console.log('App Loaded');