# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }
# del sample_dict['class']['student']['marks']['history']

# print('\n', sample_dict['class']['student']['marks'], '\n')
# print('\n', sample_dict['class'], '\n')

# my_dog = {
#   'name': 'Rufus',
#   'age': 4,
#   'height': 1.60
# }

# dogs = {
#     'Rufus':  {
#   'name': 'Rufus',
#   'age': 4,
#   'height': 1.60
# },
#     'Rex': {
#   'name': 'Rex',
#   'age': 5,
#   'height': 0.95
# }
# }

# #mylist = ["first_element", 5, True, 10.6, {'name': 'Rufus'}]


# print(my_dog['height'])

# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
# print(rick_dict['first_name'], rick_dict['last_name'])

# facebook_users_infos = {
#     'name': "Ted",
#     'email': "tdark237@gmail.com",
# }

# your_dict = {
#     'first_dict': {
#     'name':'Rick',
#     'another_name':'Sanchez'
#     },
#     'second_dict': {
#     'name':'TEd',
#     'another_name':'Patricia'
#     },
# }

# your_dict['second_dict']

# print(your_dict['second_dict']['another_name'])

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80,
#          }
#       }
#    }
# }

# sample_dict["class"]["student"]["marks"]["history"] = 120

# sample_dict["class"]["student"]["marks"]["chemistry"] = 90

# del sample_dict["class"]["student"]["marks"]["physics"]

# print(sample_dict)

# shirts = [
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'S',
#     'price': 20
#   },
#   {
#     'name': 'Awesome T-shirt 2000',
#     'size': 'M',
#     'price': 25
#   },
#   {
#     'name': 'Awesome T-shirt 0',
#     'size': 'L',
#     'price': 30
#   },
# ]

# for shirt in shirts:
#   print(shirt['name'])


# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
# print(rick_dict.values())

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}
print(sample_dict)

del sample_dict["name"]
print(sample_dict)
del sample_dict["salary"]

print(sample_dict)