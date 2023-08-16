"use strict";slider(".bestsellers__slider__card",".bestsellers__prev-arrow",".bestsellers__next-arrow",1,slidesToShow=getSlidesToShow(clientWidth=window.innerWidth)),window.addEventListener("resize",function(){slider(".bestsellers__slider__card",".bestsellers__prev-arrow",".bestsellers__next-arrow",1,getSlidesToShow(window.innerWidth))});var clientWidth,slidesToShow,burgerMenu=document.querySelector(".header__burger-menu"),expandLinks=document.querySelectorAll("[data-expand]"),burgerMenuOpenBtn=document.querySelector(".header__burger_open"),burgerMenuCloseBtn=document.querySelector(".header__burger_close"),searchBtn=document.querySelector(".search__button"),searchWrapper=document.querySelector(".header__search"),body=document.body,currentEl=null,vh=.01*window.innerHeight;function onMinResizeHandler(){document.querySelectorAll("[data-responsive-hide]").forEach(function(e){burgerMenu.appendChild(e)})}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _iterableToArrayLimit(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function getSlidesToShow(e){var n=null,r=getResponsive(e);return Object.entries(r).map(function(e){var r=_slicedToArray(e,2),t=r[0];!0===r[1]&&(n=t)}),n}function getResponsive(e){var r;return _defineProperty(r={},4,768<e),_defineProperty(r,3,e<=768&&550<=e),_defineProperty(r,2,e<=550&&425<=e),_defineProperty(r,1,e<=425),r}document.documentElement.style.setProperty("--vh","".concat(vh,"px")),document.addEventListener("DOMContentLoaded",function(){document.documentElement.clientWidth<768&&onMinResizeHandler(),window.addEventListener("resize",function(e){document.documentElement.clientWidth<=768&&onMinResizeHandler(),769<=document.documentElement.clientWidth&&document.documentElement.clientWidth<=775&&document.location.reload()}),burgerMenuOpenBtn.addEventListener("click",function(){burgerMenu.classList.add("active"),body.classList.add("lock-scroll")}),burgerMenuCloseBtn.addEventListener("click",function(){burgerMenu.classList.remove("active"),body.classList.remove("lock-scroll")}),searchBtn.addEventListener("click",function(){searchWrapper.classList.toggle("active")})}),expandLinks.forEach(function(t){t.addEventListener("click",function(e){var r=t.querySelector(".list__item__child");currentEl=e.target,r.classList.add("active"),document.addEventListener("click",function(e){e.stopPropagation(),e.target!==currentEl&&r.classList.remove("active")})})}),slider(".new-in__slider__card",".new-in__prev-arrow",".new-in__next-arrow",1,slidesToShow=getSlidesToShow(clientWidth=window.innerWidth)),window.addEventListener("resize",function(){slider(".new-in__slider__card",".new-in__prev-arrow",".new-in__next-arrow",1,getSlidesToShow(window.innerWidth))});var form=document.forms.newsLetter,regExp={email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/};function slider(e,r,t){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1,o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:4,i=document.querySelectorAll(e),a=document.querySelector(r),c=document.querySelector(t),l=i.length,s=0;o=+o,i.forEach(function(e){e.style.flex="0 0 ".concat(100/o,"%")}),a.addEventListener("click",function(){0<++s&&(s=-l+o,i.forEach(function(e){e.style.transform="translateX(".concat(s*n*100,"%)")})),s<l&&i.forEach(function(e){e.style.transform="translateX(".concat(s*n*100,"%)")})}),c.addEventListener("click",function(){l-o<- --s&&(s=0,i.forEach(function(e){e.style.transform="translateX(".concat(s*n*100,"%)")})),s<l&&(console.log(s),i.forEach(function(e){e.style.transform="translateX(".concat(s*n*100,"%)")}))})}form.addEventListener("submit",function(e){e.preventDefault();var r=form.newsLetterInput.value;form.newsLetterSubscription.checked&&regExp.email.test(r)?(alert("Successfully signed up to our newsletter"),form.reset()):alert("Checkbox must be checked / Invalid email")});