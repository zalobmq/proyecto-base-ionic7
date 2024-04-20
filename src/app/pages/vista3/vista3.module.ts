import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vista3PageRoutingModule } from './vista3-routing.module';

import { Vista3Page } from './vista3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vista3PageRoutingModule
  ],
  declarations: [Vista3Page]
})
export class Vista3PageModule {}
