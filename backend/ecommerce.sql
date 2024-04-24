
CREATE TABLE users (id SERIAL PRIMARY KEY,
                                      username VARCHAR(50) NOT NULL,
                                                           password VARCHAR(50) NOT NULL);


INSERT INTO users (username, password)
VALUES ('user1',
        'password1'), ('user2',
                       'password2'), ('user3',
                                      'password3');