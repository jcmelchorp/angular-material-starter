import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dummy-text',
  templateUrl: './dummy-text.component.html',
  styleUrls: ['./dummy-text.component.scss']
})
export class DummyTextComponent implements OnInit {

  constructor(public translate: TranslateService
  ) {

  }


  ngOnInit(): void {
  }

}
