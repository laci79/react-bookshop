import React from 'react';

class Book extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        return (
            <li className="menu-book">
                <img src={this.props.details.image} alt={this.props.details.name} className="book-img" />
                <h3 className="book-name">{this.props.details.name}
                    <span className="price">{this.props.details.price} Ft</span>
                </h3>
                <p className="details">{this.props.details.desc}</p>
                <button className="to-basket" onClick={this.handleClick}>Kosárba</button>
            </li>
        );
    }
}
export default Book;