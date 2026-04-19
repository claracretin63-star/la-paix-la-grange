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
      'La carte de printemps',
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
    share: L('À partager', 'Sharing plates', 'Zum Teilen'),
    entrees: L('Entrées', 'Starters', 'Vorspeisen'),
    plats: L('Plats', 'Mains', 'Hauptgänge'),
    coin: L('Coin montagnard', 'Alpine classics', 'Berg-Ecke'),
    desserts: L('Desserts', 'Desserts', 'Desserts'),
    enfant: L('Menu enfant', 'Children’s menu', 'Kindermenü')
  },
  h: {
    share: L('À partager', 'Sharing plates', 'Zum Teilen'),
    entrees: L('Entrées', 'Starters', 'Vorspeisen'),
    plats: L('Plats', 'Mains', 'Hauptgänge'),
    coin: L('Coin montagnard', 'Alpine classics', 'Berg-Ecke'),
    fondues: L('Fondues au fromage (dès 2 pers.)', 'Cheese fondues (minimum two diners)', 'Käsefondues (ab 2 Pers.)'),
    fonduesViande: L('Fondues de viande (dès 2 pers.)', 'Meat fondues (minimum two diners)', 'Fleischfondues (ab 2 Pers.)'),
    desserts: L('Desserts', 'Desserts', 'Desserts'),
    menuEnfant: L('Menu enfant', 'Children’s menu', 'Kindermenü')
  },
  ap: {
    i1: {
      name: L(
        'Planche du Terroir – Fromages & salaisons – 17.– CHF la petite · 28.– CHF la grande',
        'Terroir board – cheese & charcuterie – CHF 17 (small) · CHF 28 (large)',
        'Terroir-Platte – Käse & Salami – 17.– CHF klein · 28.– CHF gross'
      ),
      desc: L(
        'Fromages et salaisons du Valais, pain de seigle, pickles maison & chutney de fruits.',
        'Valais cheeses and charcuterie, rye bread, house pickles and fruit chutney.',
        'Walliser Käse und Salami, Roggenbrot, hausgemachte Pickles & Fruchtchutney.'
      )
    },
    i2: {
      name: L('Terrine de campagne maison, parfumée au cognac – 18.– CHF · 180 g', 'Home-made farmhouse terrine with cognac – CHF 18 · 180 g', 'Hausgemachte Terrine mit Cognac – 18.– CHF · 180 g'),
      desc: L('Pain de seigle & pickles maison.', 'Rye bread and house pickles.', 'Roggenbrot & hausgemachte Pickles.')
    },
    i3: {
      name: L('Rillettes de poulet maison au thym – 16.– CHF · 180 g', 'Home-made chicken rillettes with thyme – CHF 16 · 180 g', 'Hausgemachte Hähnchen-Rillettes mit Thymian – 16.– CHF · 180 g'),
      desc: L('Pain de seigle & pickles maison.', 'Rye bread and house pickles.', 'Roggenbrot & hausgemachte Pickles.')
    },
    i4: {
      name: L('Planche Végétarienne – 24.– CHF', 'Vegetarian sharing board – CHF 24', 'Vegetarische Platte – 24.– CHF'),
      desc: L('Houmous de betterave, tapenade, tomates, olives marinées, feta, gressins & chutney de fruits.', 'Beetroot hummus, tapenade, tomatoes, marinated olives, feta, grissini and fruit chutney.', 'Rote-Bete-Hummus, Tapenade, Tomaten, marinierte Oliven, Feta, Grissini & Fruchtchutney.')
    }
  },
  ent: {
    i1: { name: L('Salade verte, vinaigrette & croûtons maison – 7.– CHF la petite · 13.– CHF la grande', 'Mixed leaf salad, vinaigrette and home-made croutons – CHF 7 (small) · CHF 13 (large)', 'Grüner Salat, Vinaigrette & hausgemachte Croutons – 7.– CHF klein · 13.– CHF gross') },
    i2: { name: L('Salade printanière, crudités croquantes, flocon de parmesan & vinaigrette maison – 9.– CHF la petite · 16.– CHF la grande', 'Spring salad, crisp raw vegetables, parmesan shavings and house vinaigrette – CHF 9 (small) · CHF 16 (large)', 'Frühlingssalat, knackige Rohkost, Parmesanhobel & hausgemachte Vinaigrette – 9.– CHF klein · 16.– CHF gross') },
    i3: { name: L('Velouté d’asperges maison – 11.– CHF', 'Home-made cream of asparagus soup – CHF 11', 'Hausgemachter Spargel-Velouté – 11.– CHF') },
    i4: { name: L('Salade de chèvre chaud croustillant, vinaigrette au miel & noix torréfiées – 17.– CHF', 'Crispy fried goat’s cheese salad, honey dressing and toasted walnuts – CHF 17', 'Knuspriger warmer Ziegenkäse-Salat, Honig & geröstete Walnüsse – 17.– CHF') },
    i5: { name: L('Duo d’asperges vertes & blanches, tomates cerises marinées, crème légère au vinaigre de framboise – 19.– CHF', 'Green and white asparagus duo, marinated cherry tomatoes and light raspberry vinegar cream – CHF 19', 'Duo grüner & weisser Spargel, marinierte Kirschtomaten, leichte Himbeeressig-Creme – 19.– CHF') },
    i6: {
      name: L('Tartare de bœuf coupé au couteau, pickles & toasts grillés', 'Hand-chopped beef tartare, pickles and grilled toast', 'Handgeschnittenes Rindertatar, Pickles & geröstete Toasts'),
      desc: L('75 g – 21.– CHF · 150 g (servi avec frites) – 38.– CHF', '75 g – CHF 21 · 150 g (served with chips) – CHF 38', '75 g – 21.– CHF · 150 g (mit Pommes) – 38.– CHF')
    }
  },
  plat: {
    i1: { name: L('Suprême de volaille, sauce aux morilles & grenailles rôties au romarin – 33.– CHF', 'Supreme of chicken, morel sauce and rosemary roast new potatoes – CHF 33', 'Geflügel-Supreme, Morchelsoße & Rosmarin-Kartoffeln – 33.– CHF') },
    i2: { name: L('Entrecôte de bœuf tranchée, sauce beurre maître d’hôtel, frites croustillantes 200 g – 41.– CHF', 'Sliced rib-eye steak, maître d’hôtel butter and crisp hand-cut chips (200 g) – CHF 41', 'Geschnittenes Rinderentrecôte, Kräuterbutter-Sauce, knusprige Pommes 200 g – 41.– CHF') },
    i3: { name: L('Filet de bœuf sur pierre ollaire, frites croustillantes, sauce au poivre & poêlée de légumes de saison 200 g – 47.– CHF', 'Beef fillet on the hot stone, crisp chips, peppercorn sauce and seasonal vegetables (200 g) – CHF 47', 'Rinderfilet auf heißem Stein, knusprige Pommes, Pfeffersauce & saisonales Gemüse 200 g – 47.– CHF') },
    i4: { name: L('Escalope de veau viennoise, confiture d’airelle, frites croustillantes – 46.– CHF', 'Viennese veal schnitzel, lingonberry compôte and crisp chips – CHF 46', 'Kalbsschnitzel Wiener Art, Preiselbeerkonfitüre, knusprige Pommes – 46.– CHF') },
    i5: { name: L('Risotto crémeux aux petits pois & champignons poêlés – 29.– CHF', 'Creamy pea risotto with sautéed mushrooms – CHF 29', 'Cremiges Erbsen-Risotto & gebratene Pilze – 29.– CHF') },
    i6: { name: L('Tagliatelles à la crème de truffe d’été – 35.– CHF', 'Tagliatelle with fresh summer truffle cream – CHF 35', 'Tagliatelle mit Sommertrüffel-Creme – 35.– CHF') },
    i7: {
      name: L('Le mijoté du chef – 38.– CHF', 'Chef’s slow-cooked braise – CHF 38', 'Schmortopf des Küchenchefs – 38.– CHF'),
      desc: L('Joue de bœuf, jus corsé maison accompagné d’une purée de pommes de terre à l’ancienne & brocolis.', 'Beef cheek in a rich house jus, creamed potato and broccoli.', 'Rinderbacke, kräftiger Haussauce, Kartoffelpüree nach Art des Hauses & Brokkoli.')
    }
  },
  coin: {
    i1: { name: L('Macaronis du berger, pommes de terre, fromage gratiné & oignons rôtis – 25.– CHF', 'Alpine macaroni gratin with potato, melted cheese and caramelised onion – CHF 25', 'Hirten-Makkaroni, Kartoffeln, überbackener Käse & geröstete Zwiebeln – 25.– CHF') },
    i2: { name: L('Supplément lard tranché – 3.– CHF', 'Extra sliced bacon – CHF 3', 'Speck-Zusatz – 3.– CHF') }
  },
  fondues: {
    i1: { name: L('Fondue moitié-moitié dans le pain – 28.– CHF', 'Moitié-moitié fondue baked in a bread loaf – CHF 28', 'Halb-Halb-Fondue im Brot – 28.– CHF') },
    i2: { name: L('Fondue moitié-moitié – 28.– CHF', 'Classic moitié-moitié cheese fondue – CHF 28', 'Halb-Halb-Fondue – 28.– CHF') },
    i3: { name: L('Fondue tomate – 28.– CHF', 'Tomato cheese fondue – CHF 28', 'Tomaten-Fondue – 28.– CHF') },
    i4: { name: L('Fondue à la truffe – 32.– CHF', 'Truffle cheese fondue – CHF 32', 'Trüffel-Fondue – 32.– CHF') },
    note: L('2.– CHF pommes de terre grenailles (sauf fondue tomate).', 'CHF 2 supplement for new potatoes (excludes tomato fondue).', '2.– CHF Drillinge (ausser Tomaten-Fondue).')
  },
  fonduesV: {
    i1: {
      name: L('Fondue chinoise 200 g – 40.– CHF', 'Fondue chinoise (200 g) – CHF 40', 'Chinesisches Fondue 200 g – 40.– CHF'),
      desc: L('Morceaux de viande cuits dans un bouillon de légumes.', 'Thinly sliced meat cooked at the table in vegetable consommé.', 'Fleischstücke im Gemüsefond gegart.')
    },
    i2: {
      name: L('Fondue Bacchus 200 g – 40.– CHF', 'Bacchus fondue (200 g) – CHF 40', 'Bacchus-Fondue 200 g – 40.– CHF'),
      desc: L('Morceaux de viande cuits dans du vin rouge.', 'Thinly sliced meat cooked at the table in red wine.', 'Fleischstücke in Rotwein gegart.')
    },
    note: L('Servies avec sauces maison, frites et salade.', 'Served with house sauces, chips and green salad.', 'Mit hausgemachten Saucen, Pommes und Salat.')
  },
  platNote: L(
    '<strong>Supplément accompagnement</strong> – 5.– CHF<br>Frites, salade verte, poêlée de légumes de saison, tagliatelles fraîches.<br><br><strong>Supplément frites à la truffe</strong> – 8.– CHF<br><br><strong>Supplément sauce</strong><br>Café de Paris, Poivre – 5.50 CHF · Morilles – 7.– CHF',
    '<strong>Extra side</strong> – CHF 5<br>Chips, mixed leaf salad, seasonal sautéed vegetables, fresh tagliatelle.<br><br><strong>Truffle chips supplement</strong> – CHF 8<br><br><strong>Extra sauce</strong> – CHF 5.50<br>Café de Paris, morels, peppercorn.',
    '<strong>Beilage</strong> – 5.– CHF<br>Pommes, grüner Salat, saisonales Gemüse, frische Tagliatelle.<br><br><strong>Trüffel-Pommes</strong> – 8.– CHF<br><br><strong>Sauce</strong> – 5.50 CHF<br>Café de Paris, Morcheln, Pfeffer.'
  ),
  desserts: {
    i1: { name: L('Parfait glacé à la vanille, éclats d’amandes et caramel beurre salé – 14.– CHF', 'Vanilla iced parfait, flaked almonds and salted caramel – CHF 14', 'Gefrorenes Vanilleparfait, Mandelstücke & Salzkaramell – 14.– CHF') },
    i2: { name: L('Profiteroles, glace vanille & sauce chocolat maison – 16.– CHF', 'Profiteroles, vanilla ice cream and home-made chocolate sauce – CHF 16', 'Profiteroles, Vanilleeis & hausgemachte Schokosauce – 16.– CHF') },
    i3: {
      name: L('Café gourmand – 16.– CHF', 'Café gourmand – CHF 16', 'Kaffee & kleine Desserts – 16.– CHF'),
      desc: L('Café ou thé accompagné de mini desserts.', 'Coffee or tea with a selection of miniature pastries.', 'Kaffee oder Tee mit kleinen Desserts.')
    },
    i4: {
      name: L('Affogato – 7.50 CHF', 'Affogato – CHF 7.50', 'Affogato – 7.50 CHF'),
      desc: L('Glace vanille nappée d’un espresso chaud.', 'Vanilla ice cream drowned in a hot espresso.', 'Vanilleeis mit heißem Espresso.')
    },
    i5: {
      name: L('Café ou Chocolat Liégeois – 11.– CHF', 'Coffee or chocolate Liégeois sundae – CHF 11', 'Kaffee- oder Schokoladen-Liégeois – 11.– CHF'),
      desc: L('Glace café/chocolat, nappage, chantilly.', 'Layered coffee or chocolate ice, sauce and whipped cream.', 'Kaffee-/Schokoeis, Topping, Sahne.')
    },
    i6: {
      name: L('Dame blanche – 11.– CHF', 'Dame blanche – CHF 11', 'Dame blanche – 11.– CHF'),
      desc: L('Glace vanille, chocolat chaud et chantilly.', 'Vanilla ice cream, hot chocolate sauce and Chantilly cream.', 'Vanilleeis, heiße Schokolade & Sahne.')
    },
    i7: {
      name: L('Glaces arrosées – 14.– CHF', 'Liqueur-laced ice creams – CHF 14', 'Eis mit Likör – 14.– CHF'),
      desc: L('Abricotine · Colonel · Poire.', 'Abricotine · Colonel · Poire William.', 'Abricotine · Colonel · Birne.')
    },
    i8: {
      name: L('Glace / Sorbet', 'Ice cream / sorbet', 'Glace / Sorbet'),
      desc: L(
        '1 boule – 4.– CHF · 2 boules – 8.– CHF<br>(Vanille, Chocolat, Fraise, Moka, Straciatella, Noix, Poire, Abricot, Citron).',
        'One scoop – CHF 4 · two scoops – CHF 8<br>(Vanilla, chocolate, strawberry, mocha, stracciatella, walnut, pear, apricot, lemon).',
        '1 Kugel – 4.– CHF · 2 Kugeln – 8.– CHF<br>(Vanille, Schokolade, Erdbeere, Moka, Stracciatella, Nuss, Birne, Aprikose, Zitrone).'
      )
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
