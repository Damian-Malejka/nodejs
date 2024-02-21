import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GlownyComponent } from './glowny/glowny.component';
import { SzczegolComponent } from './szczegol/szczegol.component';

@NgModule({
  declarations: [
    AppComponent,
    GlownyComponent,
    SzczegolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
