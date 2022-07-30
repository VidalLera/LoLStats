// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String[]>
) {

  fetch('https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json')
  .then(res => res.json())
  .then(data => {
    const championsName = Object.keys(data.data)
    res.status(200).json(championsName)
  })
  .catch(err => res.status(500).json(err))
}
