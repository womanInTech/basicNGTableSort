import { Component, OnInit} from '@angular/core';
import { MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData : any;
  tableDataMin: any;
  allCols: any;
  dataLoaded: boolean = false;
  allDisplayedColumns: string[] = [];
  minDisplayedColumns: string[] = [];
  allTableData: MatTableDataSource<any>;
  minTableData: MatTableDataSource<any>;
  showMinTable:boolean = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

/*
  @Input() meshIri: string;
  @Input() ontologyData: any;
  @ViewChild(MatSort) set content(sort: MatSort) {
    if(sort){
      if(!this.showMinTable){this.allTableData.sort = sort;}
      else{this.minTableData.sort = sort}
    }
  }
  */

  constructor() { }
  //constructor(private searchService: SearchService) { }

  ngOnInit() {
  //  this.dataLoaded = false;

/*
    this.searchService.getTables(this.meshIri)
    .subscribe(
        data => {
          let source = this.meshIri.split("%3A").pop();
          this.dataLoaded = true;
          let tableDataFull = data["concepts"];

          this.tableData = tableDataFull.map((obj)=>{
            //remove id and description from table
              if(obj.id)
                delete obj.id;
              if(obj["Term Description"])
                delete obj["Term Description"]
            //add source to table
              obj.Source = source;
              return obj;
          });

          this.tableDataMin = this.tableData.map(obj=>({"Pref Label":obj["Pref Label"], Source:obj.Source}));
          this.minDisplayedColumns = ["Pref Label", "Source"];



          //get unique keys in order to get table headers
          this.allCols =Array.from(new Set([].concat.apply([], this.tableData.map(obj=> Object.keys(obj)))));


          this.allDisplayedColumns = this.allCols;


        //  this.cols.sort(this.sortNum);
        //  this.allCols.sort(this.sortNum);
          this.allTableData = new MatTableDataSource(this.tableData);
          this.minTableData = new MatTableDataSource(this.tableDataMin);
          this.dataLoaded = true;
        },
        error => {
          console.log("error in loading data")
        }
    );
    */



  }





}
