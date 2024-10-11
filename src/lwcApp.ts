import { createElement } from 'lwc';

import App from './modules/demo/app/app';

const element = createElement('demo-app', { is: App });
document.body.appendChild(element);
