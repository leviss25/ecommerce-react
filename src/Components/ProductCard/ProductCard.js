import React from "react";
import "./ProductCard.css";

const ProductCard = ({ src }) => {
	return (
		<div className="product-item">
			<div className="product-card">
				<img src="images/icons/heart.png" alt="" className="product-card-icon" />
				<img src="images/icons/eye2.png" alt="" className="bag-add-outline" />
				<img src={src} alt="" className="product-card-img" />
			</div>
			<div className="count-item">
				<a className="remove-p"><span>-</span></a>
				<a className="count-p"><span>0</span></a>
				<a className="add-p"><span>+</span></a>
			</div>
			<div className="add-item">
				<span>Add to cart</span>
			</div>
		</div>
	);
};

export default ProductCard;