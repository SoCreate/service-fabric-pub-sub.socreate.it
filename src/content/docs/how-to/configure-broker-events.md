###### MyBrokerService
```csharp
internal sealed class MyBrokerService : BrokerService
{
    public MyBrokerService(StatefulServiceContext context) : base(context)
    {
    }

    protected override void SetupEvents(IBrokerEvents events)
    {
        events.Subscribed += (queueName, subscriber, messageType) =>
        {
            // TODO: Do something when subscribe happens.
            return Task.CompletedTask;
        };
        events.MessageDeliveryFailure += (queueName, subscriber, messageWrapper, exception) =>
        {
            // TODO: Log a delivery failure.
            return Task.CompletedTask;
        };
    }
}
```
