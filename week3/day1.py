# class Car():
#     def __init__(self, name, price):
#         self.name = name
#         self.price = price
        
    
#     def rename_Car(self, new_name):
#         self.name = new_name

    
#     def presentation_car(self):
#         print(f'\n My name is {self.name} and my price is ${self.price} \n')
        
#     def print_my_name(self):
#         print(f'\n My name is {self.name} \n')
        
#     def print_my_price(self):
#         print(f'\n My price is ${self.price} \n')
         
#     def remise_price(self, percentage):
#         self.price = (self.price - (self.price * percentage)/100)
#         return self.price
    
    
        
# my_first_car = Car("Toyota", 2000)
# my_second_car = Car("Mercedes", 15000)
# my_third_car = Car("BMW", 7000)

# # my_first_car.rename_Car("Ranger Rover")


# my_second_car.print_my_price()
# my_second_car.remise_price(50)
# my_second_car.print_my_price()




import datetime
class BankAccount:

    def __init__(self, account_number, balance=0.0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("\nView Balance\n")
        print(f"\nBalance for account {self.account_number} is {self.balance}")

    def deposit(self, amount:float):
        if amount <= 0:
            print("\nInvalid amount\n")
        elif amount < 100:
            print("\nMinimum deposit is 100\n")
        else:
            self.balance += amount
            self.transactions.append(f"\nDeposit: {amount} day: {datetime.date.today()} hour : {datetime.datetime.now()}\n")
            print("\nDeposit Succcessful\n")

    def withdraw(self, amount:float):
        if amount > self.balance:
            print("\nInsufficient Funds\n")
        else:
            self.balance -= amount
            self.transactions.append(f"\nWithdraw: {amount} day: {datetime.date.today()} hour : {datetime.datetime.now()}\n")
            print("\nWithdraw Approved\n")
            return amount

    def view_transactions(self):
        print("\nTransactions:\n")
        print("-------------\n")
        for transaction in self.transactions:
            print(transaction)


my_account = BankAccount(12345,1000)

my_account.deposit(60000)
my_account.view_balance()
my_account.withdraw(30000)
my_account.view_balance()
my_account.view_transactions()
