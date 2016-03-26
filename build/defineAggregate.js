// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(arg) {
    var idGenerator, methods, name, ref, state;
    ref = arg != null ? arg : {
      name: 'Aggregate'
    }, name = ref.name, idGenerator = ref.idGenerator, state = ref.state, methods = ref.methods;
    return function(attrs) {
      var aggregate, fn, instanceId, instanceState;
      instanceId = null;
      if ((idGenerator != null) === false) {
        if (!!attrs.id === false) {
          throw new Error("An id must be provided when creating an instance of " + name);
        } else {
          instanceId = attrs.id;
          delete attrs.id;
        }
      } else {
        if (!!attrs.id) {
          throw new Error("An id generator has been already been provided for " + name + ". Passing an id to the factory function isn't necessary");
        }
        instanceId = idGenerator();
      }
      instanceState = Object.assign({}, state, attrs);
      aggregate = Object.defineProperty({}, 'state', {
        value: instanceState
      });
      for (name in methods) {
        fn = methods[name];
        Object.defineProperty(aggregate, name, {
          value: fn
        });
      }
      return Object.defineProperty(aggregate, 'id', {
        value: instanceId
      });
    };
  };

}).call(this);