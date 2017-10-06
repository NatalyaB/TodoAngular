import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows = [
    {name: 'PC1',
    content: 12345678910,
    url:'http://wallpup.com/wp-content/uploads/2013/03/Beautiful-Scenery-Wallpaper.jpg'},
    {name: 'PC2',
    content: 12345678910,
    url:'http://wallpup.com/wp-content/uploads/2013/02/Nature-Wallpaper-Widescreen.jpg'},
    {name: 'PC3',
    content: 12345678910,
    url:'http://wallpup.com/wp-content/uploads/2013/04/Sunrise-Wallpaper.jpg'},
    {name: 'PC4',
    content: 12345678910,
    url:'http://wallpup.com/wp-content/uploads/2013/02/Waterfall-Pond-Nature-Wallpaper.jpg'},
    {name: 'PC5',
    content: 12345678910,
    url:'http://wallpup.com/wp-content/uploads/2013/03/Field-Sunset.jpg'},
    {name: 'PC6',
    content: 12345678910,
    url:'http://wallpup.com/wp-content/uploads/2014/09/magical-forest-hd-wallpaper.jpeg'}
  ];

  todos = [
    {name: 'qwertyuiop'},
    {name: 'qwertyuiop'},
    {name: 'qwertyuiop'},
    {name: 'qwertyuiop'},
    {name: 'qwertyuiop'},
    {name: 'qwertyuiop'}
  ]
}
