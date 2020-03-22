'''
Doc string is looking like this
'''

# This is also comments

#x = 1 # int
#y = 2.5 # float
#name = 'John' # str
#is_cool = True # bool

# Does the same as above
x, y, name, is_cool = (1, 2.5, 'John', True)

# To check the type
# type(x)

# To convert the type
# str(x) int(x) float(x) bool(x)

name = 'Serhii'
age = 29

print('Hello, my name is ' + name + ' and I am ' + str(age))
# or you can do the same like this
print('Hello, my name is {name} and I am {age}'.format(name=name, age=age))
# Or in python3.6 you can do
print(f'Hello, my name is {name} and I am {age}')
