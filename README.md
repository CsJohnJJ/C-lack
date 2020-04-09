
# C-Lack
C-lack is a clone based of off Slack.com. It is essentially a chat room, designed to replace email.
<a href="https://c-lack.herokuapp.com">Live Site</a> 

### Impelmented Technologies:

- HTML
- CSS
- SASS
- JavaScript
- Postgres
- Ruby on Rails
- Webpack
- React
- Redux
## Features:

### Overview:

<p align="center">
<img src="app/assets/images/C-lack.gif" width=500  align=center>
</p>

### Live Chat:

<p align="center">
<img src="app/assets/images/C-lackchat.gif" width=500  align=center>
</p>


### Channels:

User is able to create/delete channels and view the messages within that channel

<p align="center">
<img src="app/assets/images/C-lackchannel.gif" height=400 align=center>
</p>

Impelmented Action Cable to subscribe/boardcast message to it's a instance of channel.

```
  getCurrentChannel(channelId) {
    if (App.currentChannel) {
      App.currentChannel.unsubscribe();
    }
    const { receiveMessage, receiveMessages } = this.props;
    App.currentChannel = App.cable.subscriptions.create(
      { channel: "ChatChannel", id: channelId },
      {
        received: data => {
          switch (data.type) {
            case "message":
              receiveMessage(JSON.parse(data.message)); //passing incoming
              break;
            case "messages":
              receiveMessages(JSON.parse(data.messages));
              break;
          }
        },
        speak: function(data) {
          return this.perform("speak", data);
        },
        load: function() {
          return this.perform("load");
        }
      }
    );
  }
```



Schema Diagram

<p align="center">
<img src="https://user-images.githubusercontent.com/50147749/75047593-06d98380-5495-11ea-9297-8710fcbe9363.png" width=500 >
</p>    
 