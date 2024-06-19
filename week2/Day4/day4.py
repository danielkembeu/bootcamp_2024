def greet_users(users):
    for user in users: 
        print("Hello " + user.title() + " !") 


usernames = ["steve", "stan", "debbie"]

greet_users(usernames)