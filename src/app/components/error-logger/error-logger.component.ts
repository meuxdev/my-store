import { Component, OnInit } from '@angular/core';
import { StoreService } from '@services/store.service';
import { TStatusDetails } from 'src/app/types/statusDetail';

@Component({
  selector: 'app-error-logger',
  templateUrl: './error-logger.component.html',
  styleUrls: ['./error-logger.component.scss'],
})
export class ErrorLoggerComponent implements OnInit {
  message!: string;
  status!: TStatusDetails;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.errorMsg$.subscribe((msg) => (this.message = msg));
    this.storeService.appStatus$.subscribe((status) => (this.status = status));
  }
}
