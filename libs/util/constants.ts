import { LocationInfo } from './types'

export const initialViewState = {
  latitude: 34.083656,
  longitude: 74.797371,
  zoom: 8,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Srinagar , Jammu & Kashmir',
    latLng: [34.083656, 74.797371],
  },
  {
    placeName: 'Ganderbal, Jammu & Kashmir',
    latLng: [34.2165, 74.7719],
  },
  {
    placeName: 'Budgam, Jammu & Kashmir',
    latLng: [33.9349, 74.64],
  },
  {
    placeName: 'Awantipora, Jammu & Kashmir',
    latLng: [33.9218, 75.0139],
  },
  {
    placeName: 'Kulgam, Jammu & Kashmir',
    latLng: [33.645, 75.018],
  },
  {
    placeName: 'Kupwara, Jammu & Kashmir ',
    latLng: [34.5262, 74.2546],
  },
  {
    placeName: 'Baramulla,Jammu & Kashmir',
    latLng: [34.199, 74.3499],
  },
  {
    placeName: 'Kishtwar,Jammu & Kashmir',
    latLng: [33.3116, 75.7662],
  },
  {
    placeName: 'Doda ,Jammu & Kashmir',
    latLng: [33.1457, 75.548],
  },
  {
    placeName: 'Jammu',
    latLng: [32.7266, 74.857],
  },
]

export const VALET_CHARGE_PER_METER = 0.005

export const TAKE_COUNT = 12
