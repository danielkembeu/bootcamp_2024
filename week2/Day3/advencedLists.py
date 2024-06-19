# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }

# print(my_books.items())

# for x, y in my_books.items():
#     print("the " + x + " is " + y)
    

# for item in enumerate(['a','b','c']):
#     print(item)

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# zipped_values = zip(keys, values)
# print(zipped_values)

# result = dict(zipped_values)
# print(result)

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
nbPersonne = int(input("\nNumber of persons :\n "))
for i in range(nbPersonne):
    nom = input(f"\nEntre le nom du numero {i+1} :\n ")
    age = int(input(f"\nEntre l'age de {nom} :\n "))
    family[nom] = age

print(family)

SumTotal = 0
for item in family.items():
    if item[1] < 3:
        print(" Le billet est gratuit pour " + item[0])
    if 3 <= item[1] <=12 :
        print(" Le billet Coute 10$ pour " + item[0])
        SumTotal += 10
    if 12 < item[1]:        
        print(" Le billet Coute 15$ pour " + item[0])
        SumTotal += 15

print("\n Le total des billets est de " + str(SumTotal) + "$")
    
        

