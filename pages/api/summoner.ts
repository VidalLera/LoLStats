// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMatchIds, getSummoner, getMatch } from 'services/summoners/summoners'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String[]>
) {
  console.time('summoner')
  getSummoner('SlenderLynux')
    .then(summoner => {
      console.log(`[...getSummoner]`)
      return getMatchIds(summoner.puuid)
    })
    .then(matchIds => {
      console.log(`[...getMatchesIds]`)
      return getAllMatchs(matchIds)
    })
    .then(matches => {
      console.timeEnd('summoner')
      res.status(200).json(matches)
    })
  .catch(err => {
    res.status(500).json(err)
  })
}

const getAllMatchs = (matchIds: string[]) => {
  return Promise.all(matchIds.map(getMatch)) // change to Promise.allSettled()
}