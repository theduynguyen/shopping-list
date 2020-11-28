const database = {
  Zucchinipuffer: {
    type: 'Gericht',
    ingredients: ['Eier', 'Zucchini', 'Kartoffeln', 'Minze', 'Petersilie']
  },
  'Spaghetti Bolognese': {
    type: 'Gericht',
    ingredients: [
      'Spaghetti',
      'Passierte Tomaten',
      'Möhren',
      'Hack',
      'Parmesan'
    ]
  },
  Abendbrot: {
    type: 'Gericht',
    ingredients: ['Brot', 'Schmier', 'Gewürzgurken', 'Tomaten', 'Wurst / Käse']
  },
  Galette: {
    type: 'Gericht',
    ingredients: ['Buchweizenmehl', 'Lauch', 'Lachs', 'Zitrone', 'Käse']
  },
  Linsenbuletten: {
    type: 'Gericht',
    ingredients: [
      'Rote Linsen',
      'Zwiebeln',
      'Eier',
      'Panniermehl',
      'Tomatenmark',
      'Salat'
    ]
  },
  Kürbissuppe: {
    type: 'Gericht',
    ingredients: ['Kürbis', 'Lauch', 'Kartoffeln', 'Milch', 'Brot']
  },
  Hommous: {
    type: 'Gericht',
    ingredients: [
      'Kichererbsen',
      'Knoblauch',
      'Tahina',
      'Limetten',
      'Brot',
      'Tomaten',
      'Gurken',
      'Paprika'
    ]
  },
  Zucchinisuppe: {
    type: 'Gericht',
    ingredients: [
      'Zucchini',
      'Zwiebeln',
      'Gemüsebrühe',
      'Kräuterfrischkäse',
      'Zitrone'
    ]
  },
  'Birnen Bohnen und Speck': {
    type: 'Gericht',
    ingredients: [
      'Kartoffeln',
      'Zwiebeln',
      'Gemüsebrühe',
      'Birnen',
      'Bohnen',
      'Speck'
    ]
  },
  'Hähnchen Xao': {
    type: 'Gericht',
    ingredients: ['Tofu', 'Brokkoli', 'Paprika']
  },
  Spargel: {
    type: 'Gericht',
    ingredients: ['Spargel', 'Kartoffeln', 'Schinken']
  },
  Pizza: {
    type: 'Gericht',
    ingredients: [
      'Hefe',
      'Mehl',
      'Mozzarella',
      'Mais',
      'Champignons',
      'Passierte Tomaten',
      'Paprika'
    ]
  },
  Brot: {
    type: 'Frühstück',
    ingredients: ['Brot']
  },
  Wurst: {
    type: 'Frühstück',
    ingredients: ['Wurst']
  },
  Pfannkuchen: {
    type: 'Frühstück',
    ingredients: ['Eier', 'Mehl', 'Milch', 'Schinken', 'Apfel']
  },
  Zwiebeln: {
    type: 'Evergreens',
    ingredients: ['Zwiebeln']
  },
  Eier: {
    type: 'Evergreens',
    ingredients: ['Eier']
  },
  Butter: {
    type: 'Evergreens',
    ingredients: ['Butter']
  },
  Mehl: {
    type: 'Evergreens',
    ingredients: ['Mehl']
  },
  Pasta: {
    type: 'Evergreens',
    ingredients: ['Pasta']
  },
  Bratöl: {
    type: 'Evergreens',
    ingredients: ['Bratöl']
  },
  Olivenöl: {
    type: 'Evergreens',
    ingredients: ['Olivenöl']
  },
  'Bohnen in Tomatensosse': {
    type: 'Evergreens',
    ingredients: ['Bohnen in Tomatensosse']
  },
  'Passierte Tomaten': {
    type: 'Evergreens',
    ingredients: ['Passierte Tomaten']
  },
  Tomaten: {
    type: 'Evergreens',
    ingredients: ['Tomaten']
  },
  Apfel: {
    type: 'Obst',
    ingredients: ['Apfel']
  },
  Bananen: {
    type: 'Obst',
    ingredients: ['Bananen']
  },
  Birnen: {
    type: 'Obst',
    ingredients: ['Birnen']
  },
  Erdbeeren: {
    type: 'Obst',
    ingredients: ['Erdbeeren']
  },
  Himbeeren: {
    type: 'Obst',
    ingredients: ['Himbeeren']
  },
  Nektarinen: {
    type: 'Obst',
    ingredients: ['Nektarinen']
  },
  Trauben: {
    type: 'Obst',
    ingredients: ['Trauben']
  }
}

export function groupByType (db) {
  const recipeList = Object.entries(db)

  const grouped = recipeList.reduce((acc, [recipe, meta]) => {
    if (!(meta.type in acc)) {
      acc[meta.type] = []
    }
    acc[meta.type].push(recipe)
    acc[meta.type].sort()

    return acc
  }, {})

  return grouped
}

export default database
