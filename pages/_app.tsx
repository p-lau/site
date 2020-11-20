import {AppProps} from 'next/app'
import './normalize.css'
import "tailwindcss/tailwind.css"
import Menu from "../components/menu/"

export default function App({ Component, pageProps }: AppProps){
	return(
		<div className={'w-screen h-screen grid grid-rows-app-layout'}>
			<main>
				<Component {...pageProps} />
			</main>
			<Menu/>
		</div>
	)
}
