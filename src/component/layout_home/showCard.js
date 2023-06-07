import React, { Component } from 'react';

function ShowCard (props) {
    const { name, price, image} = props;
        return (
                <div className="col-sm-3">
                <div className="single-item">
                  <div className="single-item-header">
                    <a href="product.html"><img src={image} alt /></a>
                  </div>
                  <div className="single-item-body">
                    <p className="single-item-title">{name}</p>
                    <p className="single-item-price">
                      <span>{price}</span>
                    </p>
                  </div>
                  <div className="single-item-caption">
                    <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart" /></a>
                    <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right" /></a>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
        );
    }

export default ShowCard;