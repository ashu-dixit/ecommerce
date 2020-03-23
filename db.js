const Sequelize = require('sequelize')
const db = new Sequelize('shopdb', 'shopper', 'shoppass', {

    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 6,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const customer = db.define('Customer', {
    customerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    mobileNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    },
    addressLine1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    addressLine2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pinCode: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    shipCity: {
        type: Sequelize.STRING,
        allowNull: true
    },
    shipState: {
        type: Sequelize.STRING,
        allowNull: true
    },
    shipCountry: {
        type: Sequelize.STRING,
        allowNull: true
    },
    shipAddressLine1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    shipAddressLine2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    shipPinCode: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

const orders = db.define('Orders', {
    orderID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    customerID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    orderNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    paymentID: {
        type: Sequelize.INTEGER
    },
    orderDate: Sequelize.TIME,
    shipDate: {
        type: Sequelize.DATE
    },
    shipperID: {
        type: Sequelize.INTEGER
    },
    salesTax: {
        type: Sequelize.FLOAT
    },
    paid: {
        type: Sequelize.BOOLEAN
    },
    paymentDate: {
        type: Sequelize.DATEONLY
    }
})
const product = db.define('Product', {
    productID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productDiscription: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    SupplierID: {
        type: Sequelize.INTEGER,
    },
    categoryID: {
        type: Sequelize.INTEGER
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    size: {
        type: Sequelize.STRING
    },
    colour: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    Discount: {
        type: Sequelize.FLOAT
    },
    picture: {
        type: Sequelize.BLOB
    }
})
const categories = db.define('Categories', {
    categoryID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    categoryName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    discription: {
        type: Sequelize.STRING
    }
})
const orderDetail = db.define('OrderDetail', {
    orderID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    productID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    orderNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    discount: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    tax: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    shipDate: {
        type: Sequelize.DATE
    }
})
const supplier = db.define('Supplier', {
    SupplierID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    brandName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    mobileNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    },
    addressLine1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    addressLine2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pinCode: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})
db.sync()
    .then(() => console.log("Database has been created"))
    .catch((err) => console.error("error creating database"))

exports = module.exports = {
    db,
    customer,
    product,
    supplier,
    orders,
    orderDetail,
    categories
}