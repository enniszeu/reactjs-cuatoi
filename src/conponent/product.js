
import React from 'react';


class Product extends React.Component{
	render() {
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div className="thumbnail">
					<img alt="img" src="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png" />
					<div className="caption">
						<h3>Iphone 6 plue</h3>
						<p>
							16000000
						</p>
						<p>
							<a href="#dasd" className="btn btn-primary">Mua hang</a>
							<a href="#dasd" className="btn btn-default">Action</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;