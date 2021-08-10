import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-house-invite',
  templateUrl: './house-invite.component.html',
  styleUrls: ['./house-invite.component.scss']
})
export class HouseInviteComponent implements OnInit, OnDestroy {

  code?: string;
  private routeSub?: Subscription;
  hasCopiedCode = false;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.code = params.code;
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  copyCode() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.code ?? '';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.hasCopiedCode = true;
  }
}
