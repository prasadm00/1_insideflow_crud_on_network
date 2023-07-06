const {Sequelize} =  require("../models");//network
// const network= require("../models/network")
const Op = Sequelize.Op;
const models = require('../models/index');
let self = {};
const {v4 : uuidv4} = require('uuid')

self.getAll = async (req, res) => {
    try{
        let data =await models.Network.findAll({});
        return res.status(200).json({
            success:true,
            count: data.length,
            data: data
        })
    }catch(error){
        res.status(500).json({success: false,error: error});
    }

}

self.createNetwork = async (req, res) => {
    //uuid name description international_territory
    if(!req.body.name ||!req.body.description||!req.body.international_territory ){
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const newId = uuidv4()
    try{
        const newNetwork={
            id:newId,
            name:req.body.name,
            description:req.body.description,
            international_territory:req.body.international_territory
        };
        console.log("network ==>>",newNetwork);
            // const book = await db.Book.create(data);
        let data1= await models.Network.create(newNetwork)
        console.log("Data 1",data1);
        // let data = await network.create(newNetwork);
        
        // console.log("Data===>>>",data);
        return res.status(201).json({
            success: true,
            data: data1
        })
    }catch(error){
        return res.status(500).json({success: false,error: error})
    }
}

self.get = async (req, res) => {
    try{
        let id = req.params.id;
        console.log("Id==>>",id);
        let data = await models.Network.findByPk(id);
        console.log("Data==>>",data);
        if(data){
            return res.status(200).json({success: true,data: data});
        }else{
            return res.status(400).json({success: false,error: "No such network present",data: []})
        }
    }catch(error){
        console.log("Error==>>>",error);
        res.status(500).json({success: false,error: error})
    }
}


self.updateNetwork = async (req, res) => {
    try{
        let id = req.params.id;
        let body = req.body;
        let data = await models.Network.update(body,{
            where:{
                id:id
            }
        })
        if(data[0]==0){
            return res.status(200).json({success: false,error: "No network found with this id"})
        }
        return res.status(200).json({success: true,"number of rows changed": data})
    }catch(error){
        res.status(500).json({success: false,error: error})
    }
}


self.delete = async (req, res) => {
    try{
        let id = req.params.id;
        let data = await models.Network.destroy({where: {id: id}})
        if (data === 1) {return res.status(200).json({success: true,message: `User with id=${id} deleted`})
    }
    return res.status(200).json({success: false,message: `Network with id=${id} is not present.`})
    }catch(error){
        return res.status(200).json({success: false,error: error})
    }
}


self.deleteAll = async (req, res) => {
    try{
        let data = await models.Network.destroy({
            where:{},
            truncate:true
        })
        return res.status(200).json({
            success:true,
            data:data
        })
    }catch(error){
            res.status(500).json({
                success:false,
                error:error
            })
    }
};

module.exports = self;