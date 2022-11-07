import { client } from './connect';

export async function closeClientDb() {
    /**
     * Close database connection before the application terminates.
     */
    process.on('SIGINT', function() {
        console.log("Closing connections...")
        client.close()
            .then(() => console.log("Done"));
    });
}