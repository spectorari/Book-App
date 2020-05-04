import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-chaptertwo',
  templateUrl: './chaptertwo.component.html',
  styleUrls: ['./chaptertwo.component.scss'],
})
export class ChaptertwoComponent implements OnInit {
pages: Page[] = [
  {id: 4, chapterid: 2, content: 'Proin in suscipit mauris, porttitor scelerisque libero. Phasellus vel metus bibendum, rhoncus nibh ac, mattis est. Sed sit amet bibendum ipsum. Aliquam hendrerit ultricies leo, vitae imperdiet sem aliquet et. Praesent consectetur tincidunt dapibus. Nunc massa nisi, viverra eu faucibus vel, tincidunt in turpis. Aliquam id orci lorem. Morbi vestibulum porttitor pharetra. Maecenas sagittis diam at ipsum facilisis, nec ultricies nulla euismod. Nam in lacinia nisi, in ornare tortor. Aliquam at nisi ultricies, vehicula lorem id, egestas nulla.' },
  {id: 5, chapterid: 2, content: 'Integer facilisis arcu vel risus accumsan, id semper ex pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce laoreet nibh nec diam lacinia convallis. Morbi nulla libero, vehicula vitae massa sed, placerat suscipit diam. Aliquam id leo diam. Nam enim ex, venenatis sed libero quis, pellentesque varius quam. Nam maximus feugiat dolor in tincidunt. Aliquam eget varius nunc. In lobortis gravida justo, quis malesuada lorem blandit ac. Quisque id iaculis tortor, scelerisque ornare turpis. Ut gravida ante ac aliquet vestibulum. Aliquam pretium nunc in suscipit iaculis.' },
  {id: 6, chapterid: 2, content: 'Nullam tellus ligula, imperdiet nec lorem at, efficitur molestie est. Mauris sagittis lacus id sodales finibus. Praesent eu velit nisl. Donec nunc lorem, porta ac risus nec, mollis tincidunt nulla. Donec vitae rutrum erat, consectetur posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat, lacus sit amet varius venenatis, lectus ipsum dignissim purus, et ullamcorper tortor orci id enim.' },
]

selectedPage: Page;
onSelect(page: Page): void {
  this.selectedPage= page;
}
  constructor() { }

  ngOnInit() {}

}
