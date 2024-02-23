import { NextResponse } from "next/server";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url)

    const response = await fetch(`https://coppel.myvtex.com/api/catalog_system/pub/products/search?${searchParams}`)

    const data = await response.json()

    return NextResponse.json(data);
}