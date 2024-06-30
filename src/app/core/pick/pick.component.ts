import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface AsianFont {
  name: string;
  code: string;
}

interface FontStyle {
  name: string;
  code: string;
}

interface Size {
  name: number;
  code: number;
}

@Component({
  selector: 'app-pick',
  standalone: true,
  imports: [
    TabViewModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ColorPickerModule,
    DialogModule,
  ],
  templateUrl: './pick.component.html',
  styleUrl: './pick.component.scss',
})
export class PickComponent implements OnInit {
  asianFontList: AsianFont[];
  selectedAsianFont: AsianFont;
  fontStyle: FontStyle[];
  selectedFontStyle: FontStyle;
  size: Size[] = [];
  selectedSize: Size;
  color: string = '#f40505';
  showColorOptions = false;
  predefinedColors: string[] = [];
  standardColors: string[] = [];
  recentColors: string[] = [];
  moreColorsVisible: boolean = false;
  colors1 = [
    '#003366',
    '#336699',
    '#3366CC',
    '#003399',
    '#000099',
    '#0000CC',
    '#000066',]
    colors2=[
    '#006666',
    '#006699',
    '#0099CC',
    '#0066CC',
    '#0033CC',
    '#0000FF',
    '#3333FF',
    '#333399',]
    colors3=[
    '#669999',
    '#009999',
    '#33CCCC',
    '#00CCFF',
    '#0099FF',
    '#0066FF',
    '#3366FF',
    '#3333CC',
    '#666699',]
    colors4=[
    '#339966',
    '#00CC99',
    '#00FFCC',
    '#00FFFF',
    '#33CCFF',
    '#3399FF',
    '#6699FF',
    '#6666FF',
    '#6600FF',
    '#6600CC',]
    colors5=[
    '#339933',
    '#00CC66',
    '#00FF99',
    '#66FFCC',
    '#66FFFF',
    '#66CCFF',
    '#99CCFF',
    '#9999FF',
    '#9966FF',
    '#9933FF',
    '#9900FF',]
    colors6=[
    '#006600',
    '#00CC00',
    '#00FF00',
    '#66FF99',
    '#99FFCC',
    '#CCFFFF',
    '#CCCCFF',
    '#CC99FF',
    '#CC66FF',
    '#CC33FF',
    '#CC00FF',
    '#9900CC',]
    colors7=[
    '#003300',
    '#009933',
    '#33CC33',
    '#66FF66',
    '#99FF99',
    '#CCFFCC',
    '#FFFFFF',
    '#FFCCFF',
    '#FF99FF',
    '#FF66FF',
    '#FF00FF',
    '#CC00CC',
    '#660066',]
    colors8=[
    '#336600',
    '#009900',
    '#66FF33',
    '#99FF66',
    '#CCFF99',
    '#FFFFCC',
    '#FFCCCC',
    '#FF99CC',
    '#FF66CC',
    '#FF33CC',
    '#CC0099',
    '#993399',]
    colors9=[
    '#333300',
    '#669900',
    '#99FF33',
    '#CCFF66',
    '#FFFF99',
    '#FFCC99',
    '#FF9999',
    '#FF6699',
    '#FF3399',
    '#CC3399',
    '#990099',]
    colors10=[
    '#666633',
    '#99CC00',
    '#CCFF33',
    '#FFFF66',
    '#FFCC66',
    '#FF9966',
    '#FF6666',
    '#FF0066',
    '#CC6699',
    '#993366',]
    colors11=[
    '#999966',
    '#CCCC00',
    '#FFFF00',
    '#FFCC00',
    '#FF9933',
    '#FF6600',
    '#FF5050',
    '#CC0066',
    '#660033',]
    colors12=[
    '#996633',
    '#CC9900',
    '#FF9900',
    '#CC6600',
    '#FF3300',
    '#FF0000',
    '#CC0000',
    '#990033',]
    colors13=[
    '#663300',
    '#996600',
    '#CC3300',
    '#993300',
    '#990000',
    '#800000',
    '#993333',
  ];

  showMoreColors() {
    this.moreColorsVisible = true;
  }

  ngOnInit(): void {
    this.asianFontList = [
      { name: 'Times New Roman', code: 'TMR' },
      { name: 'Garamond', code: 'GM' },
      { name: 'Book Antiqua', code: 'BA' },
      { name: 'Cursive', code: 'CR' },
      { name: 'Comic Sans MS', code: 'CSM' },
    ];

    this.fontStyle = [
      { name: 'Regular', code: 'RGL' },
      { name: 'Bold', code: 'BLD' },
      { name: 'Italic', code: 'ITL' },
    ];

    for (let i = 1; i < 73; i++) {
      this.size.push({ name: i, code: i });
    }

    this.predefinedColors = [
      '#444444',
      '#660066',
      '#800080',
      '#fff7d1',
      '#ff1dce',
      '#0060ff',
      '#aa34c9',
      '#de45c4',
      '#34105e',
      '#4395ce',
      '#1d2c73',
      '#c43dff',
      '#1b384b',
      '#4b2e1b',
      '#00ccff',
      '#00ff6c',
      '#ffffff',
      '#f7f3ee',
      '#faebd7',
      '#ccffcc',
      '#627278',
      '#ffff80',
      '#fff7e0',
      '#4a9fe1',
      '#7c8c49',
      '#004af9',
      '#af139a',
      '#d6d491',
      '#d03f2c',
      '#a5533f',
      '#c5bebe',
      '#d2cac5',
      '#e9e0d4',
      '#bdbdbd',
      '#424242',
      '#ffe4b5',
      '#6342c7',
      '#cd1d5f',
      '#c42036',
      '#933d65',
      '#6b1952',
      '#f99f1e',
    ];

    this.standardColors = [
      '#a83232',
      '#ff00d9',
      '#8c00ff',
      '#1e00ff',
      '#0091ff',
      '#00ffdd',
      '#00ff48',
      '#80ff00',
      '#ffff00',
      '#ff8000',
      '#000000',
    ];

    this.recentColors = ['#00ffdd', '#00ff48', '#80ff00'];
  }

  openCloseOptions() {
    this.showColorOptions = !this.showColorOptions;
  }
  setColorFromPredefined(item) {
    this.color = item;
   
  }
}
