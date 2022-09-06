// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Summoner } from 'model/summoner'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMatchIds, getSummoner, getMatch } from 'services/summoners/summoners'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Summoner>
) {
  const { name } = req.query
  console.time('summoner')
  getSummoner(name)
    .then(summoner => {
      console.log(`[...getSummoner]`)
      res.status(200).json(summoner)
    })
    .catch(err => {
      res.status(500).json(err)
    })
    .finally(() => console.timeEnd('summoner'))
}

const getAllMatchs = (matchIds: string[]) => {
  // return Promise.all(matchIds.map(getMatch)) // change to Promise.allSettled()
  return getMatch(matchIds[0])
}