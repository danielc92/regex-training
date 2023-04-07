import { solve } from '.'

it.each(
  [

    {
      input: '4153111106003389',
      output: true
    },
    {
      input: '4485477501437269038',
      output: true
    },
    {
      input: '4485477601437269031',
      output: true
    },
    {
      input: '448547760143726901',
      output: false
    },
    {
      input: '',
      output: false
    },
    {
      input: 'card',
      output: false
    },
    {
      input: '9280074325629846',
      output: false
    },
    {
      input: '4280074325629846',
      output: true
    },

    {
      input: '7280074325629846',
      output: false
    },
    {
      input: '123',
      output: false
    },
    {
      input: '448547750143726903f',
      output: false
    },

    {
      input: '44854775 1437 6903',
      output: false
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
