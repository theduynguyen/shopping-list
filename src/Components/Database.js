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
