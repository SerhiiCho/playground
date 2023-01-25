class Animal:
    def __init__(self, name):
        self.name = name

    def get_sound(self):
        return f'yaf yaf yaf, my name is {self.name}'

    def get_info(self):
        return [
            f'Then name of the dog is: {self.name}',
            'Something else is here'
        ]
