import Head from 'next/head'

export default function Meta(
	{
		title = "plau.dev",
		description = "Panha's website",
		keywords = "website,blog",
		url = "https://plau.dev/",
		imageRef = ""
	}){
	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<meta name="theme-color" content="#112233"/>

			<title>{title ? `${title} | plau` : `plau.dev`}</title>
			<meta name="description" content={description}/>
			<meta name="keywords" content={keywords}/>
			<meta name="author" content="Panhavuth Lau"/>

			<meta property="og:site_name" content="plau.dev"/>
			<meta property="og:title" content={title}/>
			<meta property="og:url" content={url}/>
			<meta property="og:image" content={imageRef}/>
			<meta property="og:description" content={description}/>
			<meta property="og:type" content="website"/>

			<meta name="twitter:title" content={title}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:image"/>
			<meta name="twitter:card" content="summary_large_image"/>

			<link rel="icon" type="image/png" sizes="16x16" href={`/assets/favicon-16x16.png`}/>
			<link rel="icon" type="image/png" sizes="32x32" href={`/assets/favicon-32x32.png`}/>
			<link rel="apple-touch-icon" href={`/assets/apple-touch-icon.png`}/>
			<link rel="apple-touch-icon" sizes="180x180" href={`/assets/apple-touch-icon.png`}/>
			<link rel="mask-icon" color="#223344"/>
			<link rel="manifest" href={`/site.webmanifest`}/>
			<meta name="theme-color" content="#112233"/>
		</Head>
	)
}

