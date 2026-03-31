import type { Document, InsertOneResult } from "mongodb";
import MongodbService from "../service/mongodb_service";

class AvisRepository {
    // nom de la collection
    private collection = "avis";

    // sélectionner tous les enregistrements
    public SelectAll = async (): Promise<Document[] | unknown> => {
        // connexion au serveur MongoDB
        const connection = await new MongodbService().connect();

        // sélection d'une collection
        const collection = connection?.db().collection(this.collection);

        const results = collection?.find().toArray();

        return results;
    };

    //  insérer un document
    public insert = async (
        data: InsertOneResult,
    ): Promise<InsertOneResult[] | unknown> => {
        // connexion au serveur MongoDB
        const connection = await new MongodbService().connect();

        // sélection d'une collection
        const collection = connection?.db().collection(this.collection);

        const results = collection?.insertOne(data);

        return results;
    };
}
export default AvisRepository;