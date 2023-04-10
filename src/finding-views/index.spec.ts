import { solve } from '.'

it.each(
  [

    {
      input: '186,882 views Apr 6, 2023',
      output: '186,882'
    },
    {
      input: '1,862 views Apr 15, 2021',
      output: '1,862'
    },
    {
      input: '862 views Apr 8, 2023',
      output: '862'
    },
    {
      input: '15 views Apr 6, 2022',
      output: '15'
    },
    {
      input: '26,157 views Apr 6, 2022',
      output: '26,157'
    },
    {
      input: '2,654,254 views Apr 6, 2022',
      output: '2,654,254'
    },
    {
      input: '8 views Apr 6, 2022',
      output: '8'
    },
    {
      input: '1 view Apr 6, 2022',
      output: '1'
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
