// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {products} from "../../index";
import {IProduct} from "../../../components/Product";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {productId} = req.query;
    const product: IProduct | undefined = products.find(p => p.id === productId);

    res.status(200).json(product);
}