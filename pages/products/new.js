import Layout from "@/components/Layout";
// import { redirect } from "next/navigation";
// import axios from "axios";
// import { use, useState } from "react";
// import {useRouter} from "next/router";
import ProductForm from "@/components/ProductForm";

export default function NewProduct() {
    return (
        <Layout>
            <h1> New Product </h1>
            <ProductForm />
        </Layout>
    )
}