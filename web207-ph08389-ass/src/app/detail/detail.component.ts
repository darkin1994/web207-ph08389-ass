import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ServiceProductService} from '../Service/service-product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;
  private service: ServiceProductService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServiceProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this._service.getbyID(id).subscribe(data => {
        this.product = data;
      });
    });
  }
}
