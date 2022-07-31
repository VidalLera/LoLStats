// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSummonerByName } from 'services/summoners/summoners'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String[]>
) {

  getSummonerByName('SlenderLynux')
  .then(data => {
    console.log(`[...getSummonerByName] ${data.name}`)
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}
