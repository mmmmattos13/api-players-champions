import { PlayerModel } from "../models/players-model";
import { PlayerModelStatistics } from "../models/statistics-model";
import fs from 'fs/promises';

let players: PlayerModel[] = [];

const loadPlayers = async () => {
  const data = await fs.readFile("./src/data/players.json", "utf-8");
  players = JSON.parse(data) as PlayerModel[];
};

loadPlayers();

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return players;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return players.find((player) => player.id === id);
};

export const createPlayer = (player: PlayerModel) => {
  throw new Error("Function not implemented.");
};

export const insertPlayer = async (player: PlayerModel) => {
  players.push(player);
};

export const deleteOnePlayer = async (id: number): Promise<boolean> => {
  const index = players.findIndex((player) => player.id === id);

  if (index !== -1) {
    players.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (id: number, statistics: PlayerModelStatistics): Promise<PlayerModel | undefined> => {
  const playerIndex = players.findIndex(player => player.id === id);

  if (playerIndex !== -1) {
    players[playerIndex].statistics = statistics;
    return players[playerIndex];
  }

  return undefined;
};
