'use strict';
module.exports = app => {
  const { STRING, INTEGER, DECIMAL } = app.Sequelize;

  const OrderItem = app.model.define(
    'OrderItem',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: INTEGER,
      },
      image: {
        type: STRING,
      },
      title: {
        type: STRING,
      },
      specs: {
        type: STRING,
      },
      price: {
        type: DECIMAL(10, 2),
      },
      oldPrice: {
        type: DECIMAL(10, 2),
      },
      quantity: {
        type: INTEGER,
      },
      orderId: {
        type: INTEGER,
      },
    },
    {
      timestamps: true,
    }
  );

  OrderItem.associate = function() {
    app.model.OrderItem.belongsTo(app.model.Order, { foreignKey: 'orderId', targetKey: 'id' });
  };

  return OrderItem;
};
