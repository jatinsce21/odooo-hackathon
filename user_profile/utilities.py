import crypt
import re
import jwt
import mysql

import os

SECRET_KEY=os.getenv('SECRET_KEY')
def decode_jwt_token(token, secret_key: str = SECRET_KEY, algorithm: str = "HS256"):
    """
    Decode a JWT token.

    :param token: Encoded JWT token.
    :param secret_key: Secret key to verify the JWT.
    :param algorithm: Algorithm to use for verifying the JWT.
    :return: Decoded payload.
    """
    try:
        payload = jwt.decode(token, secret_key, algorithms=algorithm)
        return payload
    except jwt.ExpiredSignatureError:
        return False
    except jwt.InvalidTokenError:
        return False
    

def update_mobile_number(connection, user_id, new_number):
    """
    Update the mobile number for a user with the given user_id.

    :param connection: MySQL connection object.
    :param user_id: ID of the user to update.
    :param new_number: New mobile number to set.
    """
    cursor = connection.cursor()

    update_query = """
    UPDATE user_details
    SET mobile_number = %s
    WHERE user_id = %s
    """

    try:
        cursor.execute(update_query, (new_number, user_id))
        connection.commit()
        print(f"Mobile number updated successfully for user ID {user_id}")
        return True
    except mysql.connector.Error as err:
        print(f"Error updating mobile number: {err}")
        connection.rollback()
        return False

def update_email(connection, user_id,email_id):
    """
    Update the mobile number for a user with the given user_id.

    :param connection: MySQL connection object.
    :param user_id: ID of the user to update.
    :param new_number: New mobile number to set.
    """
    cursor = connection.cursor()

    update_query = """
    UPDATE user_details
    SET email_id = %s
    WHERE user_id = %s
    """

    try:

        cursor.execute(update_query, (email_id, user_id))
        connection.commit()
        print(f"email  updated successfully for user ID {user_id}")
        return True
    except mysql.connector.Error as err:
        print(f"Error updating email: {err}")
        connection.rollback()
        return False

def update_password(connection, user_id, password):
    """
    Update the mobile number for a user with the given user_id.

    :param connection: MySQL connection object.
    :param user_id: ID of the user to update.
    :param new_number: New mobile number to set.
    """
    cursor = connection.cursor()

    update_query = """
    UPDATE user_details
    SET password = %s
    WHERE user_id = %s
    """

    try:
        p=hash_password(password)
        cursor.execute(update_query, (p, user_id))
        connection.commit()
        print(f"password updated successfully for user ID {user_id}")
        return True
    except mysql.connector.Error as err:
        print(f"Error updating password: {err}")
        connection.rollback()
        return False
   
def hash_password(password):
   
    # Generate a salt
    salt = crypt.mksalt(crypt.METHOD_SHA512)
    

    # Encrypt the password using SHA-512 hash function and the generated salt
    encrypted_password = crypt.crypt(password, salt)

    return encrypted_password

def get_all_booking(id,connection):
    cursor = connection.cursor()
    sql="SELECT user_id, property_id, date, time, review, confirm, cancel ,name FROM booking  WHERE user_id = %s;"
    cursor.execute(sql,(id,))
    result=cursor.fetchall()
    p=[]
    return p
    

