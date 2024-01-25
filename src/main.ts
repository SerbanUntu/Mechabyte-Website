import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

let images = document.getElementsByTagName("img");
for(let i = 0 ; i < images.length ; i++) {
    images[i].classList.add('no-drag');
    images[i].setAttribute('no-drag', 'on');
    images[i].setAttribute('draggable', 'false');
    images[i].addEventListener('dragstart', function( event ) {
        event.preventDefault();
    }, false);	
}