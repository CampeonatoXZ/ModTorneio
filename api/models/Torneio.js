/**
 * Torneio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: { type: 'string' },

    status: { type: 'string' },

    data: { type: 'string', columnType: 'date' },

    hora: { type: 'string', columnType: 'time' },

    jogo: { model: 'Jogo' },

    tipoTorneio: { model: 'TipoTorneio' },

    informacoes: { model: 'Info' },




  },

};

