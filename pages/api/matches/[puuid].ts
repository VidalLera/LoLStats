// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMatchIds, getSummoner, getMatch } from 'services/summoners/summoners'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const { puuid } = req.query
  console.time('match')
  console.log(`[...getMatchesIds]`)
  getMatchIds(puuid)
    .then(matchIds => {
      console.log(`[...getMatchIds]`)
      return getAllMatchs(matchIds)
    })
  .then(matches => {
    console.timeEnd('match')
    res.status(200).json([matches])
    return
  })  
  .catch(err => {
    res.status(500).json(err)
  })
}

const getAllMatchs = (matchIds: string[]) => {
  // return Promise.all(matchIds.map(getMatch)) // change to Promise.allSettled()
  return getMatch(matchIds[0])
}