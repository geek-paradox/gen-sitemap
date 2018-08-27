import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from "./home"
// import Loadable from 'react-loadable'

// const LoadingPage = ({isLoading, error}) => {
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }
//     else if (error) {
//       return <div>Sorry, there was a problem loading the page.</div>;
//     }
//     else {
//       return null;
//     }
// };
// const NotFound = Loadable({
// 	loader: () => import('./404.js'),
// 	loading: LoadingPage,
// 	delay: 0
// });
// const Home = Loadable({
// 	loader: () => import('./home'),
// 	loading: LoadingPage,
// 	delay: 0
// })

export default class App extends React.Component{
	componentDidUpdate(){
		window.scrollTo(0, 0)
	}
	render(){
		return(
			<div>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='*' component={Home}/>
				</Switch>
			</div>
		); 
	}
}