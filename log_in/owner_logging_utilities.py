import crypt
import jwt
from datetime import datetime, timedelta

SECRET_KEY = "nh4ct087q34mpcfht4891340uyt9145h0gn9ucv19cmr4-813-0u980-4764759ungcv94y5n89c1h34-tn3780ruc93tcgy8-m9p34ucygntv1m-3894cf-uy5gm-01g4"

def create_jwt_token_owner(conn,email_id,secret_key: str = SECRET_KEY):
    """
    Create a JWT token.

    :param user: User data to include in the JWT payload.
    :param secret_key: Secret key to sign the JWT.
    :param algorithm: Algorithm to use for signing the JWT.
    :return: Encoded JWT token.
    """
    cursor = conn.cursor()
    sql_qvery="SELECT owner_id FROM owner_deals WHERE email_id = %s"
    cursor.execute(sql_qvery, (email_id,))
    # Fetch the result (password) from the database
    result = cursor.fetchall()
    owner_id= result[0][0]
    expiration = datetime.now() + timedelta(minutes=30)
    payload = {
        "exp": expiration,
        "user_id": owner_id,
        

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
    sql_qvery="SELECT COUNT(*) FROM owner_deals WHERE email_id = %s"
    cursor.execute(sql_qvery, (email_id,))
    result = cursor.fetchone()
    if result[0] == 0:
        return False, "A user with this email does not exists."
    sql_qvery="SELECT password FROM owner_deals WHERE email_id = %s"
    cursor.execute(sql_qvery, (email_id,))
    # Fetch the result (password) from the database
    result = cursor.fetchall()
    stored_password= result[0][0]  
    password_user=hash_password(password)
            
    if stored_password==password_user:
        return True,"the user is log in "
    else:
        return False,"the user password is wrong"


def add_owner_to_db(user_details,conn):

    cursor = conn.cursor()
    
    # Check if the email already exists
    sql_qvery="SELECT COUNT(*) FROM owner_deals WHERE email_id = %s"
    cursor.execute(sql_qvery, (user_details.email_id,))
    result = cursor.fetchone()
    if result[0] > 0:
        return False, "A owner with this email already exists."

    
    # Hash the password
    hashed_password = hash_password(user_details.password)

    # Insert the user details into the database
    try:
        cursor.execute(
            "INSERT INTO owner_deals (first_name, last_name, mobile_number, email_id, password) VALUES (%s, %s, %s, %s, %s)",
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


