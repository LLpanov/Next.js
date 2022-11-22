import type { AppProps } from 'next/app'
import {Provider} from "react-redux";

import '../styles/globals.css'
import {store} from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <div className='py-7 px-5'>
                <Component {...pageProps} />
            </div>
            </Provider>
            )

}

export default MyApp
