import { Router } from "express";
import form from "../controller/form";
import uslugy from "../controller/uslugy"
const router=Router()

// form
router.get("/form",form.Get);
router.get("/form/:id",form.GetId);
router.post("/form",form.Post);
router.put("/form/:id",form.Put);
router.delete("/form/:id",form.Delete);
// uslugy
router.get("/product",uslugy.Get);
router.get("/product/:id",uslugy.GetId);
router.post("/product",uslugy.Post);
router.put("/product/:id",uslugy.Put);
router.delete("/product/:id",uslugy.Delete);


export default router;