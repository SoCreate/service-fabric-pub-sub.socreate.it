```csharp
[Subscribe(routingKey: "Customer.Name=Customer1")]
private Task HandleMessageOne(PublishedMessageOne message)
{
    ServiceEventSource.Current.ServiceMessage(Context, $"Processing PublishedMessageOne: {message.Content}");
    return Task.CompletedTask;
}
```
