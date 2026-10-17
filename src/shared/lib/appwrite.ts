import { Client, Storage, TablesDB } from 'appwrite';
import { AppwritePrjct } from './env';


const client: Client = new Client();

client.setProject(AppwritePrjct.projectId).setEndpoint('https://sfo.cloud.appwrite.io/v1');

const tablesDB = new TablesDB(client);
const storage = new Storage(client);

export {
    tablesDB, storage
}