import { Component } from 'react';
import DetallesNew from './DetallesNew';

const styles = {
    new: {
        backgroundColor: '#808080',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    }
}


class NewProduct extends Component {
    render() {
        const {mostrarProducto ,esProductoVisible, newProduct } = this.props
        console.log(esProductoVisible);
        return (
            <div>
                <button style={styles.new} onClick={mostrarProducto}>New Product</button>
                {esProductoVisible ? <DetallesNew newProduct={newProduct}/> : null }
            </div>
        )
    }
}

export default NewProduct