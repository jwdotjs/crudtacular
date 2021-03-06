export default function(request, reply) {
  let settings = request.route.settings.plugins.crudtacular;

  let model = new settings.model(request.payload);

  return model
    .save()
    .then((savedModel) => {
      return reply(savedModel.toJSON()).code(201);
    })
    .catch(reply);

}
