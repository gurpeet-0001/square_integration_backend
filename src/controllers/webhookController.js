export const webhookCatalogUpdated = (req,res)=>{
    const data = req.data
    console.log('webhook hits at catalog updating : '+data);
    res.status(200)
}