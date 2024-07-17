import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { PickComponent } from './../pick/pick.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [DialogModule, ButtonModule, PickComponent,TabViewModule,CommonModule],
templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})
export class MainpageComponent implements OnInit, AfterViewInit {
  title = 'colorpicker';
  tabs: { title: string, content: string,id:number }[] = [];
  visible: boolean = false;
  @ViewChild('tab') tab: ElementRef;  
  tabledata: any = [];
  table: any
  @ViewChild('exampletables') exampletables: ElementRef | undefined;

  showDialog() {
    this.visible = true;
  }
  addTabs() {
    console.log(this.tab);
    
    const newIndex = this.tabs.length + 1;
    this.tabs.push({ title: `Tab ${newIndex}`, content: `Content of Tab ${newIndex}`,id:newIndex });
  }
  ngOnInit() {
    window.addEventListener('keydown', this.handleKeydown);
    this.tabs = [
        { title: 'All pages', content: 'Content',id:0 },
        { title: 'Another Page', content: 'Tab 2 Content',id:1 },
        
    ];

    this.tabledata =[
      {name:"Oli Bob", location:"United Kingdom", gender:"male", col:"red", dob:"14/04/1984", _children:[
          {name:"Mary May", location:"Germany", gender:"female", col:"blue", dob:"14/05/1982"},
          {name:"Christine Lobowski", location:"France", gender:"female", col:"green", dob:"22/05/1982"},
          {name:"Brendon Philips", location:"USA", gender:"male", col:"orange", dob:"01/08/1980", _children:[
              {name:"Margret Marmajuke", location:"Canada", gender:"female", col:"yellow", dob:"31/01/1999"},
              {name:"Frank Harbours", location:"Russia", gender:"male", col:"red", dob:"12/05/1966",_children:[
                {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
                {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
                {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
                {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
              ]},
          ]},
      ]},
      {name:"Jamie Newhart", location:"India", gender:"male", col:"green", dob:"14/05/1985"},
      {name:"Gemma Jane", location:"China", gender:"female", col:"red", dob:"22/05/1982", _children:[
          {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
      ]},
      {name:"James Newman", location:"Japan", gender:"male", col:"red", dob:"22/03/1998"},
  ];

   

}

ngAfterViewInit(): void {

  var table = new Tabulator("#example-table", {    
    data:this.tabledata,
    // resizableColumnFit:true,
    dataTree:true,
    dataTreeStartExpanded:true,
    dataTreeBranchElement:`<div style='display:inline-flex;padding-left:-50px;margin-left:-20px; float:left; background-color:red; width:6px; height:20px'></div>`,
    // dataTreeElementColumn:`<div style='display:inline-flex;padding-left:-50px;margin-left:-20px; float:left; background-color:yellow; width:6px; height:20px'></div>`,
    columns:[
    {title:"Name", field:"name", width:200, responsive:0, formatter:function(cell, formatterParams){
      var value = cell.getValue();      
      console.log(cell.getColumn().getCells());
      return value
      //  if(cell.getData()['_children']){
      //      return `
      //      <span style='display:flex'>
      //      <div style='background-color:red; width:8px; height:15px'>
      //      </div> &nbsp;
      //      ${value} 
      //      </span>`;
      //  }else{
      //      return value;
      //  }
   }}, //never hide this column
    {title:"Location", field:"location", width:150},
    {title:"Gender", field:"gender", width:150, responsive:2}, 
    {title:"Favourite Color", field:"col", width:150},
    {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150},
    ],
});



}

handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Tab' && event.shiftKey) {
    // Your code here
    console.log('Shift + Tab keys pressed');
    // Prevent the default action if needed
    event.preventDefault();
  } else if (event.key === 'Tab') {
    // Your code for Tab key without Shift
    console.log('Tab key pressed');
    // Prevent the default action if needed
    event.preventDefault();
  }
}

  







}
