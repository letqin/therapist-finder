
export const getHome = async (req, res)=> {
    try {
        res.send('We are safe');
    }
    catch (error) {
            res.status(404).json({message: error.message})
    }
}