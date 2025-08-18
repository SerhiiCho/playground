def efun(num: int) -> int:
    if num == 0:
        print('done')
        return 1
    else:
        print(num)
        return num * efun(num - 2)


efun(8)
