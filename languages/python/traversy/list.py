numbers = [1, 2, 3, 4, 5]
numbers2 = list((1, 2, 3, 4, 5))
fruits = ['Apples', 'Oranges', 'Grapes', 'Pears']

print(fruits[1])
print(len(fruits))

fruits.append('Mangos')
print(fruits)

fruits.remove('Grapes')
print(fruits)

# Insert into position
fruits.insert(2, 'Strawberries')
print(fruits)

# Remove by a position
fruits.pop(2)
print(fruits)

# Revers the order of array items
fruits.reverse()
print(fruits)

fruits.sort()
fruits.sort(reverse=True)
print(fruits)

cars = ['Toyota', 'BMW', 'Opel', 'Mersedes']
cars.insert(0, 'Hello')

def get_result(cars):
    if len(cars) == 4:
        print('There are four cars')
        return

    print(f'There are {len(cars)} cars')

get_result(cars)
