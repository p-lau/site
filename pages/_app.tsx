import {AppProps} from 'next/app'
import '../public/normalize.css'
import Menu from "../components/menu/"
import Content from "../components/content"
import appStyle from './app.module.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fas
} from "@fortawesome/free-solid-svg-icons"

library.add(fas)

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
