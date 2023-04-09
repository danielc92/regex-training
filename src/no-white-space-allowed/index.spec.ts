import { solve } from '.'

it.each(
  [
    {
      input: '',
      output: true
    },

    {
      input: 'te st',
      output: false
    },
    {
      input: ' ',
      output: false
    },
    {
      input: '  ',
      output: false
    },
    {
      input: '      ',
      output: false
    },
    {
      input: '                   ',
      output: false
    },

    {
      input: 'nospaces',
      output: true
    },
    {
      input: 's p a c e s',
      output: false
    },
    {
      input: ' test',
      output: false
    },
    {
      input: 'test   ',
      output: false
    },
    {
      input: 'test ',
      output: false
    },
    {
      input: ' test ',
      output: false
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
