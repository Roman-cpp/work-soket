console.log('sdfasfd')

import Pusher from 'pusher-js';
 

 
let client = new Pusher('app-key', {
    wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: false,
    encrypted: true,
    disableStats: true,
    cluster: '',
    enabledTransports: ['ws', 'wss'],
});

client.subscribe('my-channel').bind('my_event', (message) => {
    console.log(message);
});