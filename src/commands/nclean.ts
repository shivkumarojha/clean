#!/usr/bin/env node
import fs from "fs"
function nclean() {
    console.log("Cleaning up Next js Project...")

    //delete unwanted svg files
    const svgs = ["app/favicon.ico", "public/next.svg", "public/vercel.svg"]

    for (const svg of svgs) {
        fs.unlink(svg, (err) => {
            if (err) {
                console.log("Error while deleting svgs")
            }
        })
    }

    // truncate and add basic code to globals.css
    const tailwindConfig = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `
    fs.truncate("app/globals.css", 0, (err) => {
        if (err) {
            console.log("Error while truncating globals.css")
        }

        // Write tailwind config
        fs.writeFile("app/globals.css", tailwindConfig, 'utf-8', (err) => {
            if (err) {
                console.log("Error while writing in globals.css")
            }
        })
    })

    //  basic code to page.tsx

    const pageContent = `export default function Home() {
        return <div>Home Page...</div>
    }`

    // If next project is typescript project
    if (fs.existsSync("app/page.tsx")) {
        fs.writeFile("app/page.tsx", pageContent, 'utf-8', (err) => {
            if (err) {
                console.log("Error while writing into file")
            }
        })
        console.log(`
        
        Write done
        
        `)

    }

    // If next project is javascript project
    if (fs.existsSync("app/page.jsx")) {
        fs.writeFile("app/page.jsx", pageContent, 'utf-8', (err) => {
            if (err) {
                console.log("Error while writing into file")
            }
        })
        console.log(`
        
        Write done
        
        `)
    }

    // Truncate README.md
    fs.truncate("README.md", 0, (err) => {
        if (err) {
            console.log("Error while trucating README...")
        }
    })
}

nclean()