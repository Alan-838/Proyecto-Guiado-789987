export const AppwritePrjct = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_STORE_DATABASE_ID,
    tablesDBPrjct: {
        products: import.meta.env.VITE_APPWRITE_PRODUCTS_TABLESDB_ID
    },
    buckets: {
        pictures: import.meta.env.VITE_APPWRITE_PICTURES_BUCKET_ID
    }
    
}