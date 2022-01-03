// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Wanted, Home } = initSchema(schema);

export {
  Wanted,
  Home
};