import React from 'react'
import App from '../components/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { storeApp_ } from '../redux/main'

let store = storeApp_;

 export default () => (
	<Provider store={store}>
		<div>
			<Head>
		    	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz" rel="stylesheet" />
				<link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/5.0.0/normalize.css" />
				<link rel="stylesheet" type="text/css" href="/static/css/style.css" />
		    </Head>
			<App store={store}/>
		</div>
	</Provider>
)         