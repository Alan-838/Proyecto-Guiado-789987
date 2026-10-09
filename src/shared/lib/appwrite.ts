import { Client } from 'appwrite';
import { AppwritePrjct } from './env';


const client: Client = new Client();
client.setProject(AppwritePrjct.projectId); // Replace with your project ID