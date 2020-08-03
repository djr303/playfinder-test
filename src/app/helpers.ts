import FPC from 'floating-point-calculator';
import moment from 'moment';

const GBP_TO_EUR = 1.13

export const GBPToEUR = (gbp: number) => {
   return FPC.mult(gbp, GBP_TO_EUR).toFixed(2)
}

export const formatDate = (date: string): string => {
   const momentDate = moment(date);
   return momentDate.format('hh:mm d/m/y')
}

export const getDuration = (starts: string, ends: string): string => {
   const startUTC = moment(starts).valueOf();
   const endsUTC = moment(ends).valueOf();
   const duration = endsUTC - startUTC;
   const minutes = Math.floor((duration / (1000 * 60)) % 60);
   const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

   return `${hours} hour(s) ${minutes} minutes`;
}

export const formatPriceGBP = (price: string): string => `&pound;${price}`;

export const formatPriceEUR = (price: string): string => `&euro;${GBPToEUR(parseFloat(price))}`
