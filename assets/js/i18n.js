/**
 * i18n : textes dans assets/i18n/locales.json + assets/i18n/locales-carte.json
 * (chaque clé : fr, en, de). Modifier ces fichiers met à jour tout le site après rechargement.
 * Carte : régénérer locales-carte.json avec node scripts/generate-locales-carte.mjs
 */
(function () {
  const STORAGE_KEY = 'lplg-lang';
  const DEFAULT_LANG = 'fr';
  const SUPPORTED = ['fr', 'en', 'de'];
  const CACHE_BUST = '202604083';

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* ignore */ }
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (nav === 'de' || nav === 'en') return nav;
    return DEFAULT_LANG;
  }

  function resolvePath(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return o != null && o[k] !== undefined ? o[k] : null;
    }, obj);
  }

  function t(locales, lang, path) {
    const node = resolvePath(locales, path);
    if (node == null) return null;
    if (typeof node === 'object' && node !== null && !Array.isArray(node) && 'fr' in node) {
      return node[lang] != null && node[lang] !== '' ? node[lang] : node.fr;
    }
    return null;
  }

  function applyTranslations(locales, lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(locales, lang, key);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const val = t(locales, lang, key);
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(locales, lang, key);
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(locales, lang, key);
      if (val != null) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-alt');
      const val = t(locales, lang, key);
      if (val != null) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-value');
      const val = t(locales, lang, key);
      if (val != null) el.setAttribute('value', val);
    });

    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      var tk = titleEl.getAttribute('data-i18n');
      var tv = t(locales, lang, tk);
      if (tv != null) titleEl.textContent = tv;
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var l = btn.getAttribute('data-set-lang');
      btn.classList.toggle('is-active', l === lang);
      btn.setAttribute('aria-pressed', l === lang ? 'true' : 'false');
    });
  }

  function setLang(lang, locales) {
    if (!SUPPORTED.includes(lang)) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
    applyTranslations(locales, lang);
    window.dispatchEvent(new CustomEvent('lplg-lang-change', { detail: { lang: lang } }));
  }

  function bindLangButtons(locales) {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-set-lang');
        setLang(lang, locales);
      });
    });
  }

  function yearFooter() {
    var yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  window.LPLG_I18N = {
    getLang: function () { return getSavedLang(); },
    t: function (path) {
      /* utilisé si besoin après chargement */
      return null;
    }
  };

  Promise.all([
    fetch('assets/i18n/locales.json?v=' + CACHE_BUST).then(function (r) {
      if (!r.ok) throw new Error('locales');
      return r.json();
    }),
    fetch('assets/i18n/locales-carte.json?v=' + CACHE_BUST).then(function (r) {
      return r.ok ? r.json() : {};
    })
  ])
    .then(function (parts) {
      var locales = Object.assign({}, parts[0], parts[1]);
      var lang = getSavedLang();
      applyTranslations(locales, lang);
      bindLangButtons(locales);
      yearFooter();
      window.LPLG_I18N._locales = locales;
      window.LPLG_I18N.t = function (path) {
        return t(locales, getSavedLang(), path);
      };
    })
    .catch(function () {
      yearFooter();
    });
})();
