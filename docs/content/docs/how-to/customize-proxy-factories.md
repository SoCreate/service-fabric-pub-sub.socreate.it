```csharp
// Implement your custom IProxyFactories.
internal class CustomProxyFactories : IProxyFactories
{
    ...
}

// Set the BrokerService to use CustomProxyFactories.
internal class PubSubBroker : BrokerService
{
    public PubSubBroker(StatefulServiceContext context)
        : base(context, proxyFactories: new CustomProxyFactories())
    {
    }
}

// Set all subscribers to use CustomProxyFactories.
internal class SubscribingStatelessService : SubscriberStatelessServiceBase
{
    public SubscribingStatelessService(StatelessServiceContext serviceContext)
        : base(serviceContext, new BrokerClient(new BrokerServiceLocator(proxyFactories: new CustomProxyFactories())))
    {
    }
}

// Create your BrokerClient using CustomProxyFactories.
var brokerClient = new BrokerClient(new BrokerServiceLocator(proxyFactories: new CustomProxyFactories()));
brokerClient.PublishMessageAsync(new PublishedMessageOne { Content = "Hello PubSub World!" });
```
