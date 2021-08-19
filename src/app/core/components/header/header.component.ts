import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  barHidden = true;
  menuVisible = false;

  constructor(private zone: NgZone,
              private router: Router) {
  }

  ngOnInit(): void {
    this.onResize();

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.menuVisible = false;
      }
    });
  }

  openMenu($event: MouseEvent) {
    this.menuVisible = !this.menuVisible;
    $event.stopPropagation();
    $event.preventDefault();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.zone.run(() => {
      this.barHidden = window.innerWidth > 768;
    })
  }
}
