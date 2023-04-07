import { solve } from '.'

it.each(
  [
    {
      input: 'Jan 1993',
      output: [
        'Jan 1993',
        '1993'
      ]
    },
    {
      input: 'May 2005',
      output: [
        'May 2005',
        '2005'
      ]
    },
    {
      input: 'Feb 2000',
      output: [
        'Feb 2000',
        '2000'
      ]
    },
    {
      input: 'december 2020',
      output: [
        'december 2020',
        '2020'
      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(expect.arrayContaining(output))
})
