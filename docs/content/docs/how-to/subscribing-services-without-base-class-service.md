###### Service
```csharp
internal sealed class SubscribingStatelessService : StatelessService, ISubscriberService
{
    private readonly IBrokerClient _brokerClient;

    public SubscribingStatelessService(StatelessServiceContext serviceContext, IBrokerClient brokerClient = null) : base(serviceContext)
    {
        _brokerClient = brokerClient;
    }

    public Task ReceiveMessageAsync(MessageWrapper messageWrapper)
    {
        // Automatically delegates work to annotated methods withing this class.
        return _brokerClient.ProccessMessageAsync(messageWrapper);
    }

    protected override IEnumerable<ServiceInstanceListener> CreateServiceInstanceListeners()
    {
        return this.CreateServiceRemotingInstanceListeners();
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
