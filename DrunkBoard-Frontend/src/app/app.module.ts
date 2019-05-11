import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AdminDialogComponent } from './toolbar/admin-dialog/admin-dialog.component';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ToolbarModule,
    LeaderboardModule
  ],
  providers: [],
  entryComponents: [
    AdminDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}