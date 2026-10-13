import { Client, TablesDB } from 'appwrite';
import { AppwritePrjct } from './env';


const client: Client = new Client();

client.setProject(AppwritePrjct.projectId).setEndpoint('https://sfo.cloud.appwrite.io/v1');

const tablesDB = new TablesDB(client);

export {
    tablesDB
}