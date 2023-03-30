'use strict';

/* 
RAMINDER SINGH
*/

const btnAccept = document.querySelector('.btn-accept');
const btnSave = document.querySelector('.btn-save');
const btnSettings = document.querySelector('.btn-settings');
const checkboxBrowser = document.querySelector('#checkboxBrowser');
const checkboxOs = document.querySelector('#checkboxOs');
const checkboxScreenWidth = document.querySelector('#checkboxScreenWidth');
const checkboxScreenHeight = document.querySelector('#checkboxScreenHeight');
const cookies = document.querySelector('.cookies');
const cookiesBox = document.querySelector('.cookies-box');
const cookiesAdjustment = document.querySelector('.cookies-adjustment');

checkboxBrowser.checked = true;
checkboxOs.checked = true;
checkboxScreenWidth.checked = true;
checkboxScreenHeight.checked = true;

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    SameSite: 'Lax',
    ...options
  };
  
  const keys = Object.keys(options);
  const values = Object.values(options);
  
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
  for (let i = 0; i < keys.length; i++) {
    updatedCookie += `; ${keys[i]}=${values[i]}`;
  }
  
  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {'max-age': -1});
}

function getBrowser() {
  if (navigator.userAgent.indexOf('Edg') != -1) {
    return 'Edge';
  } if (navigator.userAgent.indexOf('Chrome') != -1) {
    return 'Chrome';
  } if (navigator.userAgent.indexOf('Firefox') != -1) {
    return 'Firefox';
  } if (navigator.userAgent.indexOf('Safari') != -1) {
    return 'Safari';
  }
}

function getOS() {
  if (navigator.userAgent.indexOf('Windows NT 10.0') != -1) {
    return 'Windows 10';
  } if (navigator.userAgent.indexOf('Windows NT 6.3') != -1) {
    return 'Windows 8.1';
  } if (navigator.userAgent.indexOf('Windows NT 6.2') != -1) {
    return 'Windows 8';
  } if (navigator.userAgent.indexOf('Windows NT 6.1') != -1) {
    return 'Windows 7';
  } if (navigator.userAgent.indexOf('Linux') != -1) {
    return 'Linux';
  } if (navigator.userAgent.indexOf('Mac') != -1) {
    return 'Mac/iOS';
  } else {
    return 'Unknown';
  }
};

function getScreenWidth() {
  return screen.width;
};

function getScreenHeight() {
  return screen.height;
};

if (document.cookie === '') {
  cookies.style.display = 'block';
} else {
  cookies.style.display = 'none';
};

btnAccept.addEventListener('click', () => {
  setCookie('browser', getBrowser(), {'max-age': 15});
  setCookie('os', getOS(), {'max-age': 15});
  setCookie('screen-width', getScreenWidth(), {'max-age': 15});
  setCookie('screen-height', getScreenHeight(), {'max-age': 15});
  
  console.log(getCookie('browser'));
  console.log(getCookie('os'));
  console.log(getCookie('screen-width'));
  console.log(getCookie('screen-height'));
  console.log(document.cookie);
  
  cookies.style.display = 'none';
});

btnSettings.addEventListener('click', () => {
  cookiesBox.style.display = 'none';
  cookiesAdjustment.style.display = 'grid';
});

btnSave.addEventListener('click', () => {
  if (checkboxBrowser.checked === true) {
    setCookie('browser', getBrowser(), {'max-age': 10});
    console.log(getCookie('browser'));
  } if (checkboxOs.checked === true) {
    setCookie('os', getOS(), {'max-age': 10});
    console.log(getCookie('os'));
  } if (checkboxScreenWidth.checked === true) {
    setCookie('screen-width', getScreenWidth(), {'max-age': 10});
    console.log(getCookie('screen-width'));
  } if (checkboxScreenHeight.checked === true) {
    setCookie('screen-height', getScreenHeight(), {'max-age': 10});
    console.log(getCookie('screen-height'));
  }
  console.log(document.cookie);
  
  cookies.style.display = 'none';
});