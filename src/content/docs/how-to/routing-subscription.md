```csharp
await brokerClient.SubscribeAsync<CustomerMessage>(this, HandleMessageOne, routingKey: "Customer.Name=Customer1");
```
