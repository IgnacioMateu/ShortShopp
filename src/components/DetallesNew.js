import { Component } from 'react';
import App from '../App';

class DetallesNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bg: '#C1C1C1',
        }
    }

    render() {

        const { newProduct } = this.props

        let styles = {
            detallesCarro: {
                backgroundColor: '#fff',
                position: 'absolute',
                boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
                borderRadius: '5px',
                width: '300px',
                right: 450
            },
            ul: {
                margin: 0,
                padding: 0,
            },
            producto: {
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '25px 20px',
                borderBottom: 'solid 1px #aaa'
            },
            lastOne: {
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '25px 20px'
            },
            submit: {
                border: 'none',
                borderRadius: '10px',
                display: 'table-cell',
                marginTop: '10px',
                padding: '0',
                margin: '0 auto',
                verticalAlign: 'middle',
                height: '35px',
                width: '100%',
                alignContent: 'center',
                cursor: 'pointer',
                backgroundColor: `${this.state.bg}`
            },
        }

        const agregarProducto = (arr) => {
            arr.push()
        }

        const crearProducto = (nombre, precio) => {
            const arr = [
                {name: nombre, price: precio, img: null},
            ]
        }

        const cambiar = (color) => {
            this.setState({
                bg: color
            })
        }

        console.log(App.state);

        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    <li style={styles.producto}>
                        <label>Nombre del producto</label>
                        <input type={'text'} id={'name'}></input>
                    </li>
                    <li style={styles.lastOne}>
                        <label>Precio del producto</label>
                        <input type={'text'} id={'price'}></input>
                    </li>
                    <button onClick={() => newProduct(document.getElementById('name').value, document.getElementById('price').value)} style={styles.submit} onMouseEnter={() => cambiar('#AAAAAA')} onMouseLeave={() => cambiar('#C1C1C1')}>Cambiar</button>
                </ul>
            </div>
        )
    }
}

export default DetallesNew