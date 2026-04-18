/**
 * Génère assets/i18n/locales-carte.json — lancer : node scripts/generate-locales-carte.mjs
 * Modifier les textes ici puis régénérer le fichier JSON.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '../assets/i18n/locales-carte.json');

const L = (fr, en, de) => ({ fr, en, de });

const carte = {
  hero: {
    title: L(
      'La carte de printemps',
      'Spring menu',
      'Frühlingskarte'
    ),
    intro: L(
      'Une cuisine de saison, inspirée des produits locaux et des arrivages du marché.<br>Menu du jour proposé du mercredi au vendredi.<br>Suggestion du moment renouvelée au gré des produits et de l’envie du chef.',
      'Seasonal cuisine inspired by local produce and market arrivals.<br>Daily menu Wednesday to Friday.<br>Chef’s suggestions change with produce and inspiration.',
      'Saisonküche aus regionalen Produkten und Marktware.<br>Tagesmenü von Mittwoch bis Freitag.<br>Empfehlungen des Küchenchefs je nach Angebot und Laune.'
    )
  },
  tabs: {
    share: L('À partager', 'To share', 'Zum Teilen'),
    entrees: L('Entrées', 'Starters', 'Vorspeisen'),
    plats: L('Plats', 'Main courses', 'Hauptgänge'),
    coin: L('Coin montagnard', 'Mountain corner', 'Berg-Ecke'),
    desserts: L('Desserts', 'Desserts', 'Desserts'),
    enfant: L('Menu enfant', 'Children’s menu', 'Kindermenü')
  },
  h: {
    share: L('À partager', 'To share', 'Zum Teilen'),
    entrees: L('Entrées', 'Starters', 'Vorspeisen'),
    plats: L('Plats', 'Main courses', 'Hauptgänge'),
    coin: L('Coin montagnard', 'Mountain corner', 'Berg-Ecke'),
    fondues: L('Fondues au fromage (dès 2 pers.)', 'Cheese fondues (from 2 guests)', 'Käsefondues (ab 2 Pers.)'),
    fonduesViande: L('Fondues de viande (min. 2 pers.)', 'Meat fondues (min. 2 guests)', 'Fleischfondues (mind. 2 Pers.)'),
    suggestions: L('Suggestions du moment', 'Chef’s suggestions', 'Aktuelle Empfehlungen'),
    desserts: L('Desserts', 'Desserts', 'Desserts'),
    glaces: L('Coupes glacées', 'Ice cream sundaes', 'Eisbecher'),
    menuEnfant: L('Menu enfant', 'Children’s menu', 'Kindermenü')
  },
  ap: {
    i1: {
      name: L(
        'Planche du Terroir – Fromages & salaisons – 17.– la petite · 28.– la grande',
        'Terroir board – cheeses & charcuterie – CHF 17 small · CHF 28 large',
        'Terroir-Platte – Käse & Salami – 17.– klein · 28.– gross'
      ),
      desc: L(
        'Fromages et salaisons du Valais, pain de seigle, pickles maison & chutney de fruits.',
        'Valais cheeses and cured meats, rye bread, house pickles & fruit chutney.',
        'Walliser Käse und Salami, Roggenbrot, hausgemachte Pickles & Fruchtchutney.'
      )
    },
    i2: {
      name: L('Terrine de campagne maison, parfumée au cognac – 18.– 180 g', 'House terrine with cognac – CHF 18 · 180 g', 'Hausgemachte Terrine mit Cognac – 18.– 180 g'),
      desc: L('Pain de seigle & pickles maison.', 'Rye bread & house pickles.', 'Roggenbrot & hausgemachte Pickles.')
    },
    i3: {
      name: L('Rillettes de poulet maison au thym – 16.– 180 g', 'House chicken rillettes with thyme – CHF 16 · 180 g', 'Hausgemachte Hähnchen-Rillettes mit Thymian – 16.– 180 g'),
      desc: L('Pain de seigle & pickles maison.', 'Rye bread & house pickles.', 'Roggenbrot & hausgemachte Pickles.')
    },
    i4: {
      name: L('Planche Végétarienne – 24.– CHF', 'Vegetarian board – CHF 24', 'Vegetarische Platte – 24.– CHF'),
      desc: L('Houmous de betterave, tapenade, tomates, olives marinées, feta, gressins & chutney de fruits.', 'Beet hummus, tapenade, tomatoes, marinated olives, feta, grissini & fruit chutney.', 'Rote-Bete-Hummus, Tapenade, Tomaten, marinierte Oliven, Feta, Grissini & Fruchtchutney.')
    }
  },
  ent: {
    i1: { name: L('Salade verte, vinaigrette & croûtons maison – 7.– la petite · 13.– la grande', 'Green salad, vinaigrette & house croutons – CHF 7 small · CHF 13 large', 'Grüner Salat, Vinaigrette & hausgemachte Croutons – 7.– klein · 13.– gross') },
    i2: { name: L('Salade printanière, crudités croquantes, flocon de parmesan & vinaigrette maison – 9.– la petite · 16.– la grande', 'Spring salad, crunchy raw vegetables, parmesan shavings & house vinaigrette – CHF 9 small · CHF 16 large', 'Frühlingssalat, knackige Rohkost, Parmesanhobel & hausgemachte Vinaigrette – 9.– klein · 16.– gross') },
    i3: { name: L('Velouté d’asperges maison – 11.– CHF', 'House asparagus velouté – CHF 11', 'Hausgemachter Spargel-Velouté – 11.– CHF') },
    i4: { name: L('Salade de chèvre chaud croustillant, vinaigrette au miel & noix torréfiées – 17.– CHF', 'Crispy warm goat cheese salad, honey & toasted walnut dressing – CHF 17', 'Knuspriger warmer Ziegenkäse-Salat, Honig & geröstete Walnüsse – 17.– CHF') },
    i5: { name: L('Duo d’asperges vertes & blanches, tomates cerises marinées, crème légère au vinaigre de framboise – 19.– CHF', 'Duo of green & white asparagus, marinated cherry tomatoes, light raspberry vinegar cream – CHF 19', 'Duo grüner & weisser Spargel, marinierte Kirschtomaten, leichte Himbeeressig-Creme – 19.– CHF') },
    i6: {
      name: L('Tartare de bœuf coupé au couteau, pickles & toasts grillés', 'Hand-cut beef tartare, pickles & grilled toasts', 'Handgeschnittenes Rindertatar, Pickles & geröstete Toasts'),
      desc: L('75 g – 21.– CHF · 150 g (servi avec frites) – 38.– CHF', '75 g – CHF 21 · 150 g (with fries) – CHF 38', '75 g – 21.– CHF · 150 g (mit Pommes) – 38.– CHF')
    }
  },
  plat: {
    i1: { name: L('Suprême de volaille fermière, sauce aux chanterelles & grenailles rôties au romarin – 34.– CHF', 'Farm chicken supreme, chanterelle sauce & rosemary roast potatoes – CHF 34', 'Bauernhähnchen-Supreme, Pfifferlingssauce & Rosmarin-Kartoffeln – 34.– CHF') },
    i2: { name: L('Entrecôte de bœuf grillée, beurre maître d’hôtel, frites croustillantes – 40.– CHF (pour 1 ou 2)', 'Grilled rib-eye, maître d’hôtel butter, crispy fries – CHF 40 (for 1 or 2)', 'Gegrilltes Rinderentrecôte, Kräuterbutter, knusprige Pommes – 40.– CHF (1–2 Pers.)') },
    i3: { name: L('Filet de bœuf sur pierre chaude, frites croustillantes, sauce poivre & poêlée de légumes de saison – 46.– CHF', 'Beef fillet on hot stone, fries, pepper sauce & seasonal vegetables – CHF 46', 'Rinderfilet auf heißem Stein, Pommes, Pfeffersauce & saisonales Gemüse – 46.– CHF') },
    i4: { name: L('Risotto crémeux aux petits pois & chanterelles poêlées – 26.– CHF', 'Creamy pea risotto & sautéed chanterelles – CHF 26', 'Cremiges Erbsen-Risotto & gebratene Pfifferlinge – 26.– CHF') },
    i5: { name: L('Tagliatelles au pesto d’ail des ours & burrata – 24.– CHF', 'Tagliatelle with wild garlic pesto & burrata – CHF 24', 'Tagliatelle mit Bärlauchpesto & Burrata – 24.– CHF') },
    i6: { name: L('Tagliatelles à la crème de truffe d’été – 32.– CHF', 'Tagliatelle with summer truffle cream – CHF 32', 'Tagliatelle mit Sommertrüffel-Creme – 32.– CHF') },
    i7: {
      name: L('Le mijoté du chef – 30.– CHF', 'Chef’s stew – CHF 30', 'Schmortopf des Küchenchefs – 30.– CHF'),
      desc: L('Blanquette de veau à l’ancienne, champignons & carottes, accompagnée de riz de Camargue.', 'Classic veal blanquette, mushrooms & carrots, with Camargue rice.', 'Kalbsblanquette nach Art des Hauses, Pilze & Karotten, mit Camargue-Reis.')
    }
  },
  coin: {
    i1: { name: L('Macaronis du berger, pommes de terre, fromage gratiné & oignons rôtis – 25.– CHF', 'Shepherd’s macaroni, potatoes, gratin cheese & roasted onions – CHF 25', 'Hirten-Makkaroni, Kartoffeln, überbackener Käse & geröstete Zwiebeln – 25.– CHF') },
    i2: {
      name: L('Bulle AOP, pain de campagne & condiments – 14.– CHF', 'Bulle AOP cheese, country bread & condiments – CHF 14', 'Bulle AOP, Landbrot & Beilagen – 14.– CHF'),
      desc: L('Fromage à pâte dure du terroir, servi à température ambiante.', 'Hard alpine cheese from the region, served at room temperature.', 'Hartkäse aus dem Terroir, bei Zimmertemperatur serviert.')
    }
  },
  fondues: {
    i1: { name: L('Fondue moitié-moitié – 28.– CHF', 'Half-and-half fondue – CHF 28', 'Halb-Halb-Fondue – 28.– CHF') },
    i2: { name: L('Fondue tomate – 28.– CHF', 'Tomato fondue – CHF 28', 'Tomaten-Fondue – 28.– CHF') },
    i3: { name: L('Fondue dans le pain – 28.– CHF', 'Fondue in bread – CHF 28', 'Käsefondue im Brot – 28.– CHF') },
    i4: { name: L('Fondue à la truffe – 32.– CHF', 'Truffle fondue – CHF 32', 'Trüffel-Fondue – 32.– CHF') },
    note: L('+ 2.– CHF pommes de terre grenailles.', '+ CHF 2 baby potatoes.', '+ 2.– CHF Drillinge.')
  },
  fonduesV: {
    i1: {
      name: L('Fondue chinoise 200 g – 39.– CHF', 'Chinese fondue 200 g – CHF 39', 'Chinesisches Fondue 200 g – 39.– CHF'),
      desc: L('Fines tranches de viande cuites dans un bouillon de légumes.', 'Thin meat slices cooked in vegetable broth.', 'Feine Fleischscheiben im Gemüsefond.')
    },
    i2: {
      name: L('Fondue bourguignonne 200 g – 39.– CHF', 'Bourguignonne fondue 200 g – CHF 39', 'Bourguignonne-Fondue 200 g – 39.– CHF'),
      desc: L('Morceaux de viande frits dans l’huile chaude.', 'Meat pieces fried in hot oil.', 'Fleischstücke in heißem Öl gebraten.')
    },
    note: L('Servies avec sauces maison, frites et salade.', 'Served with house sauces, fries and salad.', 'Mit hausgemachten Saucen, Pommes und Salat.')
  },
  sug: {
    text: L(
      'À découvrir à l’ardoise en salle : entrée du moment, plat du moment (poisson), poisson frais selon arrivage & tarte du jour.',
      'On the board in the dining room: starter of the day, fish main, fresh fish by arrival & tart of the day.',
      'An der Tafel im Saal: Vorspeise des Tages, Fischgericht, frischer Fisch je nach Ankunft & Tarte des Tages.'
    )
  },
  platNote: L(
    'Supplément truffe d’été fraîche – 5.– CHF<br>Supplément accompagnement +5.– CHF (Frites, salade verte, poêlée de légumes de saison, tagliatelles fraîches).',
    'Fresh summer truffle supplement – CHF 5<br>Side supplement +CHF 5 (fries, green salad, seasonal vegetables, fresh tagliatelle).',
    'Frische Sommertrüffel – 5.– CHF<br>Beilage +5.– CHF (Pommes, grüner Salat, saisonales Gemüse, frische Tagliatelle).'
  ),
  desserts: {
    i1: { name: L('Crème brûlée parfumée au Cointreau, éclat de fruits frais – 12.– CHF', 'Cointreau crème brûlée, fresh fruit – CHF 12', 'Cointreau-Crème brûlée, frisches Obst – 12.– CHF') },
    i2: { name: L('Profiteroles, glace vanille & sauce chocolat maison – 12.– CHF', 'Profiteroles, vanilla ice cream & house chocolate sauce – CHF 12', 'Profiteroles, Vanilleeis & hausgemachte Schokosauce – 12.– CHF') },
    i3: {
      name: L('Café gourmand – 14.– CHF', 'Coffee & sweets – CHF 14', 'Kaffee & kleine Desserts – 14.– CHF'),
      desc: L('Café ou thé accompagné de mini desserts maison.', 'Coffee or tea with mini house desserts.', 'Kaffee oder Tee mit kleinen Desserts vom Haus.')
    },
    i4: {
      name: L('Affogato – 8.– CHF', 'Affogato – CHF 8', 'Affogato – 8.– CHF'),
      desc: L('Glace vanille nappée d’un espresso chaud.', 'Vanilla ice cream with hot espresso.', 'Vanilleeis mit heißem Espresso.')
    }
  },
  glaces: {
    i1: {
      name: L('Romanoff – 13.– CHF', 'Romanoff – CHF 13', 'Romanoff – 13.– CHF'),
      desc: L('Glace vanille, fraises et crème légère.', 'Vanilla ice cream, strawberries & light cream.', 'Vanilleeis, Erdbeeren & leichte Sahne.')
    },
    i2: {
      name: L('Dame blanche – 11.– CHF', 'Dame blanche – CHF 11', 'Dame blanche – 11.– CHF'),
      desc: L('Glace vanille, chocolat chaud et chantilly.', 'Vanilla ice cream, hot chocolate & cream.', 'Vanilleeis, heiße Schokolade & Sahne.')
    },
    i3: {
      name: L('Glaces arrosées – 14.– CHF', 'Liqueur ice creams – CHF 14', 'Eis mit Likör – 14.– CHF'),
      desc: L('Abricotine · Colonel · Poire.', 'Abricotine · Colonel · Pear.', 'Abricotine · Colonel · Birne.')
    }
  },
  enfant: {
    i1: {
      name: L('Formule – 15.– CHF', 'Set menu – CHF 15', 'Menü – 15.– CHF'),
      desc: L(
        '<strong>Plat au choix :</strong> pasta bolognaise sauce maison ou schnitzel de porc maison, frites & légumes.<br><strong>Dessert :</strong> 1 boule de glace au choix.',
        '<strong>Main choice:</strong> pasta bolognese (house sauce) or house pork schnitzel, fries & vegetables.<br><strong>Dessert:</strong> one scoop of ice cream of your choice.',
        '<strong>Hauptgericht nach Wahl:</strong> Pasta Bolognese (hausgemacht) oder Schweineschnitzel, Pommes & Gemüse.<br><strong>Dessert:</strong> eine Kugel Eis nach Wahl.'
      )
    }
  }
};

fs.writeFileSync(out, JSON.stringify({ carte }, null, 2), 'utf8');
console.log('Written', out);
