import { connection } from "../config";

export interface CreateUrl {
    url: string;
    description: string;
}

export interface getUrl {
    url: string;
    description: string;
}

export interface getSingleUrl{
    urlId: number;
}

export interface UrlUpdate {
    urlId: number;
    newUrl: string;
}

export interface UpdateDescriptionData {
    urlId: number;
    newDescription: string;
}

export interface DeleteUrlData {
    urlId: number;
}

export class UrlModel {
    constructor() {}

    createUrl(url: CreateUrl, callback: (err: any, results: any) => any) {
        connection.query("INSERT INTO urls SET ?", url, callback);
    }

    getUrl(callback: (err: any, results: any) => any) {
        connection.query("SELECT * FROM urls;", callback);
    }
    
    getSingleUrl(getUrl: getSingleUrl, callback: (err: any, results: any) => any){
        const {urlId} = getUrl;
        connection.query("SELECT * FROM urls WHERE url_id = ?", [urlId], callback);
    }

    updateUrl(updateData: UrlUpdate, callback: (err: any, results: any) => any) {
        const { urlId, newUrl } = updateData;
        console.log(`Updating URL with ID ${urlId} to ${newUrl}`);
        connection.query("UPDATE urls SET url = ? WHERE url_id = ?", [newUrl, urlId], callback);
    }

    updateDescription(updateData: UpdateDescriptionData, callback: (err: any, results: any) => any) {
        const { urlId, newDescription } = updateData;
        console.log(`Updating URL with ID ${urlId} to ${newDescription}`);
        connection.query("UPDATE urls SET description = ? WHERE url_id = ?", [newDescription, urlId], callback);
    }

    deleteUrl(deleteData: DeleteUrlData, callback: (err: any, results: any) => any) {
        const { urlId } = deleteData;
        connection.query("DELETE FROM urls WHERE url_id = ?", [urlId], callback);
    }
}

