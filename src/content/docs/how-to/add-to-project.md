```csharp
internal sealed class PubSubService : BrokerService
{
    public PubSubService(StatefulServiceContext context)
       : base(context)
    {
        //optional: provide a logging callback
        ServiceEventSourceMessageCallback = message => ServiceEventSource.Current.ServiceMessage(this, message);
    }
}
```
