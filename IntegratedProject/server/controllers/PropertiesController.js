const Properties = require('../models/PropertiesData');

module.exports = {
    
    async create(request, response) {
        const {type,title, description} =request.body;

        if(!type || !title) {
            return response.status(400).json({
                error: "Dados Incompletos"
            })
        }

        const propertiesCreate = await Properties.create({
            type,
            title,
            description
        })

        return response.status(201).json(propertiesCreate)

    },
    async read(request, response) {
        const propertiesList = await Properties.find()
        return response.json(propertiesList);

    },
    async update(request, response) {
        const {id} = request.params;
        const {type,description, title} = request.body;
    
        const propertie = await Properties.findOne({_id: id})
    
        if (type !== undefined) propertie.type = type;
        if (description !== undefined) propertie.description = description;
        if (title !== undefined) propertie.title = title;
    
        await propertie.save() 
    
        return response.json(propertie)
    },
    

    async delete(request, response) {
        const {id} = request.params;
        const propertie = await Properties.findOneAndDelete({
            _id : id
        });

        if (!propertie) {
            return response.status(400).json({
                error: 'Imóvel não encontrado'
            });
        }else {
            response.json(propertie)
        }
    },
}