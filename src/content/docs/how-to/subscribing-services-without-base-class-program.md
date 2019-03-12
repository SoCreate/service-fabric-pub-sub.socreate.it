###### Program
```csharp
var brokerClient = new BrokerClient();
ServiceRuntime.RegisterServiceAsync("SubscribingStatelessServiceType",
    context => new StatelessSubscriberServiceBootstrapper<SubscribingStatelessService>(context, ctx => new SubscribingStatelessService (ctx, brokerClient), brokerClient).Build())
    .GetAwaiter().GetResult();
```
