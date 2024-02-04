import sqlite3

class businessModel:

    TABLE_NAME = "businesses"

    def __init__(self):
        self.connection = sqlite3.connect("all_businesses.db")
        self.cursor = self.connection.cursor()
        self.cursor.execute(
            f"CREATE TABLE IF NOT EXISTS {businessModel.TABLE_NAME} (name TEXT PRIMARY KEY) location TEXT, hours TEXT, menu TEXT)")
    
    def addBusiness(self, name, location, hours, menu=[]):
        self.cursor.execute("INSERT INTO {businessModel.TABLE_NAME} VALUES ('{name}', '{location}', '{hours}', '{menu}')")
    
    def dropBusiness(self, name):
        self.cursor.execute("DELETE FROM {businessModel.TABLE_NAME} WHERE name=('{name}')")
