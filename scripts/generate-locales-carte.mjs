/**
 * Génère assets/i18n/locales-carte.json — lancer : node scripts/generate-locales-carte.mjs
 * Site uniquement en français : une seule chaîne par entrée (les arguments en/de historiques sont ignorés).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '../assets/i18n/locales-carte.json');

const L = (fr) => fr;

const carte = {
  hero: {
    title: L(
      'La carte d’été',
      'Spring menu',
      'Frühlingskarte'
    ),
    intro: L(
      'Une cuisine de saison, inspirée des produits locaux et des arrivages du marché.<br>Menu du jour proposé du mercredi au vendredi.<br>Suggestion du moment renouvelée au gré des produits et de l’envie du chef.',
      'Seasonal cooking inspired by local produce and the finest market ingredients.<br>Set lunch menu, Wednesday to Friday.<br>Chef’s recommendations evolve with the seasons and the inspiration of the kitchen.',
      'Saisonküche aus regionalen Produkten und Marktware.<br>Tagesmenü von Mittwoch bis Freitag.<br>Empfehlungen des Küchenchefs je nach Angebot und Laune.'
    )
  },
  tabs: {
    share: L('Nos planches'),
    entrees: L('Entrées'),
    plats: L('Plats'),
    coin: L('L’Esprit Montagnard'),
    desserts: L('Desserts'),
    enfant: L('Menu enfant')
  },
  h: {
    share: L('Nos planches'),
    entrees: L('Entrées'),
    plats: L('Plats'),
    coin: L('L’Esprit Montagnard'),
    fondues: L('Fondues au fromage (dès 2 pers.)'),
    fonduesViande: L('Fondues de viande (dès 2 pers.)'),
    desserts: L('Desserts'),
    menuEnfant: L('Menu enfant')
  },
  ap: {
    i1: {
      name: L('Planche Fromages et pickles du Terroir – Fromages & salaisons – 17.– CHF la petite · 28.– CHF la grande'),
      desc: L('Fromages et salaisons du Valais, pain de seigle, pickles maison & chutney de fruits.')
    },
    i2: {
      name: L('Terrine de campagne maison, parfumée au cognac – 19.– CHF · 180 g'),
      desc: L('Pain de seigle & pickles maison.')
    },
    i3: {
      name: L('Planche Végétarienne – 24.– CHF'),
      desc: L('Houmous de betterave, tapenade d’olives, gressins & chutney de fruits.')
    }
  },
  ent: {
    i1: { name: L('Salade verte, vinaigrette & croûtons – 7.– CHF la petite · 12.– CHF la grande') },
    i2: { name: L('Salade d’été, crudités croquantes, flocon de parmesan & vinaigrette maison – 9.– CHF la petite · 15.– CHF la grande') },
    i3: { name: L('Soupe de tomate à l’ancienne maison – 11.– CHF') },
    i4: { name: L('Tartare estival de pastèque, abricot & feta – 17.– CHF') },
    i5: { name: L('Trilogie de tomate, stracciatella & basilic – 15.– CHF la petite · 23.– CHF la grande') },
    i6: {
      name: L('Tartare de bœuf coupé au couteau, pickles & toasts grillés'),
      desc: L('75 g – 21.– CHF')
    }
  },
  plat: {
    i1: { name: L('Suprême de volaille, sauce aux morilles & grenailles rôties aux herbes de Provence – 32.– CHF') },
    i2: { name: L('Entrecôte sur pierre ollaire, frites croustillantes, sauce beurre maître d’hôtel & poêlée de légumes de saison, 210 g – 44.– CHF') },
    i3: { name: L('Filet de bœuf sur pierre ollaire, frites croustillantes, sauce au poivre & poêlée de légumes de saison, 210 g – 47.– CHF') },
    i4: { name: L('Tagliatelles fraîches à la crème de truffe d’été – 35.– CHF') },
    i5: {
      name: L('Le mijoté du chef – 38.– CHF'),
      desc: L('Joue de bœuf façon bourguignon, mijotée, servie avec frites.')
    },
    i6: {
      name: L('Tartare de bœuf coupé au couteau, frites, pickles & toasts grillés'),
      desc: L('180 g – 38.– CHF · + Cognac – 41.– CHF')
    }
  },
  coin: {
    i1: {
      name: L('Croque-Monsieur Montagnard, pain de campagne, raclette des Haudères & jambon'),
      desc: L('Avec salade – 26.– CHF · Avec frites – 31.– CHF')
    },
    i2: {
      name: L('Macaronis du berger, pommes de terre, fromage gratiné & oignons rôtis – 25.– CHF'),
      desc: L('Avec lard – 28.– CHF')
    }
  },
  fondues: {
    i1: { name: L('Fondue valaisanne dans le pain – 28.– CHF') },
    i2: { name: L('Fondue valaisanne – 28.– CHF') },
    i3: { name: L('Fondue tomate – 28.– CHF') },
    i4: { name: L('Fondue à la truffe – 32.– CHF') },
    note: L('Pommes de terre grenailles – 4.– CHF (sauf fondue tomate).')
  },
  fonduesV: {
    i1: {
      name: L('Fondue chinoise 210 g – 40.– CHF'),
      desc: L('Morceaux de viande cuits dans un bouillon de légumes.')
    },
    i2: {
      name: L('Fondue Bacchus 210 g – 40.– CHF'),
      desc: L('Morceaux de viande cuits dans du vin rouge.')
    },
    note: L('Servies avec sauces maison, frites et salade.')
  },
  platNote: L(
    '<strong>Supplément accompagnement</strong> – 5.– CHF<br>Frites, salade verte, poêlée de légumes de saison.<br><br><strong>Supplément frites à la truffe</strong> – 8.– CHF<br><br><strong>Supplément sauce</strong><br>Café de Paris, Poivre – 5.50 CHF · Morilles – 7.50 CHF'
  ),
  desserts: {
    i1: { name: L('Panna Cotta parfumée à la lavande et sa compotée d’abricot du Valais – 14.– CHF') },
    i2: { name: L('Profiteroles, glace vanille & sauce chocolat maison – 16.– CHF') },
    i3: { name: L('“L’incontournable” Tiramisu au café – 14.– CHF') },
    i4: {
      name: L('Café gourmand – 16.– CHF'),
      desc: L('Café ou thé accompagné de mini desserts.')
    },
    i5: {
      name: L('Affogato – 7.50 CHF'),
      desc: L('Glace vanille nappée d’un espresso chaud.')
    },
    i6: {
      name: L('Café ou Chocolat Liégeois'),
      desc: L('Glace café/chocolat, nappage, chantilly.<br>Petite – 9.– CHF · Grande – 12.– CHF')
    },
    i7: {
      name: L('Danemark'),
      desc: L('Glace vanille, chocolat chaud et chantilly.<br>Petite – 9.– CHF · Grande – 12.– CHF')
    },
    i8: {
      name: L('Glaces arrosées – 14.– CHF'),
      desc: L('Abricotine · Colonel · Poire.')
    },
    i9: {
      name: L('Glace / Sorbet'),
      desc: L('1 boule – 4.– CHF · 2 boules – 8.– CHF<br>(Vanille, Chocolat, Fraise, Moka, Stracciatella, Noix, Poire, Abricot, Citron, Rhum raisin).')
    }
  },
  enfant: {
    i1: {
      name: L('Formule – 15.– CHF', 'Children’s menu – CHF 15', 'Menü – 15.– CHF'),
      desc: L(
        '<div class="menu-enfant-body"><div class="menu-enfant-part"><p class="menu-enfant-part-title">Entrée</p><p class="menu-enfant-part-text">Salade verte</p></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Plat au choix</p><ul class="menu-enfant-options"><li>Macaronis du mini berger</li><li>Tagliatelles à la bolognaise</li><li>Nuggets, frites & légumes</li></ul></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Dessert</p><p class="menu-enfant-part-text">1 boule de glace au choix</p></div></div>',
        '<div class="menu-enfant-body"><div class="menu-enfant-part"><p class="menu-enfant-part-title">Starter</p><p class="menu-enfant-part-text">Green salad</p></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Main course (choose one)</p><ul class="menu-enfant-options"><li>Mini Alpine macaroni gratin</li><li>Tagliatelle with Bolognese ragù</li><li>Chicken nuggets, chips and vegetables</li></ul></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Dessert</p><p class="menu-enfant-part-text">One scoop of ice cream (flavour of choice)</p></div></div>',
        '<div class="menu-enfant-body"><div class="menu-enfant-part"><p class="menu-enfant-part-title">Vorspeise</p><p class="menu-enfant-part-text">Grüner Salat</p></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Hauptgericht nach Wahl</p><ul class="menu-enfant-options"><li>Mini-Hirten-Makkaroni</li><li>Tagliatelle Bolognese</li><li>Nuggets, Pommes & Gemüse</li></ul></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Dessert</p><p class="menu-enfant-part-text">Eine Kugel Eis nach Wahl</p></div></div>'
      )
    }
  }
};

fs.writeFileSync(out, JSON.stringify({ carte }, null, 2), 'utf8');
console.log('Written', out);
