```csharp
var brokerClient = new BrokerClient();
brokerClient.PublishMessageAsync(new PublishedMessageOne { Content = "Hello PubSub World!" })
```
