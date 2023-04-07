import { solve } from '.'

it.each(
  [
    {
      input: '200x300',
      output: [
        '200',
        '300'
      ]
    },
    {
      input: '200   x  300',
      output: [
        '200',
        '300'
      ]
    },
    {
      input: '200 x 300',
      output: [
        '200',
        '300'
      ]
    },

    {
      input: '1650 x 1850',
      output: [
        '1850',
        '1650'
      ]
    },
    {
      input: '200 by 300',
      output: [
        '200',
        '300'
      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(expect.arrayContaining(output))
})
