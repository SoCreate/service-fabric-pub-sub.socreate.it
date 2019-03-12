import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { InstallationComponent } from './docs/getting-started/installation/installation.component';
import { AddToProjectComponent } from './docs/how-to/add-to-project/add-to-project.component';
import { DataContractsComponent } from './docs/how-to/data-contracts/data-contracts.component';
import { PublishMessagesComponent } from './docs/how-to/publish-messages/publish-messages.component';
import { SubscribeToMessagesComponent } from './docs/how-to/subscribe-to-messages/subscribe-to-messages.component';
import { RoutingComponent } from './docs/how-to/routing/routing.component';
import { Version8Component } from './docs/upgrading/version-8/version-8.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'getting-started/installation', component: InstallationComponent },
      { path: 'how-to/add-to-project', component: AddToProjectComponent },
      { path: 'how-to/data-contracts', component: DataContractsComponent },
      { path: 'how-to/publish-messages', component: PublishMessagesComponent },
      { path: 'how-to/subscribe-to-messages', component: SubscribeToMessagesComponent },
      { path: 'how-to/routing', component: RoutingComponent },
      { path: 'upgrading/version-8', component: Version8Component },
      { path: '', redirectTo: 'getting-started/installation', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];
