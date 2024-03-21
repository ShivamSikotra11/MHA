# import pymongo

# MONGODB_CONNECTION_URL = "mongodb://localhost:27017/"
MONGODB_DATABASE_NAME = "mha"

# client = pymongo.MongoClient(MONGODB_CONNECTION_URL)
# db = client[MONGODB_DATABASE_NAME]


from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# uri = "mongodb+srv://viral:Viral123@mha.bxx8y7j.mongodb.net/?retryWrites=true&w=majority&appName=mha"
uri = "mongodb+srv://viral:Viral123@mha.bxx8y7j.mongodb.net/?retryWrites=true&w=majority"


# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client[MONGODB_DATABASE_NAME]

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)