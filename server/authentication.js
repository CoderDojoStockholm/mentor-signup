ServiceConfiguration.configurations.remove({
    service: "google"
});

ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: Meteor.settings.clientId,
    secret: Meteor.settings.secret,
    loginStyle: "popup"
});