import { Component, OnInit } from '@angular/core';
import { PAGES } from '../pages';
import { Page } from '../page';

@Component({
  selector: 'app-chapterone',
  templateUrl: './chapterone.component.html',
  styleUrls: ['./chapterone.component.scss'],
})
export class ChapteroneComponent implements OnInit {

  pages: Page[] = [
    {id: 1, chapterid: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque tortor, imperdiet at vulputate at, efficitur vel metus. Mauris a risus ut neque tempor porta. Ut fringilla ligula eu bibendum molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed tempus mauris. Curabitur ut felis pellentesque, porta tortor nec, ullamcorper lacus. Nam sodales cursus leo, at pulvinar augue venenatis at. Etiam eget magna metus. Morbi venenatis mattis odio, a pellentesque elit elementum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed augue sollicitudin, mollis eros a, finibus nisi. Nulla fermentum a leo eu posuere. Maecenas quis nunc id velit laoreet maximus. Fusce euismod id magna at porttitor. Phasellus ac tincidunt risus.' },
    {id: 2, chapterid: 1, content: 'Nullam condimentum efficitur velit, at iaculis nulla fringilla quis. Sed lacinia imperdiet elit rutrum pulvinar. Phasellus tincidunt elit ut orci dignissim faucibus. Suspendisse lobortis condimentum sagittis. Morbi molestie finibus ex. Nulla elementum nisl mauris, ut condimentum ipsum facilisis eu. Vestibulum laoreet laoreet laoreet. Pellentesque vulputate fringilla lectus at commodo. Suspendisse augue urna, convallis in accumsan eget, mattis nec purus. Sed tincidunt neque eget consequat aliquam.' },
    {id: 3, chapterid: 1, content: 'Sed tristique, turpis a volutpat aliquet, nulla leo mollis enim, finibus vulputate est eros ut est. Nam nec nisl non risus commodo lobortis. Nullam quis magna volutpat, interdum turpis sed, pulvinar diam. Aliquam eget arcu ullamcorper, sollicitudin felis a, placerat lectus. Morbi in sollicitudin quam. In eu vehicula eros. Pellentesque dictum dolor feugiat aliquet finibus. Nulla maximus maximus ex at venenatis. Vivamus mollis fringilla ligula, non vulputate purus venenatis ultricies. Donec libero diam, eleifend a enim quis, interdum vestibulum lectus. Curabitur ut porta eros.' }
  ]
  selectedPage: Page;
  onSelect(page: Page): void {
    this.selectedPage= page;
  }

  constructor() { }

  ngOnInit() {}

}
