import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {Producto} from '../Interface/Producto.Interface';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    FormsModule
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {

  productos: Producto[] = [
    { id: 1, nombre: 'Producto A', precio: 100,descuento: false},
    { id: 2, nombre: 'Producto B', precio: 200 ,descuento: true},
    { id: 3, nombre: 'Producto C', precio: 300 , descuento: false}
  ];

  nuevoProducto: Producto = { id: 0, nombre: '', precio: 0, descuento: false };

  // Método para agregar un producto
  agregarProducto() {
    const nuevoId = this.productos.length > 0 ? this.productos[this.productos.length - 1].id + 1 : 1;
    const productoAAgregar = { ...this.nuevoProducto, id: nuevoId };
    this.productos.push(productoAAgregar);

    // Limpiar el formulario
    this.nuevoProducto = { id: 0, nombre: '', precio: 0, descuento: false };
  }

  eliminarProducto(id: number)
  {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }



}
