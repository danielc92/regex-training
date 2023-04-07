import { solve } from '.'

it.each(
  [
    {
      input: 'mr bruce has arrived at the entrance.',
      output: [
        'mr bruce'
      ]
    },
    {
      input: ' jon has arrived at the entrance.',
      output: [
        'jon'
      ]
    },

    {
      input: 'stacy has arrived at the entrance.',
      output: [
        'stacy'
      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(expect.arrayContaining(output))
})
