import { footerComponent } from './components/footer.js';
import { headerComponent } from './components/header.js';

document.getElementById('footer').innerHTML = footerComponent;
document.getElementById('navbar').innerHTML = headerComponent();