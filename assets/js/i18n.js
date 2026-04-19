/**
 * Textes français : assets/i18n/locales.json + assets/i18n/locales-carte.json
 * (chaque clé : chaîne ou objet dont les feuilles sont des chaînes).
 */
(function () {
  const CACHE_BUST = '202604095';

  function resolvePath(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return o != null && o[k] !== undefined ? o[k] : null;
    }, obj);
  }

  function t(locales, path) {
    const node = resolvePath(locales, path);
    if (node == null) return null;
    if (typeof node === 'string') return node;
    return null;
  }

  function applyTranslations(locales) {
    document.documentElement.lang = 'fr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(locales, key);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const val = t(locales, key);
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(locales, key);
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(locales, key);
      if (val != null) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-alt');
      const val = t(locales, key);
      if (val != null) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-value');
      const val = t(locales, key);
      if (val != null) el.setAttribute('value', val);
    });

    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      var tk = titleEl.getAttribute('data-i18n');
      var tv = t(locales, tk);
      if (tv != null) titleEl.textContent = tv;
    }
  }

  function yearFooter() {
    var yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  window.LPLG_I18N = {
    getLang: function () { return 'fr'; },
    t: function (path) {
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
      applyTranslations(locales);
      yearFooter();
      window.LPLG_I18N._locales = locales;
      window.LPLG_I18N.t = function (path) {
        return t(locales, path);
      };
    })
    .catch(function () {
      yearFooter();
    });
})();
