import {Router} from 'express'
const router = Router()

router.get('/',(req,res)=>{
    res.send('this is catalog router get at /')
})

export default router;