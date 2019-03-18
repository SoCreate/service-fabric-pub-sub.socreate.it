###### ISubscribingActor
```csharp
// Make sure you're using Remoting V2 
[assembly: FabricTransportActorRemotingProvider(RemotingListenerVersion = RemotingListenerVersion.V2, RemotingClientVersion = RemotingClientVersion.V2)]

/// <summary>
/// This interface defines the methods exposed by an actor.
/// Clients use this interface to interact with the actor that implements it.
/// You must implement ISubsciberActor to receive messages.
/// </summary>
public interface ISubscribingActor : ISubscriberActor
{
    Task Subscribe();
}

```
###### SubscribingActor
```csharp
[ActorService(Name = nameof(SubscribingActor))]
[StatePersistence(StatePersistence.None)]
internal class SubscribingActor : Actor, ISubscribingActor
{
    private readonly IBrokerClient _brokerClient;

    public SubscribingActor(ActorService actorService, ActorId actorId)
        : base(actorService, actorId)
    {
        _brokerClient = new BrokerClient();
    }

    protected Task Subscribe()
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
