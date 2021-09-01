const sequalize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequalize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  phone: { type: DataTypes.STRING, unique: true },
});

const Order = sequalize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalPrice: { type: DataTypes.DOUBLE, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
});
const Pizza = sequalize.define("pizza", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  desc: { type: DataTypes.STRING },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  tag: { type: DataTypes.STRING },
});
const PizzaTypes = sequalize.define("pizza-type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false },
  additionalWeight: { type: DataTypes.INTEGER, allowNull: false },
});
const PizzaSizes = sequalize.define("pizza-size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  size: { type: DataTypes.INTEGER, allowNull: false },
  weight: { type: DataTypes.INTEGER, allowNull: false },
});
const OrderInfo = sequalize.define("order-info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const OrderProduct = sequalize.define("order-product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
x;

User.hasMany(Order);
Order.belongsTo(User);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });
module.exports = {
  User,
  Order,
  Product,
  OrderProduct,
  ProductType,
};
