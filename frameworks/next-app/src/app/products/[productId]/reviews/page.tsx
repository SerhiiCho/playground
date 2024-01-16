type Props = {
    params: {
        productId: string
    },
}

export default function Reviews({ params }: Props) {
    return <>
        <h1 className="text-xl">Reviews page for {params.productId}</h1>

        <ul>
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
        </ul>
    </>
}