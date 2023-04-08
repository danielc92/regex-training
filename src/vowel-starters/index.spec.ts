import { solve } from '.'

it.each(
  [
    {
      input: 'aged',
      output: true
    },
    {
      input: 'orphan',
      output: true
    },
    {
      input: 'ordered',
      output: true
    },
    {
      input: 'order',
      output: true
    },
    {
      input: 'elephant',
      output: true
    },
    {
      input: 'underling',
      output: true
    },
    {
      input: 'unicorn',
      output: true
    },
    {
      input: 'trophy',
      output: false
    },
    {
      input: 'border',
      output: false
    },
    {
      input: 'orph4an',
      output: false
    },

    {
      input: 'apple',
      output: false
    },
    {
      input: 'bad',
      output: false
    },
    {
      input: 'sad',
      output: false
    },
    {
      input: 'made',
      output: false
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
