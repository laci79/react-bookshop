import React from 'react';

class Order extends React.Component {

    renderOrder = (key) => {
        const book = this.props.books[key];
        const count = this.props.order[key];

        return (
            <li className="order-items" key={key}>
                <span className="ordered-books">{book.name}</span>
                <span className="order-price">{new Intl.NumberFormat().format(count * book.price)} Ft  </span>
                <span className="increase-decrease-order">
                    <button className="decrease-order" onClick={() => this.props.decrease(key)}> - </button>
                    <span> {count} db</span>
                    <button className="increase-order" onClick={() => this.props.increase(key)}> + </button>
                </span>
                <button className="delete-order" onClick={() => this.props.removeFromOrder(key)}>&times;</button>
            </li>
        );
    };


    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const book = this.props.books[key];
            const count = this.props.order[key];
            return prevTotal + (count * book.price);
        }, 0);

        const totalCount = orderIds.reduce((prevTotal, key) => {
            const count = this.props.order[key];
            return prevTotal + (count);
        }, 0);

        return (

            <div className={this.props.visible}>
                <div className={this.props.orderVisible ? "order-wrap closed" : "order-wrap"}>
                    <h2>Kosár</h2>
                    <ul className="order-list">
                        {orderIds.map(this.renderOrder)}
                    </ul>

                    <div className="total">
                        Összesen:  <strong>{new Intl.NumberFormat().format(total)}</strong>  Ft
                        <span className="total-count">{totalCount} db</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Order;