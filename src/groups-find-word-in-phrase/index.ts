
const solve = (s: string) => {
  const result = s.match(/\s*(.+) has arrived at the entrance\./)
  return (result != null) ? result.slice(1) : []
}

export { solve }
