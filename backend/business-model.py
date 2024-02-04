import sqlite3

class BusinessModel:

    TABLE_NAME = "businesses"

    def __init__(self, db_name="all_businesses.db"):
        self.db_name = db_name
        self.connection = sqlite3.connect(db_name)
        self.cursor = self.connection.cursor()
        self.cursor.execute(f"CREATE TABLE IF NOT EXISTS {BusinessModel.TABLE_NAME} (name TEXT PRIMARY KEY, location TEXT, hours TEXT, menu TEXT)")

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.connection.commit()
        self.connection.close()

    def add_business(self, name, location, hours, menu=[]):
        query = f"INSERT INTO {BusinessModel.TABLE_NAME} VALUES (?, ?, ?, ?)"
        self.cursor.execute(query, (name, location, hours, str(menu)))

    def update_business(self, name, location=None, hours=None, menu=None):
        update_query = f"UPDATE {BusinessModel.TABLE_NAME} SET location=?, hours=?, menu=? WHERE name=?"
        self.cursor.execute(update_query, (location, hours, str(menu), name))

    def drop_business(self, name):
        query = f"DELETE FROM {BusinessModel.TABLE_NAME} WHERE name=?"
        self.cursor.execute(query, (name,))

    def get_all_businesses(self):
        query = f"SELECT * FROM {BusinessModel.TABLE_NAME}"
        self.cursor.execute(query)
        return self.cursor.fetchall()

    def get_business_by_name(self, name):
        query = f"SELECT * FROM {BusinessModel.TABLE_NAME} WHERE name=?"
        self.cursor.execute(query, (name,))
        return self.cursor.fetchone()
