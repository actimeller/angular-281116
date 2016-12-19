/**
 * Created by igornepipenko on 12/19/16.
 */
module.exports = {
    entry: './earth-quake/main',
    output:{
        filename: './earth-quake/bundle.js'
    },
    module:{
        loader: [
            {test:/\.ts?$/,loader:'ts-loader'}
        ]
    }
}