/**
 * Example of the implementation of the Recommendation Pipeline System (RPS)
 */

type Tag = {
    id: number
    getItems(): Database
}

type Item = {
    id: number
    getLikedItems(): Database
    getTags(): Database
}

interface Filter {
    process(stream: DataStream): DataStream
}

class ExclusionFilter implements Filter {
    public constructor(private readonly excludeIds: number[]) {
    }

    public process(stream: DataStream): DataStream {
        stream.exclude.push(...this.excludeIds)
        return stream
    }
}

class LikedItemsFilter implements Filter {
    public process(stream: DataStream): DataStream {
        const user = getAuthUser()

        if (!user) {
            return stream
        }

        const itemsIds = user.getLikedItems()
            .select(['id'])
            .get()
            .map(item => item.id)

        stream.exclude.push(...itemsIds)

        return stream
    }
}

class ItemTagsFilter implements Filter {
    public constructor(private item: Item) {
    }

    public process(stream: DataStream): DataStream {
        stream.exclude.push(this.item.id)

        const tags: Tag[] = this.item
            .getTags()
            .select(['id'])
            .get()

        for (const tag of tags) {
            const items = this.getTagItems(tag, stream)

            stream.exclude.push(...items.map(item => item.id))
            stream.items.push(...items)

            if (!stream.needsMoreContent()) {
                break
            }
        }

        return stream
    }

    private getTagItems(tag: Tag, stream: DataStream): Item[] {
        return tag.getItems()
            .exclude(stream.exclude)
            .limit(stream.remaining)
            .get()
    }
}

class DataStream {
    public constructor(
        public items: Item[],
        public exclude: number[],
        public remaining: number,
        public readonly limit: number,
    ) {
    }

    public needsMoreContent(): boolean {
        this.remaining = this.limit - this.items.length
        return this.remaining > 0
    }
}

class RecommendationSystem {
    private stream: DataStream

    public constructor(limit: number) {
        this.stream = new DataStream([], [], limit, limit)
    }

    public pipe(filter: Filter): this {
        if (this.stream.needsMoreContent()) {
            this.stream = filter.process(this.stream)
        }

        return this
    }

    public get(): Item[] {
        if (this.stream.needsMoreContent()) {
            const randomItems = this.getRandomItems()
            return this.stream.items.concat(randomItems)
        }

        return this.stream.items.slice(0, this.stream.limit)
    }

    private getRandomItems(): Item[] {
        const result = new Database()
            .getItems()
            .exclude(this.stream.exclude)
            .limit(this.stream.remaining)
            .get()

        const remainingItems = this.stream.remaining - result.length

        if (remainingItems === 0) {
            return result
        }

        const additionalItems = new Database()
            .getItems()
            .exclude(result.map(item => item.id))
            .limit(remainingItems)
            .get()

        result.push(...additionalItems)

        return result
    }
}

class Database {
    public getItems = (): this => this
    public exclude = (ids: number[]): this => this
    public limit = (limit: number): this => this
    public select = (fields: string[]): this => this
    public get = (): Item[] => []
}

const getAuthUser = (): any => null

const recommendations = new RecommendationSystem(6)
    .pipe(new ExclusionFilter([1, 2, 3]))
    .pipe(new LikedItemsFilter())
    .get()
