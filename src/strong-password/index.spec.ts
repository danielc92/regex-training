import { solve } from '.'

it.each(
  [
    {
      input: '',
      output: false
    },
    {
      input: '    ',
      output: false
    },
    {
      input: '1',
      output: false
    },
    {
      input: '  1  ',
      output: false
    },
    {
      input: 'a',
      output: false
    },
    {
      input: '!',
      output: false
    },
    {
      input: 'kjlhg124',
      output: false
    },
    {
      input: 'ASFjsfhhiaukfgh',
      output: false
    },
    {
      input: 'abc#098@',
      output: false
    },
    {
      input: 'ZXC   MN    la      s  j   f d91  8324   ( ) @ #   % *7',
      output: false
    },
    {
      input: '(%C@&#=$()_&%NB@#($VCV%n-c8v34-7',
      output: true
    },
    {
      input: 'abRGEEEc#098 @',
      output: false
    },
    {
      input: '978abRGEEEc#09/8\\@',
      output: true
    },
    {
      input: ' abRGEEEc#098@',
      output: false
    },
    {
      input: '   abRGEEEc#098@  ',
      output: false
    },
    {
      input: 'a!@#87fgsd()3t',
      output: false
    },
    {
      input: 'aA1$',
      output: false
    },
    {
      input: 'a!$DD@#87fgsd()3t',
      output: true
    },
    {
      input: 'abRGEEffff15Ec$$098',
      output: true
    },
    {
      input: 'abRGEEffff15E!!098!',
      output: true
    },
    {
      input: 'abdff15E!098!',
      output: false
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
