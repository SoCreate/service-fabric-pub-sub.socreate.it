###### SubScribingStatelessService
```csharp
internal sealed class SubscribingStatelessService : SubscriberStatelessServiceBase
{
    public SubscribingStatelessService(StatelessServiceContext serviceContext, IBrokerClient brokerClient = null)
        : base(serviceContext, brokerClient)
    {
    }

    [Subscribe]
    private Task HandleMessageOne(PublishedMessageOne message)
    {
        ServiceEventSource.Current.ServiceMessage(Context, $"Processing PublishedMessageOne: {message.Content}");
        return Task.CompletedTask;
    }

    [Subscribe]
    private Task HandleMessageTwo(PublishedMessageTwo message)
    {
        ServiceEventSource.Current.ServiceMessage(Context, $"Processing PublishedMessageTwo: {message.Content}");
        return Task.CompletedTask;
    }
}
```
