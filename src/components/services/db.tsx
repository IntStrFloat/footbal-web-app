import {useState,useEffect} from 'react'
import { MongoClient, ObjectId } from 'mongodb';

export type Comand ={
  _id: ObjectId,
  name: String,
  players: [String],
  goals: Number,
  __v: Number,
}
export type Match = {
  _id: ObjectId,
  matchNumber: Number,
  teams: [String],
  players: {
    type: Map<String,String[]>,
    of: [String],
  },
  teamScores: {
    type: Map<String,Number>,
    of: Number,
  },
}
export type Player = {
  _id: ObjectId,
  name: String,
  goals: Number,
  red: Number,
  yellow: Number,
}
const mongoClient = new MongoClient('mongodb+srv://dima2004bereznev:KKspxHNwb9cMxfaR@cluster0.wcwdhaj.mongodb.net/?retryWrites=true&w=majority');

export const getCommands = async () => {
  await mongoClient.connect();
  const data = await mongoClient.db().collection('commands').find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export const getPlayers = async () => {
  await mongoClient.connect();
  const data = await mongoClient.db().collection('players').find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export const getMatches = async () => {
  await mongoClient.connect();
  const data = await mongoClient.db().collection('matches').find().toArray();
  return JSON.parse(JSON.stringify(data));
};