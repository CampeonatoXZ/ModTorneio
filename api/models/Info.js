/**
 * Info.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    Regras: { type: 'string' },

    Premiacao: { type: 'string' },

    Detalhes: { type: 'string' }, 

    tipoContato: { model: 'TipoContato' },

  },

};

