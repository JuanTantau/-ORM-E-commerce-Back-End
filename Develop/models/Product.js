// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define price
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    //  define stock
    stock: {
      type: DataTypes.INTERGER,
      allowNull: false,
      defaultValues: 11,
      validate: {
        isNumeric: true
      }
    },
    // define category id
    category_id: {
      type: DataTypes.INTERGER,
      reference: {
        model: 'category',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
