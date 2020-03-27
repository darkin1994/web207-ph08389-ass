import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ServiceProductService} from '../Service/service-product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  add: Product = new Product();
  private service: ServiceProductService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServiceProductService) {
    this.service = _service;
  }

  ngOnInit(): void {
  }
  Insert(product: Product) {
    this._service.insertProduct(product).subscribe(value => { console.log('Sucsses'); } );
  }
}
