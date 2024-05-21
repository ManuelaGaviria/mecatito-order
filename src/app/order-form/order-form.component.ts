import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

interface Order {
  id: string;
  phone: string;
  product1: string;
  product2: string;
  product3: string;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  order: Order = {
    id: '',
    phone: '',
    product1: '',
    product2: '',
    product3: ''
  };

  onSubmit() {
    const doc = new jsPDF();
    doc.text('MECATICO COMPANY', 10, 10);
    doc.text('Orden de Compra', 10, 20);
    doc.text(`Cédula/NIT: ${this.order.id}`, 10, 30);
    doc.text(`Teléfono: ${this.order.phone}`, 10, 40);
    doc.text(`Producto 1: ${this.order.product1}`, 10, 50);
    doc.text(`Producto 2: ${this.order.product2}`, 10, 60);
    doc.text(`Producto 3: ${this.order.product3}`, 10, 70);
    doc.save('orden_de_compra.pdf');
  }
}
