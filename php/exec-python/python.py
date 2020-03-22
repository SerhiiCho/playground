class Printer:
    def __init__(self, times):
        self.times = times

    def run(self):
        for i in range(0, 1000000):
            print(i + self.times)

printer = Printer(100)
printer.run()
