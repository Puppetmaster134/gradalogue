/*
    Endpoint: /api/create
    Author: Brian
    Swagger: http://gradz.jsullivan.cc:8890/api-docs/index.html#/default
*/
import fetch from 'isomorphic-unfetch';

const searchUrl = process.env.SEARCH_HOST;

export default async (req, res) => {
    const {
        body,
        method
    } = req

    switch (method) {
        case 'POST':
            console.log(body)

            let apiResponse = await fetch(`${searchUrl}/add`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            const responseBody = await apiResponse.json();

            console.log(responseBody);

            res.status(200).json({ responseBody })

            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
