
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import htmlString from './cms-icons.html';

const cmsIcons     = document.createElement('div');
cmsIcons.innerHTML = htmlString;
cmsIcons.setAttribute('style', 'display: none;');
document.head.appendChild(cmsIcons);
