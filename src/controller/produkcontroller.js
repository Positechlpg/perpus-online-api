 const ServiceRespones = require("../helper/ServiceResponse")


const produk = require('../models/produk');

const postBook = async function(req, res) {
    try {
        
        const body = req.body;

        const input = {
        id: body.id,
        username: body.username,
        full_name: body.full_name,
        email: body.email,
        password: body.password,
        image: body.image,
        statusbar: body.statusbar,
        role: body.role,
        npm: body.npm,
        created_at: body.created_at,
        updated_at: body.updated_at,
        };
        const data = await produk.create(input);
        
        return  res.send(data)
    } catch (error) {
        console.log(error);
    }

};

const getBook = async function(req, res) {
    try {

        const data = await produk.findAll();
        return res.send(data)
    } catch (error) {
        console.log(error);
    }
};

const putBook = async function(req, res) {
    try {
        
        const {id} = req.params;
        const body = req.body;

        const input = {
        id: body.id,
        username: body.username,
        full_name: body.full_name,
        email: body.email,
        password: body.password,
        image: body.image,
        statusbar: body.statusbar,
        role: body.role,
        npm: body.npm,
        created_at: body.created_at,
        updated_at: body.updated_at,
        };

        console.log(id);
        const data = await produk.findOne({
            where: {
                id
            }
        });
        if(data===null){
            return ServiceRespones(res,null,404,"id  not found")
        }
        const result = await produk.update(input, {
            where: {
                id: id,
            }
        });
        
        return  ServiceRespones(res,result,200,"updated succes")
    } catch (error) {
        console.log(error)
    }

};

const destroyBook = async function(req, res) {
    try {
        const id = req.params.id;

        await produk.destroy({
            where: {
                id: id,
            }
        })
        return res.send({
            message: 'delete success'
        })
    } catch (error) {
        console.log(error);
    }
};


const getByIdBook = async function(req, res) {
    try {
        const id = req.params.id;

        const data = await produk.findOne({
            where: {
                id: id,
            }
        });

        if (data === null) {
            return res.send({
                message: 'File Not Found'
            })
        } else {
            return res.send(data)
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getBook,
    postBook,
    putBook,
    destroyBook,
    getByIdBook
};