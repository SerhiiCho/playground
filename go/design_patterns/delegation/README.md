### Delegation Design Pattern

This example shows how we can delegate behavior of the object _(struct)_ to others. We have **AppMessenger** that can send messages via email and sms. We extract sending functionality into a different structs. In this example we duplicate send method in SmsMessenger and EmailMessenger but of course a better way is to extract it in a common struct.

```go
func main() {
    // creating empty messenger. messenger itself is not sending messages
    // it uses other structs to do this job
    messenger := AppMessenger{Messenger: nil}

    // delegation to email object (struct)
    messenger.ToEmail().Send()

    // delegation to sms object (struct)
    messenger.ToSms().Send()
}
```