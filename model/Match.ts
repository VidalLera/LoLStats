import { Participant } from './Participant'

export interface Ban {
  championId: number;
  pickTurn: number;
}

export interface Objective {
  first: boolean;
  kills: number;
}

export interface Objectives {
  baron: Objective;
  champion: Objective;
  dragon: Objective;
  inhibitor: Objective;
  riftHerald: Objective;
  tower: Objective;
}

export interface Team {
  bans: Ban[];
  objectives: Objectives;
  teamId: number;
  win: boolean;
}

export interface Metadata {
  dataVersion: string;
  matchId: string;
  participants: string[];
}

export interface Info {
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: Participant[];
  platformId: string;
  queueId: number;
  teams: Team[];
  tournamentCode: string;
}

export interface MatchInfo {
  info: Info;
  metadata: Metadata;
}
