import Form from '../Models/form.model.js';

export const createForm = async(req,res)=>{
   
    try{
        const {userId, eventId, responses } = req.body;
        const newform = new Form({
            userId,
            eventId,
            responses
        });
        newform.save();
        res.status(201).json({newform});

    }catch(err){
        console.error(`Error: ${err.message}`)
    }
}

export const getForm  = async(req,res)=>{
    try{
        const getForms = await Form.find();
        res.status(200).json({
            getForms
        })
    }catch(err){
        console.error(`Error: ${err.message}`)
    }
}