/*
    Endpoint: /api/create
    Author: Brian
    Swagger: http://gradz.jsullivan.cc:8890/api-docs/index.html#/default
*/
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const {
    body,
    method
  } = req

  switch (method) {
    case 'POST':
      let apiResponse = await fetch(`http://gradz.jsullivan.cc:8890/query`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      });

      const responseBody = await apiResponse.json();
      let searchResults = responseBody.apps;

      res.status(200).json({ searchResults })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
