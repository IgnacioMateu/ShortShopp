import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';


class App extends Component {
  state = {
    productos: [
      { name: 'tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    filas: 0,
    carro: [],
    esCarroVisible: false,
    newProduct: [],
    esProductoVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name == producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({
        carro: newCarro
      })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  mostrarProducto = () => {
    this.setState({ esProductoVisible: !this.state.esProductoVisible })
  }

  agregarProducto = (nombre, precio) => {
    let arrEjemplo = {name: nombre, price: precio, img: '/productos/agregar.jpg'}
    let arrTrue = this.state.productos.push(arrEjemplo)
    this.setState({productos: this.state.productos})
  }

  

  agregarDiv = (num) => {
    num = num - 1
    let divs = [];
    let productos = this.state.productos
    let f = 0
    let m = 3
    // let productos = f.slice(f.length-3);
    for(let i = 0; i < num; i++) {
      f = f + 3
      m = m + 3
      divs[i] = <Productos agregarAlCarro={this.agregarAlCarro} productos={productos.slice(f,m)}/>
    }
    console.log(divs);
    console.log(productos);
    console.log('ignacio mateu');
    return divs
  }


  render() {
    // console.log(this.state.productos);
    const { esCarroVisible, esProductoVisible } = this.state

    let i;

    let hol = 0

    this.state.productos.forEach(element => {
        hol++
    });

    hol = hol / 3

    console.log(this.state.productos);  
    
    let firstProductos = this.state.productos.slice(0,3)
    console.log(firstProductos);
    
    return (
      <div>
        <Navbar carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
          newProduct={this.agregarProducto}
          esProductoVisible={esProductoVisible}
          mostrarProducto={this.mostrarProducto}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={firstProductos}
          />
          {
            hol > 1 ? 
            hol % 1 === 0 ?
            this.agregarDiv(hol)  : null : null
          }
          
        </Layout>
      </div>
    )
  }
}

export default App
