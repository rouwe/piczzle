import { MongoClient } from 'mongodb';
import configs from '../configs/configs';

export type ConnectDbConstructorType = {
    host: string; 
    port: string;  
};

class ConnectDb {    
    /**
     * Create and return a new instance of connection to database.
     * @param host - database hostname.
     * @param port - database port.
     */
    host: string;
    port: string;
    url: string;

    constructor({host, port}: ConnectDbConstructorType) {
        this.host = host;
        this.port = port;
        this.url = `mongodb://${this.host}:`;
    }

    connect(): MongoClient {
        // Returns an instance of Mongo Client
        const client = new MongoClient(this.url);
        async () => {
            try {
                // Connect to the server
                await client.connect();
                
                // Establish and verify connection
                await client.db("admin").command({ping: 1});
            } catch (err) {
                throw err;
            }
        }
        return client;
    }
}

// MongoDb client connection
export const client = new ConnectDb(configs.db).connect();
// MondoDb piczzle database
export const piczzleDb = client.db("piczzle");
// MongoDb piczzle users collection 
export const usersCollection = piczzleDb.collection("users");

export default ConnectDb;