import './style.css';
import { messages } from './i18n.js';

const KEY = 'aethedit-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'zh' || q === 'en') return q;
  const saved = localStorage.getItem(KEY);
  if (saved === 'zh' || saved === 'en') return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function apply(lang) {
  const dict = messages[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-list]').forEach((ul) => {
    ul.replaceChildren(
      ...dict[ul.dataset.i18nList].map((t) => {
        const li = document.createElement('li');
        li.textContent = t;
        return li;
      }),
    );
  });
  document.getElementById('lang-toggle').textContent = lang === 'zh' ? 'EN' : '中文';
  localStorage.setItem(KEY, lang);
  current = lang;
}

let current = initialLang();
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lang-toggle').addEventListener('click', () => apply(current === 'zh' ? 'en' : 'zh'));
apply(current);
