import { solve } from '.'

it.each(
  [
    {
      input: 'import {b} from "package-y"',
      output: ['b', 'package-y']
    },
    {
      input: 'import {SOME_CONSTANT} from "x-f-g"',
      output: ['SOME_CONSTANT', 'x-f-g']
    },
    {
      input: 'import {SETTINGS} from "x-f-g"',
      output: ['SETTINGS', 'x-f-g']
    },
    {
      input: 'import { SETTINGS } from "x-f-g"',
      output: ['SETTINGS', 'x-f-g']
    },
    {
      input: 'import { importantSettings } from "x-f-g"',
      output: ['importantSettings', 'x-f-g']
    },
    {
      input: 'import { importantSettings } from "Xyz"',
      output: ['importantSettings', 'Xyz']
    },
    {
      input: 'import { importantSettings } from "@scoped/Xyz"',
      output: ['importantSettings', '@scoped/Xyz']
    },
    {
      input: 'import    {x}    from      "package-y"',
      output: ['x', 'package-y']
    },
    {
      input: 'import   {x}              from                              "package-y"',
      output: ['x', 'package-y']
    },
    {
      input: 'import {   x   } from "package-y"',
      output: ['x', 'package-y']
    },
    {
      input: 'import {   camelCase   } from "egypt"',
      output: ['camelCase', 'egypt']
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
