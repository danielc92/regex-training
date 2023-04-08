import { solve } from '.'

it.each(
  [
    {
      input: '#ZZ           ZZZZ',
      output: false
    },
    {
      input: '#FF',
      output: false
    },
    {
      input: '#FC4',
      output: false
    },
    {
      input: '#FC4876',
      output: true
    },
    {
      input: '#77565e',
      output: true
    },
    {
      input: '#red',
      output: false
    },
    {
      input: 'red',
      output: false
    },
    {
      input: '#1e4c91',
      output: true
    },
    {
      input: '#1e4c9100',
      output: true
    },
    {
      input: '#1e4c9165',
      output: true
    },
    {
      input: '#1e4c91ZZ',
      output: false
    },
    {
      input: '#1e4c9150',
      output: true
    },
    {
      input: '#1edd3e50',
      output: true
    },
    {
      input: '#76819286',
      output: true
    },
    {
      input: '#c7325750',
      output: true
    },
    {
      input: '1edd3e50',
      output: false
    },
    {
      input: '76819286',
      output: false
    },
    {
      input: 'c7325750',
      output: false
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
