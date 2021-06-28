import React from 'react';
import Header from './Header';
import sampleBooks from '../sample-books';
import Book from './Book';
import base from '../base';
import Order from './Order';

class App extends React.Component {

    state = {
        books: {},
        order: {},
        orderVisible: false
    };

    componentDidMount() {
        this.setState({ books: sampleBooks });          // load data on page load
        this.ref = base.syncState('order', {
            context: this,
            state: 'order'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    showOrder = () => {
        this.setState({ orderVisible: !this.state.orderVisible });
    }

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order: order });
        this.setState({ orderVisible: true });
    }

    decreaseOrder = (key) => {
        const order = { ...this.state.order };
        if (order[key] > 0) {
            order[key] = order[key] - 1 || 0;
        }
        this.setState({ order: order });
        if (order[key] === 0) {
            this.removeFromOrder(key);
        }
    }

    removeFromOrder = key => {
        this.setState({
            order: { [key]: null }
        });
    }

    increase = (key) => {
        this.addToOrder(key);
    }

    decrease = (key) => {
        this.decreaseOrder(key);
    }

    render() {
        return (
            <div className="App">
                <Header showOrder={this.showOrder} />

                <div className="book-store">
                    <ul className="books">
                        {Object.keys(this.state.books).map(key =>
                            <Book key={key} index={key} details={this.state.books[key]} addToOrder={this.addToOrder} order={this.state.order} />
                        )}
                    </ul>

                    <Order books={this.state.books} order={this.state.order} removeFromOrder={this.removeFromOrder} decrease={this.decrease} addToOrder={this.addToOrder} increase={this.increase}  orderVisible={this.state.orderVisible} />
                </div>

            </div>
        );
    }
}

export default App;