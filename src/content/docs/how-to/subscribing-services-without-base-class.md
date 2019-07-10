###### Service
```csharp
internal sealed class SubscribingStatelessService : StatelessService, ISubscriberService
{
    private readonly IBrokerClient _brokerClient;

    public SubscribingStatelessService(StatelessServiceContext serviceContext, IBrokerClient brokerClient = null) 
        : base(serviceContext)
    {
        _brokerClient = brokerClient;
    }
    
    protected override async Task OnOpenAsync(CancellationToken cancellationToken)
    {
        await _brokerClient.SubscribeAsync<PublishedMessageOne>(this, HandleMessageOne);
        await _brokerClient.SubscribeAsync<PublishedMessageTwo>(this, HandleMessageTwo, false);
    }

    public Task ReceiveMessageAsync(MessageWrapper messageWrapper)
    {
        // Automatically delegates work to handlers registered in OnOpenAsync().
        return _brokerClient.ProccessMessageAsync(messageWrapper);
    }

    protected override IEnumerable<ServiceInstanceListener> CreateServiceInstanceListeners()
    {
        yield return new ServiceInstanceListener(context => new FabricTransportServiceRemotingListener(context, this), ListenerName);
    }

    private Task HandleMessageOne(PublishedMessageOne message)
    {
        ServiceEventSource.Current.ServiceMessage(Context, $"Processing PublishedMessageOne: {message.Content}");
        return Task.CompletedTask;
    }

    private Task HandleMessageTwo(PublishedMessageTwo message)
    {
        ServiceEventSource.Current.ServiceMessage(Context, $"Processing PublishedMessageTwo: {message.Content}");
        return Task.CompletedTask;
    }
}
```
