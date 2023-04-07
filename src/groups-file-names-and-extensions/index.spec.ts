import { solve } from '.'

it.each(
  [
    {
      input: '.bashrc',
      output: null
    },
    {
      input: '.env',
      output: null
    },
    {
      input: 'cat.mp4',
      output: null
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

it.each(
  [
    {
      input: 'cat.jpg',
      output: [
        'cat',
        'jpg'
      ]
    },
    {
      input: 'doggy.gif',
      output: [
        'doggy',
        'gif'
      ]
    },
    {
      input: 'IMG4312354135.gif',
      output: [
        'IMG4312354135',
        'gif'
      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(
    expect.arrayContaining(output)
  )
})

