import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {Router} from '@angular/router';
// @ts-ignore
import {ServiceProductService} from '../Service/service-product.service';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  data: Product[];
  new: Product;
  // tslint:disable-next-line:variable-name
  private service: ServiceProductService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServiceProductService, private router: Router) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(): void {
    this.service.getListProduct().subscribe(data => {
      this.data = data;
    });

  }
  deleteproduct(id): void {
    this._service.deleteProduct(id).subscribe(value => { this.getproduct(); }, error => { console.log(error); });
  }
  getid(id): void {
    this.router.navigate(['/Edit', id]);
  }
  detail(id): void {
    this.router.navigate(['/Detail', id]);
  }
  add(): void {
    this.router.navigate(['/Add']);
  }

}
