import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {Router} from '@angular/router';
// @ts-ignore
import {ServiceProductService} from '../Service/service-product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edit: Product;
  private service: ServiceProductService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServiceProductService, private activatedRoute: ActivatedRoute) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this._service.getbyID(id).subscribe(data => {
        this.edit = data;
      });
    });
  }
  Update(product: Product) {
    this._service.updateProduct(product).subscribe(value =>{
      console.log(value);
    });
  }

}
