import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
@Component({
  selector: 'app-chapterthree',
  templateUrl: './chapterthree.component.html',
  styleUrls: ['./chapterthree.component.scss'],
})
export class ChapterthreeComponent implements OnInit {
  pages: Page[] = [
  {id: 7, chapterid: 3, content: 'Maecenas tincidunt dignissim mi, id rutrum elit pharetra id. Cras at nulla risus. Vivamus elementum quam et metus venenatis ultrices. Nulla ullamcorper rhoncus nulla in fringilla. Morbi at lacus ligula. Vivamus viverra imperdiet ipsum, ac luctus mauris dignissim ac. Aenean ornare sapien vel sapien finibus, ac commodo elit condimentum.' },
  {id: 8, chapterid: 3, content: 'Praesent vestibulum nec diam id volutpat. Suspendisse ac enim id libero pretium pretium ut ut orci. In a tincidunt leo, a luctus leo. Sed ac lacinia urna. Quisque ac quam ligula. In et dictum tellus. Nullam finibus ut augue sagittis hendrerit. Donec et leo vel lectus imperdiet tempor. Suspendisse facilisis mi id mattis auctor. Ut ac nulla non purus sodales venenatis scelerisque et eros. In semper diam vel sapien ultricies feugiat. Maecenas nec aliquam velit, sit amet pellentesque nulla. Suspendisse laoreet non sem ut tempus. Ut augue nibh, tincidunt eget magna quis, ultrices dignissim enim.' },
  {id: 9, chapterid: 3, content: 'Proin id ex id justo rutrum finibus. Donec vel neque et ligula dignissim tincidunt. Donec quis faucibus risus, vel auctor enim. Maecenas eleifend ipsum et odio accumsan, in varius lacus sagittis. Nunc pharetra gravida pharetra. Ut suscipit orci nec elit mattis, et lobortis orci tincidunt. Etiam fermentum lobortis eros eget scelerisque. Sed dignissim ex ut nisl consectetur lacinia. Fusce ac leo purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam nec orci laoreet, fringilla tellus sed, maximus urna.' }
  ]
  selectedPage: Page;
  onSelect(page: Page): void {
    this.selectedPage= page;
  }
  constructor() { }

  ngOnInit() {}

}
