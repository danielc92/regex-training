import { solve } from '.'

it.each(
  [
    {
      input: 'ftp://file_server.com:21/top_secret/life_changing_plans.pdf',
      output: [
        'ftp',
        'file_server.com',
        '21'
      ]
    },
    {
      input: 'ftp://file_server.com:8080/top_secret/life_changing_plans.pdf',
      output: [
        'ftp',
        'file_server.com',
        '8080'
      ]
    },
    {
      input: 'ftp://file_server.or.co:8080/top_secret/life_changing_plans.pdf',
      output: [
        'ftp',
        'file_server.or.co',
        '8080'
      ]
    },
    {
      input: 'file://localhost:4040/zip_file',
      output: [
        'file',
        'localhost',
        '4040'
      ]
    },
    {
      input: 'https://s3cur3-server.com:9999/',
      output: [
        'https',
        's3cur3-server.com',
        '9999'
      ]
    },

    {
      input: 'market://search/angry%20birds',
      output: [
        'market',
        'search'
      ]
    },
    {
      input: 'http://myface.com.au/profiles',
      output: [
        'http',
        'myface.com.au'
      ]
    }

  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(
    expect.arrayContaining(
      output
    )
  )
})
