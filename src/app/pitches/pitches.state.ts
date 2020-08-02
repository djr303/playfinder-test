export type PitchAttributes = {
  starts: string,
  ends: string,
  price: string,
  admin_fee: string,
  currency: string,
  availabilities: number
}

export type Pitch = {
  id: string,
  type: string
  attributes: PitchAttributes
}

export type Pitches = {
  [key: string]: Pitch;  
} 

export type Filter = {
  starts: string,
  ends: string,
  fromTime: string,
  toTime: string
}

export type Result = {
  filter: Filter,
  pitches: string[]
}

export type Results = {
  [key: string]: Result; 
}


export const initializeState = (): AppState => {
  return { pitches: {}, results: {}, urlHash: null };
}

export type JSONResponse = {
  meta: { 
    total_items: number,
    filter: {
      starts: string
      ends: string,
      fromTime: string,
      toTime: string
    }
  }
  data : Array<{
    type: string,
    id: string,
    attributes: {
      starts: string,
      ends: string
      price: string
      admin_fee: string
      currency: string
      availablities: number
    }
  }>
}

export default class AppState {
  pitches: Pitches
  results: Results
  urlHash: string
}



