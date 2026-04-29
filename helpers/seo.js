export function getMetadata(page) {
  const label = page === 'search-result' ? 'Search Results' : 'TrueLife Preview'
  return {
    title: `${label} | TrueLife Preview`,
    description: 'Local preview build for the homepage redesign screens.',
  }
}

export function buildHead({ title, description }) {
  return {
    title,
    meta: [
      { name: 'description', content: description },
    ],
  }
}
