import React from 'react';
import Header from './conponent/header';
import Product from './conponent/product';

class App extends React.Component {
  render() {
    return (
    	<div>
    		<Header />
    		<div className="row">
    			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    				<Product />
    			</div>
    			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    				<Product />
    			</div>
    		</div>
    	</div>
    );
  }
}

export default App;
