#!/usr/bin/env node
import fs from "fs"

function rclean() {
    console.log("Cleaning up React Project.....")
    const files = ['App.css', 'App.tsx', 'App.jsx', 'index.css']

    // truncate files
    // trucate index.css
    fs.truncate("src/index.css", 0, (err) => {
        if (err) {
            console.log("Error while truncating index.css... Try again..")
        }
    })

    // truncate App.css
    fs.truncate("src/App.css", 0, (err) => {
        if (err) {
            console.log("Error while truncating index.css... Try again..")
        }
    })

    //delete svgs
    fs.unlink("public/vite.svg", (err) => {
        if (err) {
            console.log("Error while deleting vite.svg....")
        }
    })

    fs.unlink("src/assets/react.svg", (err) => {
        if (err) {
            console.log("Error while delete react.svg....")
        }
    })

    // Write inside App.tsx a basic code
    const text = `export default function App() {
        return <div>Hello World</div>
    }`

    // check if it is tsx file 
    if (fs.existsSync("src/App.tsx")) {
        fs.writeFile("src/App.tsx", text, 'utf-8', (err) => {
            if (err) {
                console.error("Error while writing to file: App.tsx ...")
            }
        })

        console.log(`
        
        Write done
        
        `)
    } else {
        // do nothing
    }

    // check if the file is a javascript project
    if (fs.existsSync("src/App.jsx")) {
        fs.writeFile("src/App.jsx", text, 'utf-8', (err) => {
            if (err) {
                console.error("Error while writing to file: App.tsx ...")
            }
        })
        console.log(`
        
        Write done
        
        `)
    } else {
        // do nothing
    }

}

rclean()