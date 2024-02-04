import sqlite3

class userModel:

    TABLE_NAME = "users"
    code = "random"
    
    def __init__(self):
        self.connection = sqlite3.connect("users.db")
        self.cursor = self.connection.cursor()
        self.cursor.execute(
            f"CREATE TABLE IF NOT EXISTS {self.TABLE_NAME} (username TEXT PRIMARY KEY) password TEXT, points INTEGER, location TEXT, visits INTEGER)")
        self.connection.commit()

    def addUser(self, username, password, location, points=0, visits=0):
        self.cursor.execute("INSERT INTO {self.TABLE_NAME} VALUES ('{username}', '{password}', '{points}', '{location}', '{visits}')")
        self.connection.commit()
    
    def updatePoints(self):
        if (self.cursor.execute("SELECT visits FROM {self.TABLE_NAME}") > 10):
            point = self.cursor.execute("SELECT points FROM {self.TABLE_NAME}") + 1
            self.cursor.execute(f"UPDATE {self.TABLE_NAME} SET points = {point}")
        self.connection.commit()
        

    def getPoints(self):
        self.cursor.execute(f"")
        return

    def getPlaces(self):
        return

    def updateVisits(self, userCode):
        if (userCode == self.code):
            visit = self.cursor.execute("SELECT visits FROM {self.TABLE_NAME}") + 1
            self.cursor.execute(f"UPDATE {self.TABLE_NAME} SET visits = {visit}")

    def deleteUser(self, name):
        self.cursor.execute("DELETE FROM {self.TABLE_NAME} WHERE name=('{name}')")
        self.connection.commit()
