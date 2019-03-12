import { SoCreateLogoComponent } from './shared/socreate-logo/socreate-logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './shared/markdown.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GithubCornerComponent } from './shared/github-corner.component';
import { appRoutes } from './app.routes';
import { DocsComponent } from './docs/docs.component';
import { PubSubLogoComponent } from './shared/pub-sub-logo/pub-sub-logo.component';
import { InstallationComponent } from './docs/getting-started/installation/installation.component';
import { AddToProjectComponent } from './docs/how-to/add-to-project/add-to-project.component';
import { DataContractsComponent } from './docs/how-to/data-contracts/data-contracts.component';
import { PublishMessagesComponent } from './docs/how-to/publish-messages/publish-messages.component';
import { SubscribeToMessagesComponent } from './docs/how-to/subscribe-to-messages/subscribe-to-messages.component';
import { RoutingComponent } from './docs/how-to/routing/routing.component';
import { Version8Component } from './docs/upgrading/version-8/version-8.component';


@NgModule({
  declarations: [
    AppComponent,
    PubSubLogoComponent,
    SoCreateLogoComponent,
    GithubCornerComponent,
    MarkdownComponent,
    AboutComponent,
    HomeComponent,
    DocsComponent,
    InstallationComponent,
    AddToProjectComponent,
    DataContractsComponent,
    PublishMessagesComponent,
    SubscribeToMessagesComponent,
    RoutingComponent,
    Version8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
