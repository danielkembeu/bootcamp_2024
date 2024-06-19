# # exercice 1
# def display_message():
#     print("Hello,I am learning about functions in python")

# display_message()

# # Exercice 2 : 
# def favorite_book(title):
#     print(f"One of my favorite books is {title}")

# favorite_book("Harry Potter")


# # Exercice 3 :
# def describe_city(name, country="Israel"):
#     print(f"{name} is in {country}")


# describe_city("Zichron Ya'acob")
# describe_city("Paris", "France")
# describe_city("London")

# Exercice 4 :

# import random
# def game(number):
#     if number < 1 or number > 100:
#         print("\nPlease enter a number between 1 and 100\n")
#         return
#     else:
#        random_number = random.randint(1, 100)
#        if random_number == number:
#            print("\n!!!!!!! BRAVO !!!!!!!!!!! (You are success )tu as trouvé le nombre\n")
#        else:
#            print("\n---- DESOLE ---- (You are loss )tu as raté le nombre : \n", random_number)
            
# game(200)



# # Exercice 5 : 
# def make_shirt(size="XL", text="I love Python"):
#     print(f"the size of the shirt is {size} and the text is: '{text}'")


# make_shirt("XXXL", "Hello World")
# make_shirt(size="M", text="Artemis Fowl")
# make_shirt()

# Exercice 6 : Magiciens…
magician_names = ['houdini', 'david blane', 'criss angel']

def show_magicians(magicians):
    for name in magicians:
        print(name)

def make_great(magicians):
    ''' creates new array with all the names preceded by "the great" and returns it '''
    return ["The Great " + name for name in magicians]
    
    # return magicians_made_great

magician_names = make_great(magician_names)
show_magicians(magician_names)


# # Exercice 7 : Quand Vai rentres-Je Prendre Ma Retraite ?
# def get_age(year, month, day):
#     age = 2020 - year
#     if month < 7 or month == 7 and day < 8:
#         age += 1
#     return age


# def can_retire(gender, date_of_birth):
#     year, month, day = date_of_birth
#     age = get_age(int(year), int(month), int(day))
#     if age > 66 or age > 61 and gender == "f":
#         return True
#     return False


# birth = tuple(input("Enter birth-date YYYY/MM/DD: ").split("/"))
# gen = input("Enter if f or m: ")
# if can_retire(gen, birth):
#     print("Welcome to retirement!")
# else:
#     print("Go back to work")





































