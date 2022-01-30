import { Component } from "react";
import Producto from './Producto';

const styles = {
    productos: {
        display: 'flex', // para poder manipular la direccion del contenido
        flexDirection: 'row', // para que se vean de forma horizontal
        justifyContent: 'space-between', // para que los productos se separen entre ellos de forma equitativa
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div style={styles.productos}>
            {productos.map(pra => 
                <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={pra.name}
                    producto={pra}
                />)}
            </div>
        )
    }
}

export default Productos