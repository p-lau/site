import NextHead from 'next/head'
export default function Head({title, description, keywords, url = "", language}) {
	return (
		<NextHead>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<meta name="theme-color" content="#118b92"/>

			<title>{`${title} | plau`}</title>
			<meta name="description" content={description}/>
			<meta name="keywords" content={keywords}/>
			<meta name="author" content="..."/>

			<meta property="og:site_name" content="..."/>
			<meta property="og:title" content={title}/>
			<meta property="og:url" content={`...${language}/${url}`}/>
			<meta property="og:image"/>
			<meta property="og:description" content={description}/>
			<meta property="og:type" content="website"/>

			<meta name="twitter:title" content={title}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:image"/>
			<meta name="twitter:card" content="summary_large_image"/>

			<link rel="alternate" href={`${url}`} hrefLang="nl"/>
			<link rel="alternate" href={`${url}`} hrefLang="en"/>
			<link rel="alternate" href={`${url}`} hrefLang="fr"/>

			<link rel="icon" type="image/png" sizes="16x16"/>
			<link rel="icon" type="image/png" sizes="32x32"/>
			<link rel="apple-touch-icon"/>
			<link rel="apple-touch-icon" sizes="180x180"/>
			<link rel="mask-icon" color="#d04819"/>
			<link rel="shortcut icon"/>
			<meta name="theme-color" content="#118b92"/>
		</NextHead>
	)
}

