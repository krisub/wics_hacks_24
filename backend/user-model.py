import sqlite3
import hashlib

class UserModel:

    TABLE_NAME = "users"
    CODE = "random"

    def __init__(self, db_name="users.db"):
        self.db_name = db_name
        self.connection = sqlite3.connect(db_name)
        self.cursor = self.connection.cursor()
        self.cursor.execute(
            f"CREATE TABLE IF NOT EXISTS {self.TABLE_NAME} (username TEXT PRIMARY KEY, password TEXT, points INTEGER, location TEXT, visits INTEGER)")
        self.connection.commit()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.connection.commit()
        self.connection.close()

    def add_user(self, username, password, location, points=0, visits=0):
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        self.cursor.execute("INSERT INTO {self.TABLE_NAME} VALUES (?, ?, ?, ?, ?)", (username, hashed_password, points, location, visits))

    def update_points(self, username):
        self.cursor.execute(f"SELECT visits FROM {self.TABLE_NAME} WHERE username=?", (username,))
        visits = self.cursor.fetchone()[0]
        if visits > 10:
            self.cursor.execute(f"SELECT points FROM {self.TABLE_NAME} WHERE username=?", (username,))
            points = self.cursor.fetchone()[0] + 1
            self.cursor.execute(f"UPDATE {self.TABLE_NAME} SET points=? WHERE username=?", (points, username))
        self.connection.commit()

    def get_points(self, username):
        self.cursor.execute(f"SELECT points FROM {self.TABLE_NAME} WHERE username=?", (username,))
        return self.cursor.fetchone()[0]

    def get_places(self, username):
        self.cursor.execute(f"SELECT location FROM {self.TABLE_NAME} WHERE username=?", (username,))
        return self.cursor.fetchone()[0]

    def update_visits(self, username):
        self.cursor.execute(f"SELECT visits FROM {self.TABLE_NAME} WHERE username=?", (username,))
        visits = self.cursor.fetchone()[0] + 1
        self.cursor.execute(f"UPDATE {self.TABLE_NAME} SET visits=? WHERE username=?", (visits, username))
        self.connection.commit()

    def delete_user(self, username):
        self.cursor.execute("DELETE FROM {self.TABLE_NAME} WHERE username=?", (username,))
        self.connection.commit()

    def update_user(self, username, password=None, location=None):
        update_query = f"UPDATE {self.TABLE_NAME} SET password=?, location=? WHERE username=?"
        hashed_password = hashlib.sha256(password.encode()).hexdigest() if password else None
        self.cursor.execute(update_query, (hashed_password, location, username))
        self.connection.commit()