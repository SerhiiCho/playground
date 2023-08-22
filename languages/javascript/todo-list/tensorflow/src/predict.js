import * as tf from '@tensorflow/tfjs'
import { getArticles } from './articles'

export async function predict(tags) {
    const model = tf.sequential()

    model.add(tf.layers.dense({ units: 1, inputShape: [1] }))

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' })

    const xs = tf.tensor1d([1, 2, 3, 10, 41, 83, 4, -2, -23, 51, 324])
    const ys = tf.tensor1d([2, 3, 4, 11, 42, 84, 5, -1, -22, 52, 325])


    // Train the model using the data.
    await model.fit(xs, ys)

    // Use the model to do inference on a data point the model hasn't seen.
    return model.predict(tf.tensor1d([2])).dataSync()
}