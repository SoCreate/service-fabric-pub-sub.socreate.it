###### SubscribingActor
```csharp
[ActorService(Name = nameof(SubscribingActor))]
[StatePersistence(StatePersistence.None)]
internal class SubscribingActor : Actor, ISubscriberActor
{
    private readonly IBrokerClient _brokerClient;

    public SubscribingActor(ActorService actorService, ActorId actorId, IBrokerClient brokerClient = null)
        : base(actorService, actorId)
    {
        _brokerClient = brokerClient ?? new BrokerClient();
    }

    protected override async Task OnActivateAsync()
    {
        await _brokerClient.SubscribeAsync<PublishedMessageOne>(this, HandleMessageOne);
    }

    public Task ReceiveMessageAsync(MessageWrapper message)
    {
        return _brokerClient.ProcessMessageAsync(message);
    }

    private Task HandleMessageOne(PublishedMessageOne message)
    {
        ActorEventSource.Current.ActorMessage(this, $"Received message: {message.Content}");
        return Task.CompletedTask;
    }
}
```
