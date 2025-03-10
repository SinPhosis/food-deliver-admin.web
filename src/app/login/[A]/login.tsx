"use client";
import { useParams } from "next/navigation";
export default function Home () {
    const { A } = useParams<{A : string}>()
    return (
        <div>{A }</div>
    )
}