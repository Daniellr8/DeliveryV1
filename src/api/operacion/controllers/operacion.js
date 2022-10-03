'use strict';

/**
 * operacion controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::operacion.operacion', ({strapi}) => ({
    suma: async (ctx, next) => {

      const {p1} = ctx.request.body.data
      const {p2} = ctx.request.body.data
      let result = Number(p1)+Number(p2);

      ctx.body =result;
    },
  }));