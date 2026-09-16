/**
 * Génère assets/i18n/locales-carte.json — lancer : node scripts/generate-locales-carte.mjs
 * Site uniquement en français : une seule chaîne par entrée.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '../assets/i18n/locales-carte.json');

const L = (fr) => fr;

const carte = {
  hero: {
    title: L('La carte d’automne'),
    intro: L(
      'Une cuisine de saison, inspirée des produits locaux et des arrivages du marché.<br>Menu du jour proposé du mercredi au vendredi.<br>Suggestion du moment renouvelée au gré des produits et de l’envie du chef.'
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
      name: L('Planche du Terroir – Fromages & salaisons – 17.– CHF la petite · 28.– CHF la grande'),
      desc: L('Fromages et salaisons du Valais, pain de seigle, pickles & chutney de fruits maison.')
    },
    i2: {
      name: L('Terrine de campagne maison, parfumée au cognac, 180 g – 19.– CHF'),
      desc: L('Pain de seigle & pickles.')
    }
  },
  ent: {
    i1: { name: L('Salade verte, vinaigrette & croûtons – 7.– CHF la petite · 12.– CHF la grande') },
    i2: { name: L('Salade d’automne, légumes croquants, airelles rouges & vinaigrette – 9.– CHF la petite · 15.– CHF la grande') },
    i3: { name: L('Velouté de courge à l’amaretto, graines de courge torréfiées – 11.– CHF') },
    i4: { name: L('Tomme des Haudères en feuille de brick, airelles rouges, bouquet de salade & vinaigrette au miel – 18.– CHF') },
    i5: { name: L('Pâté en croûte de chasse maison, chutney de pommes & pickles – 22.– CHF') }
  },
  plat: {
    i1: { name: L('Entrecôte tranchée, frites croustillantes, sauce beurre maître d’hôtel & poêlée de légumes de saison, 210 g – 44.– CHF') },
    i2: { name: L('Entrecôte sur pierre ollaire, frites croustillantes, sauce beurre maître d’hôtel & poêlée de légumes de saison, 210 g – 44.– CHF') },
    i3: { name: L('Filet de bœuf sur pierre ollaire, frites croustillantes, sauce au poivre & poêlée de légumes de saison, 210 g – 47.– CHF') },
    i4: { name: L('Pavé de cerf sur pierre ollaire, Spätzli, sauce Grand Veneur & garniture de chasse – 45.– CHF') },
    i5: { name: L('Civet de chevreuil & polenta crémeuse – 34.– CHF') },
    i6: { name: L('Tagliatelles fraîches à la crème de truffe – 35.– CHF') },
    i7: { name: L('Tagliatelles fraîches aux bolets – 29.– CHF') }
  },
  coin: {
    i1: {
      name: L('Macaronis du berger, pommes de terre, fromage gratiné & oignons rôtis – 25.– CHF'),
      desc: L('Avec lard – 28.– CHF')
    }
  },
  fondues: {
    noteCaquelon: L('Caquelon ou dans le pain.'),
    i1: { name: L('Fondue valaisanne – 28.– CHF') },
    i2: { name: L('Fondue tomate – 28.– CHF') },
    i3: { name: L('Fondue aux bolets – 29.– CHF') },
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
    i3: {
      name: L('Fondue de chasse 210 g – 42.– CHF'),
      desc: L('Morceaux de viande de chasse cuits dans du vin rouge.')
    },
    note: L('Servies avec sauces maison & frites.')
  },
  platNote: L(
    '<strong>Supplément accompagnement</strong> – 5.50 CHF<br>Frites, salade verte, poêlée de légumes de saison, Spätzli.<br><br><strong>Supplément frites à la truffe</strong> – 8.– CHF<br><br><strong>Supplément sauce</strong> – 5.50 CHF<br>Café de Paris, Poivre, Grand Veneur'
  ),
  desserts: {
    i1: { name: L('Crème brûlée à la vanille & marron – 14.– CHF') },
    i2: { name: L('Profiteroles, glace vanille & sauce chocolat maison – 16.– CHF') },
    i3: { name: L('“L’incontournable” Tiramisu au café – 14.– CHF') },
    i4: {
      name: L('Affogato – 7.50 CHF'),
      desc: L('Glace vanille nappée d’un espresso chaud.')
    },
    i5: {
      name: L('Café ou Chocolat Liégeois'),
      desc: L('Glace café/chocolat, nappage, chantilly.<br>Petite – 9.– CHF · Grande – 12.– CHF')
    },
    i6: {
      name: L('Danemark'),
      desc: L('Glace vanille, chocolat chaud et chantilly.<br>Petite – 9.– CHF · Grande – 12.– CHF')
    },
    i7: {
      name: L('Coupe Nesselrode – 14.– CHF'),
      desc: L('Glace vanille, vermicelles de marrons, chantilly, éclats de meringues.')
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
      name: L('Formule – 15.– CHF'),
      desc: L(
        '<div class="menu-enfant-body"><div class="menu-enfant-part"><p class="menu-enfant-part-title">Entrée</p><p class="menu-enfant-part-text">Salade verte</p></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Plat au choix</p><ul class="menu-enfant-options"><li>Macaronis du mini berger</li><li>Nuggets, frites & légumes</li></ul></div><div class="menu-enfant-part"><p class="menu-enfant-part-title">Dessert</p><p class="menu-enfant-part-text">1 boule de glace au choix</p></div></div>'
      )
    }
  }
};

fs.writeFileSync(out, JSON.stringify({ carte }, null, 2), 'utf8');
console.log('Written', out);
