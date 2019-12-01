import React from 'react';


class Header extends React.Component {
  render() {
    return (
    	<nav className="navbar navbar-inverse">
    		<div className="container-fluid">
    			<a className="navbar-brand" href="#asd">Component bai:2</a>
    			<ul className="nav navbar-nav">
    				<li >
    					<a href="#das">Trang chu</a>
    				</li>
    				<li className="active">
    					<a href="#asd">Danh muc san pham</a>
    				</li>
    			</ul>
    		</div>
    	</nav>
    );
  }
}

export default Header;
