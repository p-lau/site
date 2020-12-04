import {AppProps} from 'next/app'
import '../public/normalize.css'
import Menu from "../components/menu/"
import Content from "../components/content"
import appStyle from './app.module.css'

export default function App({ Component, pageProps }: AppProps){

	return(
		<div className={appStyle.display}>
			<Menu/>
			<div className={appStyle.main}>
				<Content>
					<Component {...pageProps} />
				</Content>
			</div>
		</div>
	)
}
