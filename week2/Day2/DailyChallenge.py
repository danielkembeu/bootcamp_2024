# Challeng 1 =============================

# number = int(input("Enter your number"))
# lengh = int(input("Entre la taille de la liste"))

# multiple = number
# My_liste = []
# while len(My_liste) < lengh:
#      My_liste.append(multiple)
#      multiple +=number
     
# print(My_liste)



# Challeng 2 =============================

mot = input('Entrer votre mot \n')
result = '' 
for i in mot :
    if i not in result:
        result = result + i
print(result)