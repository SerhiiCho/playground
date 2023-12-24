import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

let laravelEcho = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    wssPort: import.meta.env.VITE_PUSHER_PORT,
    forceTLS: false,
    encrypted: true,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
})

laravelEcho.channel('chat')
    .listen('NewMessage', (e) => {
        console.log(e.message)
    })