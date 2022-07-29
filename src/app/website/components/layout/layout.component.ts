import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { TStatusDetails } from '../../types/statusDetail';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  appStatus!: TStatusDetails;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.appStatus$.subscribe({
      next: (status) => (this.appStatus = status),
    });
  }
}
