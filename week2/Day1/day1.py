
# print("Addition ", 5 + 10)
# print("Soustraction ", 20 - 5)
# print("Product ", 15 * 2)
# print("Division ", 30 / 3)
# print("Modulo ", 30 % 7) 

# x = 10
# print(type(x))

# y = 10.8
# print(type(y))

# z = False
# print(type(z))

# a = "Yo bro"
# print(type(a))

# print("hello bro, how are you ? \n ergrgergerg ergregergregerg ")
# print("hello bro, how are you ?".capitalize())
# print("hello bro, how are you ?".upper())
#  print("HELLO BRO, HOW ARE YOU ?".lower())

# my_age = 15
# print(my_age, type(my_age))

# my_age_converted_to_string = str(my_age)
# print(my_age_converted_to_string, type(my_age_converted_to_string))

# print("ma" + "ma")
# print("ma" * 2)
# print("ma" + 2)
# print("ma" +" "  +  "ma")

# x = 10
# y = 10

# print(True and False)

# tr = "fsdfsdfsdfsddfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdf\
#     fdfhdfhdfhdfhdfhdfhdfhfdhfdhfdhfdhfdh fhdfdf"

# number = input("Please enter a number : \n")

# my_name = "Kevin"
# my_age =  50

# print("\nMon nom c'est "+ my_name +" et j'ai " , my_age , " ans" )
# print(f"\nMon nom c'est {my_name}  et j'ai  {my_age}  ans" )

# number = int(input('Multiply me by three: '))
# result = number * 3
# print(result)

# a = 33
# b = 200

# if a > b:
#     print("a es plus petit que b")
# else:
#     print("a es plus grand que b")

# note = int(input("\nEntre ta moyenne : "))

# if note < 8 :
#     print("\nTu es trop faible !!!")
# elif note >= 8 and note < 12:
#     print("\nTu es faible !!!")
# elif note >= 12 and note < 15:
#     print("\nTu es Moyen !!!")
# elif 15 <= note <= 20:
#     print("\nTu es Excellent !!!")
# else:
#     print("\n Entre une valeur valide")
    
    
# if  note != 10 and note == 20:
#     print("=========== 1 ==========")
# else:
#     print("=========== 2 ==========")

# The last exercise of day1


nb = int(input("\n Entrer un nombre compris entre 1 et 100 \n"))
if nb < 1 or nb > 100:
    print("\n LE nombre n'est pas entre 1 et 100 \n")
else:
    if nb % 3 == 0 and nb % 5 == 0:
        print("\nFizzBuzz \n")
    elif nb % 3 == 0:
        print("\nFizz \n")
    elif nb % 5 == 0:
        print("\nBuzz \n")
    else:
        print("\nCe nombre n'est multiple ni de 5 ni de 3 \n")