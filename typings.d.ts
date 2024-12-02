interface SliderProps {
    images: string[]; // Array of image URLs
  }
  
  interface Global {
    _mongoClientPromise?: Promise<MongoClient>;
  }