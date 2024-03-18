import pymongo

MONGODB_CONNECTION_URL = "mongodb://localhost:27017/"
MONGODB_DATABASE_NAME = "mha"

client = pymongo.MongoClient(MONGODB_CONNECTION_URL)
db = client[MONGODB_DATABASE_NAME]