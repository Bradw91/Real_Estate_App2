const Property = require('../Models/Property');


//fix addProperty post request function
exports.addProperty = async (req, res, next) => {
    try {
        const { address, location, askingPrice, numBedrooms, numBathrooms, sqMeters, description } = req.body;
        const property = await Property.create(req.body);
        return res.status(201).json({
            success: true,
            data: property
        });
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.send(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.getProperties = async (req, res, next) => {
    try {
        const properties = await Property.find();

        return res.status(200).json({
            success: true,
            count: properties.length,
            data: properties
        });
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.deleteProperty = async (req, res, next) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property){
            return res.status(404).json({
                success: false,
                error: "No property found"
            })
        }
        await property.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
       return res.send(500).json({
           success: false,
           error: 'Server Error'
       });
    }
}
