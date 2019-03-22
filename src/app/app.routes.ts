import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { IntroductionComponent } from './docs/getting-started/introduction/introduction.component';
import { SetupPubSubBrokerComponent } from './docs/getting-started/setup-pubsub-broker/setup-pubsub-broker.component';
import { DataContractsComponent } from './docs/getting-started/data-contracts/data-contracts.component';
import { SetupSubscriberComponent } from './docs/getting-started/setup-subscriber/setup-subscriber.component';
import { PublishMessagesComponent } from './docs/getting-started/publish-messages/publish-messages.component';
import { BrokerConfigurationComponent } from './docs/how-to/broker-configuration/broker-configuration.component';
import { SubscribeToMessagesComponent } from './docs/how-to/subscribe-to-messages/subscribe-to-messages.component';
import { BrokerStatsComponent } from './docs/how-to/broker-stats/broker-stats.component';
import { RoutingComponent } from './docs/how-to/routing/routing.component';
import { Version8Component } from './docs/upgrading/version-8/version-8.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'getting-started/introduction', component: IntroductionComponent },
      { path: 'getting-started/setup-pubsub-broker', component: SetupPubSubBrokerComponent },
      { path: 'getting-started/data-contracts', component: DataContractsComponent },
      { path: 'getting-started/setup-subscriber', component: SetupSubscriberComponent},
      { path: 'getting-started/publish-messages', component: PublishMessagesComponent },
      { path: 'how-to/subscribe-to-messages', component: SubscribeToMessagesComponent },
      { path: 'how-to/broker-configuration', component: BrokerConfigurationComponent },
      { path: 'how-to/broker-stats', component: BrokerStatsComponent },
      { path: 'how-to/routing', component: RoutingComponent },
      { path: 'upgrading/version-8', component: Version8Component },
      { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];
