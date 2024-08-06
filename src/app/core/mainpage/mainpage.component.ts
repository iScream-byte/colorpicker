import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { PickComponent } from './../pick/pick.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { FormsModule } from '@angular/forms';
import { Parser,SUPPORTED_FORMULAS } from 'hot-formula-parser';
@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    PickComponent,
    TabViewModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})
export class MainpageComponent implements OnInit, AfterViewInit {
  title = 'colorpicker';
  tabs: { title: string; content: string; id: string }[] = [];
  visible: boolean = false;
  @ViewChild('tab') tab: ElementRef;
  tabledata: any = [];
  tabledata2: any = [];
  table: any;
  spreadsheet: any;
  result: number = 0;
  formulaBar: string = '';
  formularInputGulo: any = [];
  formulaActivated: boolean = false;
  @ViewChild('exampletables') exampletables: ElementRef | undefined;

  parser: Parser = new Parser();

  childRowFormatter(row) {

    if (!row.getTreeParent())
        return;

    let rowEl = row.getElement();

    console.log(row._row);
    
    
    const redLineDiv = document.createElement('div');
    redLineDiv.style.width = '2px';
    redLineDiv.style.height = '100%';
    redLineDiv.style.marginLeft = '9px';
    redLineDiv.style.backgroundColor = 'red';
    redLineDiv.style.position = 'absolute';
    redLineDiv.style.left = '0';
    redLineDiv.style.top = '0';
    redLineDiv.style.bottom = '0';
    rowEl.style.position = 'relative';
    rowEl.prepend(redLineDiv);

    let parentChildData = row.getTreeParent().getData()._children;

    
    

    
    


}

  showDialog() {
    this.visible = true;
  }

  addTabs() {
    const newIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Tab ${newIndex}`,
      content: `Content of Tab ${newIndex}`,
      id: 'tab' + newIndex,
    });
  }

  ngOnInit() {
    window.addEventListener('keydown', this.handleKeydown);
    this.tabs = [
      { title: 'All pages', content: 'Content', id: 'tab0' },
      { title: 'Another Page', content: 'Tab 2 Content', id: 'tab1' },
    ];

    this.tabledata = [
      {
        name: 'Oli Bob',
        location: 'United Kingdom',
        gender: 'male',
        col: 'red',
        dob: '14/04/1984',
        rent: 500,
        _children: [
          {
            name: 'Mary May',
            location: 'Germany',
            gender: 'female',
            col: 'blue',
            dob: '14/05/1982',
            rent: 300,
          },
          {
            name: 'Christine Lobowski',
            location: 'France',
            gender: 'female',
            col: 'green',
            dob: '22/05/1982',
            rent: 400,
          },
          {
            name: 'Brendon Philips',
            location: 'USA',
            gender: 'male',
            col: 'orange',
            dob: '01/08/1980',
            rent: 700,
            _children: [
              {
                name: 'Margret Marmajuke',
                location: 'Canada',
                gender: 'female',
                col: 'yellow',
                dob: '31/01/1999',
                rent: 200,
              },
              {
                name: 'Frank Harbours',
                location: 'Russia',
                gender: 'male',
                col: 'red',
                dob: '12/05/1966',
                rent: 650,
                _children: [
                  {
                    name: 'pocha das Sykes',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                  {
                    name: 'montu das',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                  {
                    name: 'polta pal',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                  {
                    name: 'sests lops',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                ],
              },
            ],
          },
          {
            name: 'Modon Das',
            location: 'USA',
            gender: 'male',
            col: 'orange',
            dob: '01/08/1980',
            rent: 700,
            _children: [
              {
                name: 'justin de',
                location: 'Canada',
                gender: 'female',
                col: 'yellow',
                dob: '31/01/1999',
                rent: 200,
              },
              {
                name: 'lucas pal',
                location: 'Russia',
                gender: 'male',
                col: 'red',
                dob: '12/05/1966',
                rent: 650,
                _children: [
                  {
                    name: 'fatar kosr',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                  {
                    name: 'gust man',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                  {
                    name: 'lunsgi csahor',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                  {
                    name: 'lost soul',
                    location: 'South Korea',
                    gender: 'female',
                    col: 'maroon',
                    dob: '11/11/1970',
                    rent: 150,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Jamie Newhart',
        location: 'India',
        gender: 'male',
        col: 'green',
        dob: '14/05/1985',
        rent: 550,
      },
      {
        name: 'Gemma Jane',
        location: 'China',
        gender: 'female',
        col: 'red',
        dob: '22/05/1982',
        rent: 450,
        _children: [
          {
            name: 'Emisly lolpsu',
            location: 'South Korea',
            gender: 'female',
            col: 'maroon',
            dob: '11/11/1970',
            rent: 150,
          },
        ],
      },
      {
        name: 'James Newman',
        location: 'Japan',
        gender: 'male',
        col: 'red',
        dob: '22/03/1998',
        rent: 600,
      },
    ];

    this.tabledata2 = [
      {
        title: 'First Sheet',
        key: 'first',
        rows: 10,
        columns: 10,
        data: [
          [10, 20, 10, 1, 2, 4355, 8279, 43332, 5012],
          [5, 1, 20, 1, 5, 3803, 5408, 3415, 3056],
          [4, 5, 30, 2, 7, 9, 18, 5239, 2516],
          [0, 40, 1, 4, 3, 7921, 9219, 6, 3537],
        ],
      },
    ];
  }

  ngAfterViewInit(): void {
    this.table = new Tabulator('#' + this.tabs[0].id, {
      data: this.tabledata,
      // resizableColumnFit: true,
      dataTree: true,
      dataTreeStartExpanded: true,
    //   dataTreeBranchElement: 
    // `<span style='display:inline-flex; 
    // // float:left; 
    // background-color:red; 
    // width:3px; 
    // height:26px;
    // margin-top: -4px; 
    // margin-bottom: -8px; 
    // margin-right: 8px;
    // // padding-left:-50px;
    // margin-left:4px;
    // '>     
    // </span>     
    // `,

    rowFormatter:this.childRowFormatter,

    // dataTreeCollapseElement:"<span>►</span>",
    // dataTreeExpandElement:"<span>▼</span>",

      dataTreeChildIndent: 10,

      dataTreeBranchElement:false,



      selectableRange: 1,
      selectableRangeColumns: true,
      selectableRangeRows: true,
      selectableRangeClearCells: true,
      editTriggerEvent: 'dblclick',

      clipboard: true,
      clipboardCopyStyled: false,
      clipboardCopyConfig: {
        rowHeaders: false,
        columnHeaders: false,
      },
      clipboardCopyRowRange: 'range',
      clipboardPasteParser: 'range',
      clipboardPasteAction: 'range',
      columnDefaults: {
        headerSort: false,
        headerHozAlign: 'center',
        editor: 'input',
        resizable: 'header',
        width: 100,
      },

      columns: [
        {
          title: 'Name',
          field: 'name',
          width: 200,
          responsive: 0,
          formatter: function (cell, formatterParams) {
            var value = cell.getValue();
            return value;
          },
        },
        { title: 'Location', field: 'location', width: 150 },
        { title: 'Gender', field: 'gender', width: 150, responsive: 2 },
        { title: 'Favourite Color', field: 'col', width: 150 },
        {
          title: 'Date Of Birth',
          field: 'dob',
          hozAlign: 'center',
          sorter: 'date',
          width: 150,
        },
        {
          title: 'Rent',
          field: 'rent',
          hozAlign: 'center',
          width: 150,
          cellClick: this.onCellClick.bind(this),
        },
      ],
    });

    this.spreadsheet = new Tabulator('#' + this.tabs[1].id, {
      spreadsheet: true,
      spreadsheetRows: 50,
      spreadsheetColumns: 50,
      spreadsheetColumnDefinition: { editor: 'input', resizable: 'header' },
      spreadsheetSheets: this.tabledata2,
      // spreadsheetSheetTabs:true,

      rowHeader: {
        field: '_id',
        hozAlign: 'center',
        headerSort: false,
        frozen: true,
      },

      editTriggerEvent: 'dblclick', //change edit trigger mode to make cell navigation smoother
      editorEmptyValue: undefined, //ensure empty values are set to undefined so they arent included in spreadsheet output data

      //enable range selection
      selectableRange: 1,
      selectableRangeColumns: true,
      selectableRangeRows: true,
      selectableRangeClearCells: true,

      //configure clipboard to allow copy and paste of range format data
      clipboard: true,
      clipboardCopyStyled: true,
      clipboardCopyConfig: {
        rowHeaders: false,
        columnHeaders: false,
      },
      clipboardCopyRowRange: 'range',
      clipboardPasteParser: 'range',
      clipboardPasteAction: 'range',
    });
  }

  handleKeydown(event: KeyboardEvent) {    
    if (event.key === 'Tab' && event.shiftKey) {
      console.log('Shift + Tab keys pressed');
      event.preventDefault();
    } else if (event.key === 'Tab') {
      // Your code for Tab key without Shift
      console.log('Tab key pressed');
      event.preventDefault();
    }
  }

  getSheetDetails() {
    let start = this.spreadsheet.getRanges()[0]._range.start;
    start.col = start.col - 1;
    let end = this.spreadsheet.getRanges()[0]._range.end;
    end.col = end.col - 1;
    console.log('start=>', start);
    console.log('end=>', end);
    const amarMainData = this.tabledata2[0]['data'];

    let sum = 0;

    let blankArray = [];

    for (let i = start.row; i <= end.row; i++) {
      for (let j = start.col; j <= end.col; j++) {
        sum += amarMainData[i][j];
      }
    }

    this.result = sum;
  }

  onCellClick(e: MouseEvent, cell: any) {
    // console.log('Cell Clicked:', cell.getElement().style);

    let formula = cell.getValue();
    !this.formulaActivated ? (this.formulaBar = cell.getValue()) : '';

    if (this.formulaActivated) {
      this.formularInputGulo.push(formula);
      cell.getElement().style.border = '1px dotted red';
      let pre = this.formulaBar
      pre = pre.split("(")[0]+'('
      this.formulaBar=pre+this.formularInputGulo.toString()
    }
    // if (formula.startsWith('=')) {
    //   let parsedValue = this.parser.parse(formula.slice(1));
    //   if (parsedValue.error != null) {
    //     return 'Error';
    //   } else {
    //     return parsedValue.result;
    //   }
    // }
    return formula;
  }

  formulaLikhchhi(e: any) {
    if (e.target.value == '=') {
      this.formulaActivated = true;
    }
    if (e.target.value == '') {
      this.formulaActivated = false;
    }
  }

  calculate(){    
    const parsedResult = this.parser.parse(this.formulaBar.split('=')[1]);
    this.formulaBar=parsedResult.result
    console.log(parsedResult);
    
    this.formulaActivated=false
  }
}
