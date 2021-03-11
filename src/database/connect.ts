import { createConnection} from 'typeorm';

createConnection().then( () => console.log('🗃 Successfully connecter with DB'));