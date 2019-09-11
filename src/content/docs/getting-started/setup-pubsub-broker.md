###### PubSubBroker.cs
```csharp
internal sealed class PubSubBroker : BrokerService
{
    public PubSubBroker(StatefulServiceContext context)
       : base(context)
    {
        // optional: provide a logging callback
        ServiceEventSourceMessageCallback = message => ServiceEventSource.Current.ServiceMessage(context, message);
    }
}
```
