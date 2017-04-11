import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicTablesService } from './dynamic-tables.service';

@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.scss'],
  providers: [ DynamicTablesService ]
})
export class DynamicTablesComponent {
    public data: any;
    public searchText:string;
    constructor(private _dynamicTablesService:DynamicTablesService){
        this.data = _dynamicTablesService.getAll();
    } 
}

