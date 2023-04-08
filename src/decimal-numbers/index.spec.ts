import { solve } from '.'

it.each(
  [
    {
      input: '1.72',
      output: true
    },
    {
      input: '13.72',
      output: true
    },
    {
      input: '-1.72',
      output: true
    },
    {
      input: '61.720000065',
      output: true
    },
    {
      input: '1.0000000001',
      output: true
    },
    {
      input: '1.000000000',
      output: true
    },
    {
      input: '-684981.72',
      output: true
    },
    {
      input: '-684981',
      output: false
    },
    {
      input: '-68-4981',
      output: false
    },
    {
      input: '-68.49.81',
      output: false
    },
    {
      input: '68.49.81-',
      output: false
    },
    {
      input: '.68.49.81',
      output: false
    },
    {
      input: '12.33 ',
      output: false
    },
    {
      input: ' 12.33',
      output: false
    },
    {
      input: ' 12.33 ',
      output: false
    },
    {
      input: '12. 33',
      output: false
    },
    {
      input: 'two',
      output: false
    },
    {
      input: '123.',
      output: false
    },
    {
      input: '1',
      output: false
    },
    {
      input: '9999999999',
      output: false
    },
    {
      input: '581734659',
      output: false
    },
    {
      input: '89312562.1358197394817364',
      output: true
    },
    {
      input: '.6881',
      output: true
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
