const productModel = require('../Model/productModel')
const bookModel = require("../Model/booksModel")
const ServiceResponse = require("../helper/ServiceResponse")

const insertData = async function(req, res){
    try{

    const body = req.body;

    const update = {
        title: body.title,
        description: body.description,
        author: body.author,
        image: body.image,
        code: body.code,
        status: body.status,
        category: body.category,
        publication_year: body.publication_year,
    };
    const data = await bookModel.create(update);

    return res.send(data)
    } catch(error){
        console.log(error);
    }

};

const updateData = async function(req, res){
    try {
        const {id} = req.params
        const body = req.body
        const result = await bookModel.findOne({
            where:{id}
        })
        if(result===null){
            return ServiceResponse(res,null,404,"id not found")
        }
        const update = await bookModel.update(body,{where:{id}})
        return ServiceResponse(res,update,200,"updated success")

        
    } catch (error) {
        console.log(error);
    }
}


const get = async function(req, res){
    try{

        const data = await bookModel.findAll();
      
        return res.send(data)
    } catch(error){
        console.log(error);
    }
};


const put = async function(req, res){
    try{

    const id = req.parans.id;
    const body = req.body;

    const input = {
        product_name: body.product_name,
        stock: body.stock,
        price: body.price,
        image: body.image,
    };

    await productModel.update(update, {
        where:{
            id: id,
        }
    });

    const data = await productModel.findOne({
        where:{
            id: id,
        }
    });

    return res.send(data)
} catch(error){
    console.log(error);
}

};

const destroy= async function(req, res){
    try{
        const id = req.parans.id;

        await productModel.destroy({
            where:{
                id: id,
            }
        })
        return res.send({
            message:'dalete success'
        })
    } catch(error){
        console.log(error);
    }
};

const getById = async function(req, res){
    try{

        const data = await productModel.findOne({
            where: {
                id: id,
                 }
        });

        if (data === null) {
            return res.send({
                message: 'Product Not Found'
            })
        } else{
            return res.send(data)
        }
    } catch(error){
        console.log(error);
    }
};


module.exports = {
    get,
    insertData,
    updateData,
    destroy,
    getById,
};