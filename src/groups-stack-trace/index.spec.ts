import { solve } from '.'

it.each(
  [
    {
      input: 'W/dalvikvm( 1553): threadid=1: uncaught exception',
      output: [

      ]
    },
    {
      input: 'E/( 1553): FATAL EXCEPTION: main',
      output: [

      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

it.each(
  [
    {
      input: 'E/( 1553):   at widget.List.makeView(ListingView.java:1727)',
      output: [
        'widget.List.makeView',
        'ListingView.java',
        '1727'
      ]
    },
    {
      input: 'E/( 1553):   at widget.List.fillDown(ListView.java:652)',
      output: [
        'widget.List.fillDown',
        'ListView.java',
        '652'
      ]
    },
    {
      input: 'E/( 1553):   at widget.List.fillRight(ListView.java:1)',
      output: [
        'widget.List.fillRight',
        'ListView.java',
        '1'
      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(
    expect.arrayContaining(output)
  )
})
