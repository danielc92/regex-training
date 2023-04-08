
// Find import paths and return what was imported and from where
const solve = (s: string) => {
  const result = s.match(/import\s+{\s*(\w+)\s*}\s+from\s+"(@?[\w-/]+)"/)
  return result?.length === 3 ? result?.slice(1) : []
}

export { solve }
