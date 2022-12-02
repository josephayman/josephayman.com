import Head from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Nextlink from "next/link"

const meta = {
    title: "Next.js + TypeScript Example",
    description: "TypeScript example for Next.js",
    imageUrl: "https://og-image.now.sh/Next.js%20Example.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg",
    url: "https://nextjs-typescript-example.vercel.app/",
}

const PageContainer = () => {
  return (
    <div>PageContainer</div>
  )
}

export default PageContainer