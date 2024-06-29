import crypt
import re
import jwt
from datetime import datetime, timedelta
import os

SECRET_KEY=os.getenv('SECRET_KEY')

def create_jwt_token_user(conn,email_id,secret_key: str = SECRET_KEY):
    """
    Create a JWT token.

    :param user: User data to include in the JWT payload.
    :param secret_key: Secret key to sign the JWT.
    :param algorithm: Algorithm to use for signing the JWT.
    :return: Encoded JWT token.
    """
    cursor = conn.cursor()
    sql_qvery="SELECT user_id FROM user_details WHERE email_id = %s"
    cursor.execute(sql_qvery, (email_id,))
    # Fetch the result (password) from the database
    result = cursor.fetchall()
    user_id= result[0][0]
    expiration = datetime.now() + timedelta(minutes=30)
    payload = {
        "exp": expiration,
        "user_id": user_id,
        

    }
    token = jwt.encode(payload, secret_key, algorithm="HS256")
    return token

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
        raise Exception("Token has expired")
    except jwt.InvalidTokenError:
        raise Exception("Invalid token")




def login(email_id,password,conn):
    cursor = conn.cursor()
    sql_qvery="SELECT COUNT(*) FROM user_details WHERE email_id = %s"
    cursor.execute(sql_qvery, (email_id,))
    result = cursor.fetchone()
    if result[0] == 0:
        return False, "A user with this email does not exists."
    sql_qvery="SELECT password FROM user_details WHERE email_id = %s"
    cursor.execute(sql_qvery, (email_id,))
    # Fetch the result (password) from the database
    result = cursor.fetchall()
    if result and len(result) == 1:
            stored_password= result[0][0]  # Access the user_id from the first (and only) row
            # Verify the stored password against the provided password
            
            password_user=hash_password(password)
            
            if stored_password==password_user:
                return True,"the user is log in "
            else:
                return False,"the user password is wrong"
        
            
def validate_mobile_number(mobile_number: str) -> bool:
    # Simple regex to check if the mobile number is valid
    pattern = re.compile(r"^\d{10,20}$")
    return bool(pattern.match(mobile_number))

def add_user_to_db(user_details,conn):
    cursor = conn.cursor()
    
    # Check if the email already exists
    sql_qvery="SELECT COUNT(*) FROM user_details WHERE email_id = %s"
    cursor.execute(sql_qvery, (user_details.email_id,))
    result = cursor.fetchone()
    if result[0] > 0:
        return False, "A user with this email already exists."

    # Validate mobile number
    if not validate_mobile_number(user_details.mobile_number):
        return False, "The mobile number is not valid."

    # Hash the password
    hashed_password = hash_password(user_details.password)

    # Insert the user details into the database
    try:
        cursor.execute(
            "INSERT INTO user_details (first_name, last_name, mobile_number, email_id, password) VALUES (%s, %s, %s, %s, %s)",
            (user_details.first_name, user_details.last_name, user_details.mobile_number, user_details.email_id, hashed_password)
        )
        conn.commit()
        return True, "User added successfully."
    except Exception as e:
        conn.rollback()
        return False, str(e)
    finally:
        cursor.close()


def hash_password(password):
   
    # Generate a salt
    salt = crypt.mksalt(crypt.METHOD_SHA512)
    

    # Encrypt the password using SHA-512 hash function and the generated salt
    encrypted_password = crypt.crypt(password, salt)

    return encrypted_password
